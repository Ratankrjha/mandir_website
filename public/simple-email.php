<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Get JSON data
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        
        // Validate required fields
        if (!$data || !isset($data['name']) || !isset($data['phone'])) {
            echo json_encode(['success' => false, 'message' => 'Missing required fields']);
            exit;
        }
        
        // Extract form data
        $name = htmlspecialchars(trim($data['name']), ENT_QUOTES, 'UTF-8');
        $phone = htmlspecialchars(trim($data['phone']), ENT_QUOTES, 'UTF-8');
        $address = htmlspecialchars(trim($data['address'] ?? ''), ENT_QUOTES, 'UTF-8');
        $occasion = htmlspecialchars(trim($data['occasion'] ?? ''), ENT_QUOTES, 'UTF-8');
        $kalashCount = htmlspecialchars(trim($data['kalashCount'] ?? '1'), ENT_QUOTES, 'UTF-8');
        $preferredDate = htmlspecialchars(trim($data['preferredDate'] ?? ''), ENT_QUOTES, 'UTF-8');
        $mode = htmlspecialchars(trim($data['mode'] ?? 'in-person'), ENT_QUOTES, 'UTF-8');
        $remarks = htmlspecialchars(trim($data['remarks'] ?? ''), ENT_QUOTES, 'UTF-8');
        
        // Create email content
        $emailContent = "शांति कलश आवेदन\n\n";
        $emailContent .= "नाम: $name\n";
        $emailContent .= "मोबाइल: $phone\n";
        $emailContent .= "पता: $address\n";
        $emailContent .= "उद्देश्य: $occasion\n";
        $emailContent .= "शांति कलश संख्या: $kalashCount\n";
        $emailContent .= "इच्छित तिथि: $preferredDate\n";
        $emailContent .= "उपस्थिति प्रकार: " . ($mode === 'in-person' ? 'स्वयं उपस्थित' : 'दूरभाष मार्फत संकल्प') . "\n";
        $emailContent .= "अतिरिक्त टिप्पणी: $remarks\n";
        $emailContent .= "आवेदन तिथि: " . date('d/m/Y H:i:s') . "\n";
        
        // Store in log file first (guaranteed to work)
        $logEntry = date('Y-m-d H:i:s') . " | " . json_encode($data) . "\n";
        file_put_contents('applications.log', $logEntry, FILE_APPEND | LOCK_EX);
        
        // Store in JSON file
        $jsonFile = 'applications.json';
        $applications = [];
        if (file_exists($jsonFile)) {
            $applications = json_decode(file_get_contents($jsonFile), true) ?: [];
        }
        $applications[] = [
            'timestamp' => date('Y-m-d H:i:s'),
            'data' => $data,
            'email_sent' => false,
            'method' => 'stored_locally'
        ];
        file_put_contents($jsonFile, json_encode($applications, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        
        // Try to send email using a simple method
        $emailSent = false;
        $methodUsed = 'none';
        
        // Method 1: Try basic PHP mail with proper headers
        $to = 'ratanworkid@gmail.com';
        $subject = "शांति कलश आवेदन - $name";
        $from = 'noreply@mandirwebsite.com';
        
        $headers = "From: \"$name\" <$from>\r\n";
        $headers .= "Reply-To: $to\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "X-Priority: 3\r\n";
        $headers .= "X-MSMail-Priority: Normal\r\n";
        
        if (@mail($to, $subject, $emailContent, $headers)) {
            $emailSent = true;
            $methodUsed = 'PHP Mail';
        }
        
        // Method 2: Try using sendmail if available
        if (!$emailSent && function_exists('sendmail')) {
            $sendmailCommand = "echo '" . addslashes($emailContent) . "' | sendmail -t -i -f $from";
            $result = shell_exec($sendmailCommand);
            if ($result !== null) {
                $emailSent = true;
                $methodUsed = 'Sendmail';
            }
        }
        
        // Method 3: Try using a free email service that doesn't require API keys
        if (!$emailSent) {
            // Use a simple HTTP POST to a free service
            $postData = [
                'to' => $to,
                'subject' => $subject,
                'message' => $emailContent,
                'from' => $from
            ];
            
            $ch = curl_init('https://httpbin.org/post'); // This will show us if our request works
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            // This won't actually send email but will show us if curl is working
            if ($httpCode === 200) {
                $methodUsed = 'HTTP Test (curl working)';
            }
        }
        
        // Update log with email status
        if ($emailSent) {
            $statusLog = date('Y-m-d H:i:s') . " | EMAIL SENT via $methodUsed | " . json_encode($data) . "\n";
        } else {
            $statusLog = date('Y-m-d H:i:s') . " | EMAIL FAILED | Method: $methodUsed | " . json_encode($data) . "\n";
        }
        file_put_contents('email-status.log', $statusLog, FILE_APPEND | LOCK_EX);
        
        // Return response
        if ($emailSent) {
            echo json_encode([
                'success' => true,
                'message' => "Email sent successfully using $methodUsed",
                'method' => $methodUsed
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Email could not be sent, but application data is stored locally',
                'stored' => true,
                'log_file' => 'applications.log',
                'json_file' => 'applications.json',
                'status_log' => 'email-status.log',
                'method_tried' => $methodUsed
            ]);
        }
        
    } catch (Exception $e) {
        error_log("PHP Error: " . $e->getMessage());
        echo json_encode([
            'success' => false,
            'message' => 'Server error: ' . $e->getMessage()
        ]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
