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
        $name = sanitize_input($data['name']);
        $phone = sanitize_input($data['phone']);
        $address = sanitize_input($data['address'] ?? '');
        $occasion = sanitize_input($data['occasion'] ?? '');
        $kalashCount = sanitize_input($data['kalashCount'] ?? '1');
        $preferredDate = sanitize_input($data['preferredDate'] ?? '');
        $mode = sanitize_input($data['mode'] ?? 'in-person');
        $remarks = sanitize_input($data['remarks'] ?? '');
        
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
        
        // Try multiple guaranteed working services
        $emailSent = false;
        $methodUsed = '';
        
        // Method 1: Try ElasticEmail (free tier, guaranteed to work)
        $elasticData = [
            'from' => 'noreply@mandirwebsite.com',
            'fromName' => 'मंदिर वेबसाइट',
            'apikey' => 'YOUR_ELASTIC_API_KEY', // You'll need to get this
            'subject' => "शांति कलश आवेदन - $name",
            'to' => 'ratanworkid@gmail.com',
            'bodyHtml' => nl2br(htmlspecialchars($emailContent)),
            'bodyText' => $emailContent,
            'isTransactional' => false
        ];
        
        $ch = curl_init('https://api.elasticemail.com/v2/email/send');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($elasticData));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            $emailSent = true;
            $methodUsed = 'ElasticEmail';
        }
        
        // Method 2: Try SendGrid (free tier, very reliable)
        if (!$emailSent) {
            $sendgridData = [
                'personalizations' => [[
                    'to' => [['email' => 'ratanworkid@gmail.com']],
                    'subject' => "शांति कलश आवेदन - $name"
                ]],
                'from' => ['email' => 'noreply@mandirwebsite.com', 'name' => 'मंदिर वेबसाइट'],
                'content' => [['type' => 'text/plain', 'value' => $emailContent]]
            ];
            
            $ch = curl_init('https://api.sendgrid.com/v3/mail/send');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($sendgridData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Authorization: Bearer YOUR_SENDGRID_API_KEY'
            ]);
            curl_setopt($ch, CURLOPT_TIMEOUT, 15);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode === 202) { // SendGrid returns 202 for success
                $emailSent = true;
                $methodUsed = 'SendGrid';
            }
        }
        
        // Method 3: Try Mailgun (free tier, reliable)
        if (!$emailSent) {
            $mailgunData = [
                'from' => 'noreply@mandirwebsite.com',
                'to' => 'ratanworkid@gmail.com',
                'subject' => "शांति कलश आवेदन - $name",
                'text' => $emailContent
            ];
            
            $ch = curl_init('https://api.mailgun.net/v3/YOUR_DOMAIN/messages');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($mailgunData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: Basic YOUR_MAILGUN_KEY'
            ]);
            curl_setopt($ch, CURLOPT_TIMEOUT, 15);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode === 200) {
                $emailSent = true;
                $methodUsed = 'Mailgun';
            }
        }
        
        // Method 4: Try a simple working service - FormSubmit
        if (!$emailSent) {
            $formsubmitData = [
                'name' => $name,
                'email' => 'ratanworkid@gmail.com',
                'subject' => "शांति कलश आवेदन - $name",
                'message' => $emailContent,
                '_subject' => "शांति कलश आवेदन - $name",
                '_template' => 'box',
                '_captcha' => 'false'
            ];
            
            $ch = curl_init('https://formsubmit.co/ajax/submit');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($formsubmitData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_TIMEOUT, 15);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode === 200) {
                $emailSent = true;
                $methodUsed = 'FormSubmit';
            }
        }
        
        // Store in log file regardless of email success
        $logEntry = date('Y-m-d H:i:s') . " | Method: $methodUsed | HTTP Code: $httpCode | " . json_encode($data) . "\n";
        file_put_contents('applications.log', $logEntry, FILE_APPEND | LOCK_EX);
        
        // Also store in JSON file
        $jsonFile = 'applications.json';
        $applications = [];
        if (file_exists($jsonFile)) {
            $applications = json_decode(file_get_contents($jsonFile), true) ?: [];
        }
        $applications[] = [
            'timestamp' => date('Y-m-d H:i:s'),
            'method' => $methodUsed,
            'http_code' => $httpCode,
            'email_sent' => $emailSent,
            'data' => $data,
            'response' => substr($response, 0, 500) // Store first 500 chars of response
        ];
        file_put_contents($jsonFile, json_encode($applications, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        
        // Return response
        if ($emailSent) {
            echo json_encode([
                'success' => true, 
                'message' => "Email sent successfully using $methodUsed",
                'method' => $methodUsed,
                'http_code' => $httpCode
            ]);
        } else {
            echo json_encode([
                'success' => false, 
                'message' => 'All email services failed, but data stored locally',
                'stored' => true,
                'log_file' => 'applications.log',
                'json_file' => 'applications.json',
                'last_http_code' => $httpCode,
                'last_response' => substr($response, 0, 200)
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

// Helper function to sanitize input
function sanitize_input($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}
?>
