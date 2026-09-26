<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GalleryPage from './Gallery';
import Festivals from './Festival';
// {/* <Route path="/festivals" element={<Festivals />} /> */}
const NEXT_FESTIVAL_DATE = new Date('2026-10-10T06:00:00');
const NAV_ITEMS = [
  {
    label: 'मुख्य पृष्ठ',
    path: '/',
    children: [
      // { label: ' मंदिर', path: '/' },
      { label: 'मंदिरक परिचय', path: '/about' },
      { label: 'इतिहास आ महत्व', path: '/history' },
      { label: 'देवी-देवता आ मन्दिर', path: '/deities' },
      { label: 'फोटो गैलरी', path: '/gallery' },
      { label: 'दैनिक आरती समय', path: '/darshan-timings' },
    ],
  },
  {
    label: 'पूजा सेवा',
    path: '/services',
    children: [
      { label: 'दर्शन आ आरती समय', path: '/darshan-timings' },
      { label: 'शांति कलश आवेदन', path: '/seva' },
    ],
  },
  {
    label: 'मंत्र या पुस्तक',
    path: '/mantra-books',
    children: [
      { label: 'दुर्गा सप्तशती', path: '/durga-saptashati' },
      { label: 'शिव चालीसा', path: '/shiva-chalisa' },
      { label: 'देवी आरती', path: '/devi-aarti' },
      { label: 'शिव आरती', path: '/shiva-aarti' },
      { label: 'संध्यान मंत्र', path: '/sandhya-mantra' },
      { label: 'प्रार्थना संग्रह', path: '/prayer-collection' },
      { label: 'चौरचन पूजा मंत्र', path: '/chaurchan-mantra' },
      { label: 'उक्का-पाती मंत्र', path: '/ukka-pati-mantra' },
    ],
  },
  {
    label: 'तीर्थयात्री सुविधा',
    path: '/pilgrim-services',
    children: [
      { label: 'आवास व्यवस्था (सूचना)', path: '/accommodation' },
      { label: 'कैना पहुँचब', path: '/how-to-reach' },
      { label: 'क्या करब / की नहि करब', path: '/dos-donts' },
      { label: 'प्रश्न आ उत्तर (FAQ)', path: '/faq' },
    ],
  },
  
  {
  label: 'उत्सव आ कार्यक्रम',
  path: '/festivals',
  children: [
    { label: 'दुर्गा पूजा महोत्सव', path: '/festivals#durga-puja' },
    { label: 'महाशिवरात्रि', path: '/festivals#maha-shivratri' },
    { label: 'सरस्वती पूजा', path: '/festivals#saraswati-puja' },
    { label: 'राम नवमी', path: '/festivals#ram-navmi' },
    { label: 'वार्षिक कार्यक्रम', path: '/events' },
    { label: 'समाचार आ सूचना', path: '/news' },
  ]},
  {
    label: 'ऑनलाइन सुविधा',
    path: '/online',
    children: [
      { label: 'दान संबंधी जानकारी', path: '/donations' },
      { label: 'स्वयंसेवक पंजीकरण', path: '/volunteer' },
      { label: 'सुझाव आ प्रतिक्रिया', path: '/feedback' },
    ],
  },
  {
    label: 'मंदिर प्रबंधन',
    path: '/management',
    children: [
      { label: 'समिति / प्रबंधन', path: '/management' },
      { label: 'संपर्क फॉर्म', path: '/contact' },
    ],
  },
];

function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/deities" element={<DeitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/darshan-timings" element={<DarshanTimingsPage />} />
            <Route path="/seva" element={<SevaPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/dos-donts" element={<DosDontsPage />} />
            <Route path="/faq" element={<FaqPage />} />
<Route path="/festivals" element={<Festivals />} />            <Route path="/durga-puja" element={<DurgaPujaPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/how-to-reach" element={<HowToReachPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/durga-saptashati" element={<DurgaSaptashatiPage />} />
            <Route path="/shiva-chalisa" element={<ShivaChalisaPage />} />
            <Route path="/devi-aarti" element={<DeviAartiPage />} />
            <Route path="/shiva-aarti" element={<ShivaAartiPage />} />
            <Route path="/sandhya-mantra" element={<SandhyaMantraPage />} />
            <Route path="/prayer-collection" element={<PrayerCollectionPage />} />
            <Route path="/chaurchan-mantra" element={<ChaurchanMantraPage />} />
            <Route path="/ukka-pati-mantra" element={<UkkaPatiMantraPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [autoplayBlocked, setAutoplayBlocked] = React.useState(false);
  const [audioError, setAudioError] = React.useState(false);
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    let waitingForInteraction = false;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const handlePlay = () => {
      setIsPlaying(true);
      setAutoplayBlocked(false);
      setAudioError(false);
    };
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
      setAutoplayBlocked(false);
      setAudioError(true);
    };
    function removeGestureListeners() {
      document.removeEventListener('pointerdown', resumeAfterInteraction, true);
      document.removeEventListener('keydown', resumeAfterInteraction, true);
    }
    function resumeAfterInteraction() {
      if (!waitingForInteraction || !audio.paused) return;
      waitingForInteraction = false;
      removeGestureListeners();
      audio.play().catch(() => {
        setIsPlaying(false);
        setAutoplayBlocked(true);
      });
    }

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause);
    audio.addEventListener('error', handleError);

    audio.play().catch(() => {
      setIsPlaying(false);
      setAutoplayBlocked(true);
      waitingForInteraction = true;
      document.addEventListener('pointerdown', resumeAfterInteraction, true);
      document.addEventListener('keydown', resumeAfterInteraction, true);
    });

    return () => {
      removeGestureListeners();
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {
        setIsPlaying(false);
        setAutoplayBlocked(true);
      });
    } else {
      audio.pause();
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <header className="site-header">
      <audio
        id="durgaAudio"
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/Ya_Devi_Sarvbhuteshu___GODDESS_DURGA_STUTI___mantra_for_POSITIVE_ENERGY,_PROSPERITY___SUCCESS(48k).mp3`}
        autoPlay
        preload="metadata"
      />
      <div className="top-bar">
        <div className="top-bar-text">
          दुर्गा महादेव स्थान, हुलास – सुपौल, मिथिला
        </div>
      </div>
      <div className="header-main">
        <div className="brand">
          <div className="brand-logo-circle">
            ॐ
            <div className="smoke-container">
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
            </div>
          </div>
          {isPlaying && (
            <div className="audio-progress-vertical">
              <span className="audio-time-small">{formatTime(currentTime)}</span>
              <input
                type="range"
                className="audio-progress-bar-vertical"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgressChange}
              />
              <span className="audio-time-small">{formatTime(duration)}</span>
            </div>
          )}
          <div className="brand-audio-section">
            <button
              className="audio-toggle-btn"
              type="button"
              onClick={toggleAudio}
              aria-label={isPlaying ? 'Pause temple music' : 'Play temple music'}
              title={audioError ? 'The audio file could not be loaded' : autoplayBlocked ? 'Tap to start temple music' : isPlaying ? 'Pause temple music' : 'Play temple music'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            {(autoplayBlocked || audioError) && (
              <span className="audio-status" role="status">
                {audioError ? 'संगीत लोड नहीं हो पाया' : 'संगीत शुरू करने के लिए टैप करें'}
              </span>
            )}
            <div className="brand-text">
              <div className="brand-title">दुर्गा महादेव स्थान, हुलास</div>
              <div className="brand-subtitle">
                सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके
              </div>
            </div>
          </div>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item.label}
                className={`nav-item ${
                  activeDropdown === index ? 'nav-item-active' : ''
                }`}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <>
                    <button
                      className="nav-item-toggle"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                    >
                      ▾
                    </button>
                    <div
                      className={`dropdown ${
                        activeDropdown === index ? 'dropdown-open' : ''
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="dropdown-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function FestivalCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set next major festival (Durga Puja - October 10, 2026)
  const festivalName = 'दुर्गा पूजा महोत्सव';

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = NEXT_FESTIVAL_DATE - new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="festival-countdown">
      <h2 className="countdown-title">आगामी महोत्सव</h2>
      <div className="countdown-festival-name">{festivalName}</div>
      <div className="countdown-display">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">दिन</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">घंटा</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">मिनट</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">सेकंड</span>
        </div>
      </div>
      <Link to="/festivals#durga-puja" className="countdown-btn">
        🪔 महोत्सव के बारे मे जानू
      </Link>
    </section>
  );
}

function HomePage() {
  return (
    <div className="page home-page">
      <HomeCarousel />
      <HeroSection />
      <FestivalCountdown />
      <QuickInfoStrip />
      <HighlightsSection />
      <NewsAndUpdates />
    </div>
  );
}

function HeroSection() {
  const heroBg = `${process.env.PUBLIC_URL}/photos/dp1.jpg`;

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>दुर्गा महादेव स्थान, हुलास</h1>
          <p className="hero-mantra">
            सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके। शरण्ये त्र्यम्बके गौरी
            नारायणी नमोऽस्तुते॥
          </p>
          <p className="hero-description">
            सुपौल जिलाक हुलास गाँवमे अवस्थित दुर्गा महादेव स्थान मिथिलाक
            प्रमुख धार्मिक आ आध्यात्मिक केंद्र छी। एहि पवित्र धाममे देवी दुर्गा
            आ भगवान शिवक आराधना हजारों श्रद्धालुभ अपन आस्था आ भक्ति संग करैत
            छथि।
          </p>
          <div className="hero-buttons">
            <Link to="/darshan-timings" className="btn btn-primary">
              दर्शन समय देखू
            </Link>
            <Link to="/festivals" className="btn btn-outline">
              मुख्य पर्व आ उत्सव
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <h2>आजुक प्रमुख जानकारी</h2>
          <ul>
            <li>
              संध्याकालीन आरती – प्रतिदिन साँझ 8:00 बजे, सभ श्रद्धालुभ लेल
              खुल्ला।
            </li>
            <li>विशेष पूजा: प्रत्येक सोमबार भगवान महादेवक रुद्राभिषेक।</li>
            <li>दुर्गा पूजा महोत्सव: शारदीय नवरात्रि दौरान विशेष कार्यक्रम।</li>
          </ul>
          <Link to="/news" className="link-black">
            सभ समाचार आ विस्तृत कार्यक्रम देखू →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeCarousel() {
  const slides = [

      {  src: `${process.env.PUBLIC_URL}/photos/drive-download-20260307T153529Z-1-001 (1)/IMG-20241012-WA0007.jpg`,
      alt: 'मंदिर फोटो'},
 
    { src: `${process.env.PUBLIC_URL}/photos/nv1.jpg`, alt: 'मन्दिर आ प्रांगण' }, 
    
    { src: `${process.env.PUBLIC_URL}/photos/hulas7.jpg`, alt: 'मन्दिर आ प्रांगण' },  
       { src: `${process.env.PUBLIC_URL}/photos/hulas1.jpg`, alt: 'मन्दिर बाह्य दृश्य 1' },
         { src: `${process.env.PUBLIC_URL}/photos/dp2.jpg`, alt: 'मन्दिरक रात्रिक दृश्य' }, 
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  if (!slides.length) return null;

  const current = slides[index];

  return (
    <section className="carousel-section">
      <div className="carousel-inner">
        <img src={current.src} alt={current.alt} />
        <div className="carousel-caption">{current.alt}</div>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot ${i === index ? 'carousel-dot-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function QuickInfoStrip() {
  return (
    <section className="quick-info">
      <div className="quick-info-item">
        <div className="quick-info-label">दैनिक दर्शन समय</div>
        <div className="quick-info-value">
          बिहान 5:00 – दुपहरि 12:00, साँझ 4:00 – राति 9:00
        </div>
      </div>
      <div className="quick-info-item">
        <div className="quick-info-label">स्थान</div>
        <div className="quick-info-value">
          वार्ड नं. 8, हुलास, राघोपुर, सुपौल, बिहार – 852111
        </div>
      </div>
      <div className="quick-info-item">
        <div className="quick-info-label">सम्पर्क</div>
        <div className="quick-info-value">
          +91-8825130710, +91-7549662532
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const cards = [
    {
      title: 'मंदिरक इतिहास',
      description:
        'कहल जाइत अछि जे ई प्राचीन शिवमन्दिर 18म शताब्दी सँ पहिने निर्माण भेल आ कालान्तरमे देवी दुर्गाक भव्य मन्दिरक रूपमे विकसित भेल।',
      link: '/history',
    },
    {
      title: 'दुर्गा पूजा महोत्सव',
      description:
        'शारदीय नवरात्रि दौरान दुर्गा महादेव स्थान पर भव्य दुर्गा पूजा महोत्सव आयोजित होइत अछि, जतए सम्पूर्ण जिलासँ हजारों भक्त सभ जोड़ाइत छथि।',
      link: '/durga-puja',
    },
    {
      title: 'देखबाक चीज',
      description:
        'मुख्य मन्दिर संग-संग देवी पार्वती, भगवान गणेश आ अन्य देवतासभक मन्दिर, पोखर, बगीचा आ विशाल प्रांगण भक्तिमय वातावरण तैयार करैत अछि।',
      link: '/deities',
    },
  ];

  return (
    <section className="highlights">
      <h2>दुर्गा महादेव स्थानक मुख्य विशेषता</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <article key={card.title} className="info-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to={card.link} className="link-primary">
              विस्तृत पढ़ू →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsAndUpdates() {
  const items = [
    {
      date: 'सितम्बर – अक्तूबर 2025',
      title: 'दुर्गा पूजा महोत्सव 2025',
      description:
        '22 सितम्बर सँ 02 अक्तूबर 2025 धरि दुर्गा पूजा महोत्सवक आयोजन, भागवत कथा, सांस्कृतिक कार्यक्रम आ भजन संध्या के संग।',
    },
    {
      date: 'प्रतिदिन',
      title: 'संध्याकालीन पुष्पांजलि आ आरती',
      description:
        'प्रत्येक संध्याकाल 8:00 बजे पुष्पांजलि आ आरती संपन्न होइत अछि। सभ श्रद्धालुगन सँ प्रार्थना जे नियमित रूप सँ सहभागिता करथि।',
    },
    {
      date: 'शिघ्र',
      title: 'ऑनलाइन दान आ सेवा सूचना',
      description:
        'मन्दिरक विकास, सेवा आ जनसहभागिता लेल ऑनलाइन सूचना पोर्टल शिघ्र चालू करबाक योजना अछि।',
    },
  ];

  return (
    <section className="news-section">
      <div className="section-header">
        <h2>समाचार आ अपडेट</h2>
        <Link to="/news" className="link-primary">
          सभ समाचार देखू →
        </Link>
      </div>
      <div className="news-list">
        {items.map((item) => (
          <article key={item.title} className="news-item">
            <div className="news-date">{item.date}</div>
            <h3 className="news-title">{item.title}</h3>
            <p className="news-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <h1>मंदिरक परिचय</h1>
      <p>
        दुर्गा महादेव स्थान, हुलास, सुपौल जिलाक राघोपुर प्रखंड अंतर्गत एक
        प्राचीन हिन्दू मन्दिर परिसर अछि। ई मन्दिर देवी दुर्गा आ भगवान शिवक
        संयुक्त आराधना स्थल छी, जतए वर्षभरि विभिन्न धार्मिक, आध्यात्मिक आ
        सांस्कृतिक कार्यक्रमक आयोजन होइत रहैत अछि।
      </p>
      <p>
        मन्दिर परिसरमे मुख्य दुर्गा मन्दिर, प्राचीन शिवलिङ्ग, देवी पार्वती,
        भगवान गणेश आ अन्य देवतासभक मन्दिर, विशाल प्रांगण, पोखर, बगीचा, मंडप
        आ श्रद्धालुगनक विश्राम स्थलक समुचित व्यवस्था अछि।
      </p>
    </div>
  );
}

function HistoryPage() {
  return (
    <div className="page">
      <h1>इतिहास आ धार्मिक महत्व</h1>
      <p>
        लोक-श्रुति अनुसार ई महादेव स्थान 18म शताब्दी सँ पहिने सँ अस्तित्वमे
        अछि। स्थानीय जनश्रुति, पुरनका कथन आ विद्वान लोकनिक मत अनुसार एतए
        स्थापित शिवलिङ्ग अत्यन्त प्राचीन आ सिद्ध मानल जाइत अछि।
      </p>
      <p>
        कालान्तरमे श्रद्धालुगनक सहयोग, ग्राम समाजक सहभागिता आ दानी
        सज्जनसभक प्रेरणासँ देवी दुर्गाक भव्य मन्दिर निर्माण भेल। नव-नव
        निर्माण, पुनर्निर्माण आ विस्तारक माध्यम सँ आजुक स्वरूपमे मन्दिर
        परिसर तैयार भेल अछि।
      </p>
      <p>
        दुर्गा महादेव स्थान केवल पूजा-अर्चना करबाक स्थल नहि, बल्कि मिथिला
        परम्परा, संस्कार, लोक-संस्कृति आ आध्यात्मिक जागरणक केन्द्र रूपेँ
        मानल जाइत अछि।
      </p>
    </div>
  );
}

function DeitiesPage() {
  return (
    <div className="page">
      <h1>देवी-देवता आ मन्दिर परिसर</h1>
      <ul className="bullet-list">
        <li>
          मुख्य मन्दिर – देवी दुर्गाक सिंहासन, सुन्दर सजावट, शिल्प आ अलंकरणक
          संग।
        </li>
        <li>
          महादेव मन्दिर – प्राचीन शिवलिङ्ग, जे अत्यन्त पवित्र आ मनोकामना
          पूर्ण करैया मानल जाइत अछि।
        </li>
        <li>देवी पार्वती मन्दिर, भगवान गणेश मन्दिर आ अन्य देवालय।</li>
        <li>विशाल प्रांगण, परिक्रमा पथ, यज्ञशाला आ सांस्कृतिक कार्यक्रमक मंच।</li>
        <li>पोखर आ बगीचा, जे सम्पूर्ण वातावरण केँ हरित आ शान्त बनबैत अछि।</li>
      </ul>
    </div>
  );
}

function DarshanTimingsPage() {
  return (
    <div className="page">
      <h1>दर्शन आ आरती समय</h1>
      <h2>दैनिक समय</h2>
      <ul className="bullet-list">
        <li>भोरक दर्शन: बिहान 5:00 – 8:00 बजे</li>
        <li>पूर्वाह्न दर्शन: 8:00 – 12:00 बजे</li>
        <li>साँझक दर्शन: 4:00 – 9:00 बजे</li>
      </ul>
      <h2>मुख्य आरती</h2>
      <ul className="bullet-list">
        <li>मंगला आरती – भोर 5:30 बजे</li>
        <li>दोपहरिया भोग आरती – दिन 12:00 बजे</li>
        <li>संध्याकालीन आरती – साँझ 7:30 – 8:00 बजे</li>
      </ul>
      <p>त्योहारक दिन विशेष आरती आ अतिरिक्त समयसूची घोषित कएल जाइत अछि।</p>
    </div>
  );
}

function SevaPage() {
  return (
    <div className="page">
      <h1>पूजा, सेवा आ विशेष अनुष्ठान</h1>
      <p>
        मन्दिरमे नियमित रूप सँ विभिन्न प्रकारक पूजा, अनुष्ठान आ खास अवसरक
        विशेष कार्यक्रम आयोजित होइत अछि। स्थानीय पुरोहित मण्डली द्वारा समस्त
        विधि-विधान वैदिक परम्परा अनुसारे सम्पन्न कएल जाइत अछि।
      </p>
      <ul className="bullet-list">
        <li>सामान्य पूजा – नित्य दर्शन, पुष्प अर्पण, दीपदान इत्यादि।</li>
        <li>विशेष पूजा – दुर्गा सप्तशती पाठ, रुद्राभिषेक, महामृत्युंजय जप।</li>
        <li>
          संस्कार – नामकरण, उपनयन, गृह प्रवेश, नव गृह प्रवेश, विवाह पूर्व शांति
          पाठ, इत्यादि।
        </li>
      </ul>
      <p>
        विस्तृत पूजा-सूची, तिथि-समय आ सहयोग राशिक जानकारी मन्दिर कार्यालयमे
        उपलब्ध अछि।
      </p>

      <section className="form-section">
        <h2>शांति कलश आवेदन (Shanti Kalash Application)</h2>
        <p>
          जे श्रद्धालु स्वयं अथवा परिवारक शांति, आरोग्य, समृद्धि आ विशेष
          मनोकामनाक निमित्त शांति कलश कराबय चाहैत छथि, ओ एतय प्राथमिक
          जानकारी भरि सकैत छथि। मन्दिर प्रबंधन द्वारा फोन मार्फत अंतिम पुष्टि
          आ तिथि निश्चित कएल जायत।
        </p>
        <ShantiKalashForm />
      </section>
    </div>
  );
}

function ShantiKalashForm() {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    address: '',
    occasion: '',
    kalashCount: '1',
    preferredDate: '',
    mode: 'in-person',
    remarks: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Just show submitted state without any email functionality
    setSubmitted(true);
  }

  return (
    <div className="shanti-form-wrapper">
      <form className="shanti-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>श्रद्धालुक नाम *</span>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>शांति कलश संख्या *</span>
            <select
              name="kalashCount"
              required
              value={form.kalashCount}
              onChange={handleChange}
            >
              <option value="1">1 कलश</option>
              <option value="2">2 कलश</option>
              <option value="3">3 कलश</option>
              <option value="4">4 कलश</option>
              <option value="5">5 कलश</option>
              <option value="6">6 कलश</option>
              <option value="7">7 कलश</option>
              <option value="8">8 कलश</option>
              <option value="9">9 कलश</option>
              <option value="10">10 कलश</option>
              <option value="11">11 कलश</option>
              <option value="12">12 कलश</option>
            </select>
          </label>
          <label className="form-field">
            <span>मोबाइल नंबर *</span>
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label className="form-field form-field-full">
            <span>पूरा पता *</span>
            <textarea
              name="address"
              required
              rows={2}
              value={form.address}
              onChange={handleChange}
            />
          </label>
          <label className="form-field form-field-full">
            <span>शांति कलशक उद्देश्य / प्रसंग *</span>
            <textarea
              name="occasion"
              required
              rows={2}
              placeholder="उदाहरण: गृह शांति, स्वास्थ्य लाभ, पितृ शांति, व्यवसाय उन्नति इत्यादि"
              value={form.occasion}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>इच्छित तिथि</span>
            <input
              name="preferredDate"
              type="date"
              value={form.preferredDate}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>उपस्थिति प्रकार</span>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
            >
              <option value="in-person">स्वयं उपस्थित</option>
              <option value="remote">दूरभाष मार्फत संकल्प</option>
            </select>
          </label>
          <label className="form-field form-field-full">
            <span>अतिरिक्त टिप्पणी</span>
            <textarea
              name="remarks"
              rows={2}
              value={form.remarks}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          आवेदन सबमिट करू
        </button>
        <p className="form-note">
          * आवेदन सबमिट करबाक बाद मन्दिर प्रबंधन टीम द्वारा प्रदान कएल गेल
          मोबाइल नंबर पर संपर्क कएल जायत।
        </p>
      </form>

      {submitted && (
        <div className="form-confirm">
          <h3>आवेदन प्राप्त भʼ गेल</h3>
          <p>
            धन्यवाद {form.name} जी, अहाँक शांति कलश संबंधी प्राथमिक आवेदन
            सुरक्षित कएल गेल अछि।
          </p>
          <p>
            मन्दिर प्रबंधन अहाँसँ शीघ्रहि संपर्क करैत।
          </p>
          <p>
            <strong>संपर्क नंबर:</strong> +91-8825130710, +91-7549662532
          </p>
        </div>
      )}
    </div>
  );
}

function AccommodationPage() {
  return (
    <div className="page">
      <h1>आवास संबंधी सूचना</h1>
      <p>
        वर्तमानमे मन्दिरक स्वयं केर आवास गृह सीमित अछि। हुलास आ आसपासक
        क्षेत्रमे निजी लॉज, धर्मशाला आ होटल उपलब्ध अछि, जतए श्रद्धालु
        ठहरबाक व्यवस्था कऽ सकैत छथि।
      </p>
      <p>
        नजदीकी मुख्य शहर – राघोपुर, सिमराही आ सुपौल मे समेत विभिन्न धर्मशाला
        आ गेस्ट हाउस स्थित अछि। भविष्यमे मन्दिरक ओरसँ यात्री-निवास निर्माणक
        योजना सेहो अछि।
      </p>
    </div>
  );
}

function DurgaPujaPage() {
  return (
    <div className="page">
      <h1>दुर्गा पूजा महोत्सव</h1>
      <p>
        दुर्गा महादेव स्थान, हुलास मे शारदीय नवरात्रि दौरान दुर्गा पूजा
        महोत्सव विशेष रूप सँ भव्य ढंग सँ मनाओल जाइत अछि। कलश स्थापना, घट
        स्थापना सँ आरम्भ भऽ नवमी, दशमी धरि प्रतिदिन पूजा, पाठ, भजन, प्रवचन
        आ सांस्कृतिक कार्यक्रम होइत अछि।
      </p>
      <p>
        नवरात्रि दौरान सम्पूर्ण परिसर लाइट, फूल आ विविध सजावट सँ अलोकित
        रहैत अछि। भक्तजन अपन परिवार संग एहि पुण्य पर्वमे सम्मिलित होइत छथि
        आ देवीक कृपा प्राप्त करैत छथि।
      </p>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="page">
      
      
    <div className="page">
      <h1>वार्षिक कार्यक्रम आ आयोजन</h1>
      <p>मन्दिरमे वर्षभरि आयोजित प्रमुख धार्मिक उत्सव आ कार्यक्रम निम्न प्रकार अछि:</p>

      <ul>
        <li><strong>जनवरी–फरवरी:</strong> सरस्वती पूजा (माघ, शुक्ल पक्ष पंचमी) – ज्ञान, शिक्षा आ संगीतक आराधना।</li>
        <li><strong>मार्च–अप्रैल:</strong> राम नवमी (चैत्र, शुक्ल पक्ष नवमी) – भगवान रामक जन्म उत्सव।</li>
        <li><strong>अप्रैल–मई:</strong> रंगपंचमी / होली – रंग आ खेलक सांस्कृतिक आयोजन।</li>
        <li><strong>सितम्बर–अक्टूबर:</strong> दुर्गा पूजा महोत्सव (आश्विन, शुक्ल पक्ष सप्तमी–दशमी) – देवी दुर्गाक आराधना आ सांस्कृतिक कार्यक्रम।</li>
        <li><strong>फाल्गुन (फरवरी–मार्च):</strong> महाशिवरात्रि (कृष्ण पक्ष १४म राति) – भगवान शिवक आराधना आ रात्रि जागरण।</li>
        <li><strong>सांस्कृतिक आयोजन:</strong> वर्षभरि संगीत, नृत्य, नाटक आ सामुदायिक कार्यक्रम।</li>
      </ul>
    </div>

    </div>
  );
}

function NewsPage() {
  return (
    <div className="page">
      <h1>समाचार आ सूचना</h1>
      <p>
        एतए मन्दिर सँ जुड़ल मुख्य समाचार, विशेष घोषणा, महोत्सवक तिथि, प्रसंग
        आ अन्य अद्यतन सूचनासभ प्रकाशित कएल जायत। फिलहाल आधारभूत सूचना
        प्रदर्शित अछि।
      </p>
    </div>
  );
}

function DonationsPage() {
  return (
    <div className="page">
      <h1>दान संबंधी जानकारी</h1>
      <p>
        दुर्गा महादेव स्थानक समुचित संचालन, नव निर्माण, सेवा कार्य, धार्मिक
        कार्यक्रम, प्रकाश-व्यवस्था, स्वच्छता आ सामाजिक पहलसभ मन्दिरक दान आ
        सहयोग पर आधारित अछि।
      </p>
      <p>वर्तमानमे दान मुख्य रूप सँ नगद अथवा मन्दिर कार्यालय मार्फत स्वीकार होइत अछि।</p>
      <p>
        बैंक विवरण, UPI अथवा अन्य माध्यम सँ दानक ऑनलाइन सुविधा निकट भविष्यमे
        सुरु करबाक योजना अछि। विस्तृत जानकारी लेल मन्दिर प्रबंधन सँ सम्पर्क
        कएल जा सकैत अछि।
      </p>
      
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2 style={{ marginBottom: '30px', color: '#7c1a1a' }}>ऑनलाइन दान करबाक लेल</h2>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '30px',
          padding: '40px',
          backgroundColor: '#f8f8f8',
          borderRadius: '15px',
          border: '2px solid #7c1a1a',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>QR Code स्कैन करू</h3>
            <img 
              src="/photos/donation/qrcode.jpg" 
              alt="Donation QR Code" 
              style={{ 
                width: "250px", 
                height: "250px",
                borderRadius: "15px",
                border: "3px solid #7c1a1a",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            />
            <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
              ऊपर दिएल QR code कें स्कैन कएक दान करू
            </p>
          </div>
          
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h3 style={{ marginBottom: '25px', color: '#333', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
              बैंक खाता विवरण
            </h3>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '25px', 
              borderRadius: '10px',
              border: '1px solid #ddd',
              fontSize: '16px',
              lineHeight: '1.8'
            }}>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>खाता नाम:</strong> Durga Puja Samiti Hulash
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>खाता संख्या:</strong> 458010100002205
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>IFSC कोड:</strong> BKID0004580
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>बैंक:</strong> Bank of India
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h3 style={{ marginBottom: '25px', color: '#333', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
              UPI विवरण
            </h3>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '25px', 
              borderRadius: '10px',
              border: '1px solid #ddd',
              fontSize: '16px',
              lineHeight: '1.8'
            }}>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>UPI ID:</strong> boim-458013142205@boi
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>UPI ऐप:</strong> PhonePe, Google Pay, Paytm या कोनो भी UPI ऐप
              </p>
              <p style={{ margin: '15px 0', color: '#666', fontSize: '14px' }}>
                ऊपर दिएल UPI ID कें कॉपी कएक कोनो भी UPI ऐप सँ भुगतान करू
              </p>
            </div>
          </div>
          
        </div>
        
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '10px', border: '1px solid #ffeaa7' }}>
          <h4 style={{ color: '#856404', marginBottom: '15px' }}>महत्वपूर्ण सूचना</h4>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            • दान करबाक पश्चात् रसीद प्राप्त करबाक लेल कृपया मन्दिर कार्यालय सँ संपर्क करू
          </p>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            • सभी दान सूची मन्दिर परिसर में प्रदर्शित कएल जायत
          </p>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            • कोनो संदेह क लेल: +91-8825130710, +91-7549662532
          </p>
        </div>
      </div>
    </div>
  );
}

function VolunteerPage() {
  return (
    <div className="page">
      <h1>स्वयंसेवक पंजीकरण (जल्द चालू होयत)</h1>
      <p>
        पूजा, महोत्सव आ भीड़-व्यवस्थापन दौरान स्वयंसेवक दलक भूमिका अत्यन्त
        महत्वपूर्ण होइत अछि। शीघ्र एतए स्वयंसेवक पंजीकरणक सरल प्रक्रिया
        उपलब्ध कएल जायत।
      </p>
    </div>
  );
}

function FeedbackPage() {
  return (
    <div className="page">
      <h1>सुझाव आ प्रतिक्रिया</h1>
      <p>
        मन्दिरक व्यवस्था, स्वच्छता, सुविधा आ कार्यक्रमक संबंधमे अहाँक सुझाव
        अत्यन्त मूल्यवान अछि। कृपया अपन अनुभव आ सुझाव मन्दिर प्रबंधन तक जरूर
        पहुँचा सकैत छी।
      </p>
      <p>फिलहाल ई पृष्ठ सूचना मात्र लेल अछि, ऑनलाइन फॉर्म शीघ्र उपलब्ध होयत।</p>
    </div>
  );
}

function HowToReachPage() {
  return (
    <div className="page">
      <h1>कैना पहुँचब?</h1>
      <ul className="bullet-list">
        <li>नजदीकी शहर: राघोपुर-सिमराही – करीब 6 किलोमीटर।</li>
        <li>नजदीकी रेलवे स्टेशन: राघोपुर स्टेशन – लगभग 6 किलोमीटर।</li>
        <li>नजदीकी हवाई अड्डा: दरभंगा हवाई अड्डा – लगभग 100 किलोमीटर।</li>
      </ul>
      <p>स्थानीय स्तर पर ऑटो, बस, निजी वाहन आ अन्य साधन उपलब्ध रहैत अछि।</p>
    </div>
  );
}

function ManagementPage() {
  return (
    <div className="page">
      <h1>मन्दिर प्रबंधन आ समिति</h1>
      <p>
        दुर्गा महादेव स्थानक संचालन एक समर्पित प्रबंधन समिति द्वारा कएल जाइत
        अछि, जे मन्दिरक नित्य पूजा, कार्यक्रम, वित्तीय अनुशासन, स्वच्छता,
        सुरक्षा आ विकास संबंधी योजना देखैत अछि।
      </p>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#7c1a1a', textAlign: 'center', marginBottom: '30px' }}>
          श्रेष्ठ समिति सदस्य
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <h3 style={{ color: '#7c1a1a', marginBottom: '20px', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
            मुख्य संरक्षक
          </h3>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            marginBottom: '20px',
            border: '1px solid #ddd'
          }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>श्री प्रभाकर झा, IAS (सेवानिवृत्त)</h4>
            <p style={{ margin: '5px 0', color: '#666' }}>मोबाइल: 9431076168</p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <h3 style={{ color: '#7c1a1a', marginBottom: '20px', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
            संरक्षक
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री कुशेश्वर झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572486364</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री कृत्यानंद झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9661339224</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री इंद्रकांत झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 7763880583</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>स्व. श्री जीव नारायण झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: XXXXXXXXXX</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री विद्याकांत मिश्रा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9430467509</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री विजय नारायण झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 7654009737</p>
            </div>
          </div>
        </div>

        <h2 style={{ color: '#7c1a1a', textAlign: 'center', marginBottom: '30px' }}>
          कार्यकारी सदस्य
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सचिव
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री सुशील कुमार झा (फूल झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 8825130710</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सह-सचिव I
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री प्रदीप ठाकुर</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572441723</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सह-सचिव II
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>रोशन कुमार झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9931201314</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                कोषाध्यक्ष I
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री यतींद्र नाथ झा (चंदू झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572093590</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                कोषाध्यक्ष II
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री कृष्णानंद पाठक</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 7209002685</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सदस्य I
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>राकेश कुमार झा (डब्लू झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572486364</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सदस्य II
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>रंजीत कुमार झा (सेंटू झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9631552957</p>
            </div>
          </div>
        </div>

        <h2 style={{ color: '#7c1a1a', textAlign: 'center', marginBottom: '30px' }}>
          स्वयंसेवक
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>गगन कुमार झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 8210941827</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>कौशल वात्स</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 9661546789</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>बसंत झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 6204274972</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>केशव झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 7979923963</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>जयप्रकाश मिश्रा (मोनू)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 8969234899</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>आयुष झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 9798809842</p>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#fff3cd', 
          borderRadius: '10px', 
          border: '1px solid #ffeaa7',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#856404', marginBottom: '15px' }}>संपर्क करबाक लेल</h4>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            मन्दिर प्रबंधन सँ संपर्क करबाक लेल उपर दिएल गेल फोन नंबर पर कॉल करू
          </p>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            या मन्दिर कार्यालय पर सीधा संपर्क करू
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  return (
    <div className="page">
      <h1>प्रश्न आ उत्तर (FAQ)</h1>
      <ul className="bullet-list">
        <li>दर्शन लेल शुल्क? – सामान्य दर्शन पूर्णत: निःशुल्क अछि।</li>
        <li>फोटोग्राफी? – मन्दिरक भीतरक नियम अनुसार सीमित अनुमति।</li>
        <li>दान रसीद? – मन्दिर कार्यालय द्वारा विधिवत रसीद प्रदान कएल जाइत अछि।</li>
      </ul>
    </div>
  );
}

function DosDontsPage() {
  return (
    <div className="page">
      <h1>क्या करब आ की नहि करब</h1>
      <h2>क्या करब</h2>
      <ul className="bullet-list">
        <li>शुद्ध वस्त्रमे, श्रद्धा आ मर्यादासँ मन्दिरमे प्रवेश करू।</li>
        <li>मन्दिरक स्वच्छता, शान्ति आ अनुशासन बनाए रखू।</li>
        <li>पंक्तिबद्ध होइ दर्शन करू, बुजुर्ग आ महिलासभक सम्मान करू।</li>
      </ul>
      <h2>की नहि करब</h2>
      <ul className="bullet-list">
        <li>अशोभनीय व्यवहार, ऊँचा आवाज, धक्का-मुक्की कनि सेहो नहि करू।</li>
        <li>प्लास्टिक, गुटखा, तम्बाकू, मदिरा आदि पूर्णत: प्रतिबंधित अछि।</li>
        <li>मन्दिरक दीवार, शिला, भवन पर लिखावट अथवा क्षति नहि पहुँचाउ।</li>
      </ul>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page">
      <h1>सम्पर्क</h1>
      <h2>पता</h2>
      <p>
        वार्ड नं. 8, हुलास, राघोपुर, सुपौल, बिहार – 852111
      </p>
      <h2>संपर्क विवरण</h2>
      <p>
        फोन: +91-8825130710, +91-7549662532
      </p>
    </div>
  );
}

function DurgaSaptashatiPage() {
  return (
    <div className="page">
      <h1>दुर्गा सप्तशती</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>दुर्गा सप्तशती PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://vedpuran.net/wp-content/uploads/2013/04/durga-saptashati-hindi.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://vedpuran.net/wp-content/uploads/2013/04/durga-saptashati-hindi.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>दुर्गा सप्तशती पाठ</h2>
        <p className="mantra-intro">
          दुर्गा सप्तशती हिन्दू धर्म के अनुसार देवी दुर्गा के स्तुति संग्रह अछि, जे मार्कण्डेय पुराण मे वर्णित अछि।
          ई 700 श्लोक क संग्रह अछि जे तीन चरण मे विभाजित अछि।
        </p>
        <div className="mantra-section">
          <h3>पहिला चरण - देवी कथा</h3>
          <p className="shlok">
            ॥ देवी सूक्तम् ॥<br/>
            वन्दे विचित्रं देवीं सुरैः समुदैर्यास्तथा।<br/>
            ब्रह्माण्यं विष्णुं शिवं तथ देवीं सर्वान् नमोऽस्तुते॥
          </p>
          <p className="meaning">
            म विचित्र रूपी देवी क पूजा करैत छी, जे समुद्र सँ उत्पन्न भेल आ
            ब्रह्मा, विष्णु, शिव आओर सभ देवतासभ क संग-संग देवी क वंदन करैत छी।
          </p>
        </div>
        <div className="mantra-benefits">
          <h3>पाठ के लाभ</h3>
          <ul>
            <li>सभ तरह के कष्टन क नाश</li>
            <li>शत्रु सँ रक्षा</li>
            <li>सुख-समृद्धि प्राप्ति</li>
            <li>आध्यात्मिक शक्ति वृद्धि</li>
            <li>मनोकामना पूर्ति</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ShivaChalisaPage() {
  return (
    <div className="page">
      <h1>शिव चालीसा</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>शिव चालीसा PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://www.templepurohit.com/wp-content/uploads/2015/10/Shiva-Chalisa.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://www.templepurohit.com/wp-content/uploads/2015/10/Shiva-Chalisa.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>श्री शिव चालीसा</h2>
        <p className="mantra-intro">
          शिव चालीसा भगवान शिव क स्तुति मे लिखल गेल 40 चौपाइ क संग्रह अछि।
          एकरा पाठ सँ भगवान शिव क कृपा प्राप्त होइत अछि।
        </p>
        <div className="chaupai-section">
          <p className="chaupai">
            ॥ दोहा ॥<br/>
            जय गिरिजापति बलभद्रा केशव।<br/>
            मधुसूदन कृपाकर स्वदेश॥
          </p>
          <p className="chaupai">
            ॥ चौपाई ॥<br/>
            जय गिरिजापति बलभद्रा केशव।<br/>
            मधुसूदन कृपाकर स्वदेश।<br/>
            करत त्रिनयन भव सिंहार।<br/>
            रिपु नाशन सकल विशेष।
          </p>
        </div>
      </div>
    </div>
  );
}

function DeviAartiPage() {
  return (
    <div className="page">
      <h1>देवी आरती</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>देवी आरती संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://sriadishankarastutis.org/wp-content/uploads/2019/04/Devi-Kshamaapana-Stotram.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://sriadishankarastutis.org/wp-content/uploads/2019/04/Devi-Kshamaapana-Stotram.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>दुर्गा माँ क आरती</h2>
        <p className="mantra-intro">
          देवी आरती माँ दुर्गा क स्तुति मे लिखल गेल भजन अछि, जकरा पाठ सँ
          माँ क कृपा आ आशीर्वाद मिलैत अछि।
        </p>
        <div className="aarti-text">
          <p className="aarti-line">
            ॥ जय देवी माँ जय देवी माँ ॥<br/>
            ॥ जय सरस्वती माँ जय लक्ष्मी माँ ॥
          </p>
          <p className="aarti-line">
            जय दुर्गा माँ जय दुर्गा माँ<br/>
            तुम संकट हारी माँ<br/>
            भक्तन क दुख हारी माँ<br/>
            सभ कल्याण करी माँ
          </p>
        </div>
      </div>
    </div>
  );
}

function ShivaAartiPage() {
  return (
    <div className="page">
      <h1>शिव आरती</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>शिव आरती संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://www.chinmayaorlando.org/downloads/JayaJagadishaHareAarti.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://www.chinmayaorlando.org/downloads/JayaJagadishaHareAarti.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>शिव जी क आरती</h2>
        <p className="mantra-intro">
          शिव आरती भगवान शिव क स्तुति मे लिखल गेल भजन अछि।
          महादेव क पूजा करैत समय ई आरती करनाइ महत्वपूर्ण मानल जाइत अछि।
        </p>
        <div className="aarti-text">
          <p className="aarti-line">
            ॥ ओम जय शिव ओंकारा ॥<br/>
            ॥ प्रभु शिव ओंकारा ॥
          </p>
          <p className="aarti-line">
            ओम जय शिव ओंकारा<br/>
            ब्रह्मा विष्णु सदाशिव<br/>
            अंग अंग के भूषण लगा<br/>
            भोले शंकर भोले
          </p>
        </div>
      </div>
    </div>
  );
}

function SandhyaMantraPage() {
  return (
    <div className="page">
      <h1>संध्यान मंत्र</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>संध्यान मंत्र संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://satymarg.wordpress.com/wp-content/uploads/2015/07/sandhya.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://satymarg.wordpress.com/wp-content/uploads/2015/07/sandhya.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>दैनिक संध्या मंत्र</h2>
        <p className="mantra-intro">
          संध्या काल मे पठित जाए वाला मंत्र सभ कर्मन क फल प्राप्त करैत अछि।
          ई मंत्रन क नियमित पाठ सँ जीवन मे सकारात्मक परिवर्तन होइत अछि।
        </p>
        <div className="mantra-section">
          <h3>गायत्री मंत्र</h3>
          <p className="mantra">
            ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं<br/>
            भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥
          </p>
        </div>
      </div>
    </div>
  );
}

function PrayerCollectionPage() {
  return (
    <div className="page">
      <h1>प्रार्थना संग्रह</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>प्रार्थना संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://adipurgroup.wordpress.com/wp-content/uploads/2016/12/e0a4b8e0a4ade0a4be.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://adipurgroup.wordpress.com/wp-content/uploads/2016/12/e0a4b8e0a4ade0a4be.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>संग्रहित प्रार्थना</h2>
        <p className="mantra-intro">
          ई संग्रह मे महत्वपूर्ण प्रार्थना, स्तोत्र आ मंत्र दिया गेल अछि
          जे दैनिक जीवन मे उपयोगी अछि।
        </p>
        <div className="prayer-list">
          <h3>दैनिक प्रार्थना</h3>
          <ul>
            <li>सुबहे उठना क प्रार्थना</li>
            <li>भोजन से पहिने क प्रार्थना</li>
            <li>बाहर जाए समय प्रार्थना</li>
            <li>सोए समय प्रार्थना</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ChaurchanMantraPage() {
  return (
    <div className="page">
      <h1>चौरचन पूजा मंत्र</h1>
      <div className="mantra-content">
        <p className="mantra-intro">
          चौरचन पूजा मिथिला क्षेत्र मे विशेष रूप सँ मनायल जाए वाल पर्व अछि। 
          ई पर्व गणेश जी के सम्मान मे मनायल जाइत अछि आ एहि दिन विशेष मंत्रोच्चार कएल जाइत अछि।
        </p>
        
        <div className="mantra-box">
          <h3>🌙 चन्द्रमा प्रणाम मंत्र</h3>
          <div className="mantra-text">
            <p className="shlok">
              दधि-शंख-तुषाराभं, क्षीरोदार्णव-संभवम्‌।<br/>
              नमामि शशिनं भक्त्या, शंभोर्मुकुट भूषणम्‌।।
            </p>
            <p className="meaning">
              अर्थ: दधि, शंख आ तुषार के समान श्वेत रंग वाले, क्षीरसागर से उत्पन्न हुए,
              शिव जी के मुकुट के भूषण रूप चन्द्रमा को भक्तिपूर्वक नमस्कार अछि।
            </p>
          </div>
        </div>

        <div className="mantra-box">
          <h3>🙏 चौरचन पूजा मंत्र</h3>
          <div className="mantra-text">
            <p className="shlok">
              सिंह: प्रसेनवमवधीत सिंहो जाम्बवताहतः।<br/>
              सुकुमारक मा रोदीस्तव ह्येष स्यमन्तकः ॥
            </p>
            <p className="meaning">
              अर्थ: सिंह ने प्रसेन को मार डालल आ जाम्बवान ने सिंह के मार देलक।
              हे बालक (सुकुमारक), रोव नहि, ई तोर स्यमन्तक मणि अछि।
              (भगवान श्री कृष्ण के समझावल गेल शब्द)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UkkaPatiMantraPage() {
  return (
    <div className="page">
      <h1>उक्का-पाती मंत्र</h1>
      <div className="mantra-content">
        <p className="mantra-intro">
          उक्का-पाती मिथिला क्षेत्र क एक महत्वपूर्ण लोक आस्था अछि। 
          ई मुख्य रूप सँ श्रावण महीना मे मनायल जाए वाल पर्व अछि। 
          एहि दिन विशेष पूजा आ मंत्रोच्चार कएल जाइत अछि।
        </p>
        
        <div className="mantra-box">
          <h3>🙏 उक्का-पाती मुख्य मंत्र</h3>
          <div className="mantra-text">
            <p className="shlok">
              शास्त्राशस्त्रहतानांच भूतानांभूत दर्शयोः।<br/>
              उज्ज्वल ज्योतिषा देहं निदहेव्योमवह्निना॥<br/><br/>
              अग्निदग्धाश्व ये जीवा येऽदयद्ग्धाः कुले मम।<br/>
              उज्ज्वलज्योतिषा दग्धास्ते यान्तु परमाङ्गतिम्‌‌॥<br/><br/>
              यमलोकं परित्यज्य आगता महालये।<br/>
              उज्ज्वलज्योतिषा वत्मं पश्यन्तो व्रजन्तुते॥
            </p>
            <p className="meaning">
              अर्थ: हे भूतों के दर्शन करने वाले, शस्त्रों से मारे गए आत्माओं के लिए 
              उज्ज्वल ज्योति से देह को जलाने वाले। जो मेरे कुल में अग्नि से दग्ध हुए हैं,
              वे उज्ज्वल ज्योति से दग्ध होकर परमगति को प्राप्त हों। यमलोक को त्यागकर 
              महालय में आए हुए, उज्ज्वल ज्योति को देखते हुए अपने गंतव्य को प्राप्त हों।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-column">
          <h3>मानचित्र</h3>
          <div className="footer-map-wrapper">
            <iframe
              title="Durga Mahadev Sthan, Hulas Map"
              src="https://www.google.com/maps?q=Durga+Mahadev+Sthan,+Hulas,+Supaul,+Bihar&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="footer-column">
          <h3>दुर्गा महादेव स्थान, हुलास</h3>
          <p>
            मिथिलाक धरती पर अवस्थित ई पवित्र धाम भक्तजनक आस्था, सेवा आ
            संस्कारक केन्द्र अछि।
          </p>
        </div>
        <div className="footer-column">
          <h3>महत्वपूर्ण लिंक</h3>
          <ul>
            <li>
              <Link to="/darshan-timings">दर्शन आ आरती समय</Link>
            </li>
            <li>
              <Link to="/festivals">मुख्य पर्व आ उत्सव</Link>
            </li>
            <li>
              <Link to="/donations">दान संबंधी जानकारी</Link>
            </li>
            <li>
              <Link to="/how-to-reach">कैना पहुँचब</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>सम्पर्क</h3>
          <p>वार्ड नं 8, हुलास, सुपौल, बिहार – 852111</p>
          <p>मोबाइल: +91 8825130710, +91 7549662532</p>
          <p>ईमेल: durgamahadevsthanhulas@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} दुर्गा महादेव स्थान, हुलास. सर्वाधिकार
        सुरक्षित। | Developed by <strong>RATAN JHA</strong>
      </div>
    </footer>
  );
}


export default App;
=======
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import React from 'react';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GalleryPage from './Gallery';
import Festivals from './Festival';
// {/* <Route path="/festivals" element={<Festivals />} /> */}
const NEXT_FESTIVAL_DATE = new Date('2026-10-10T06:00:00');
const NAV_ITEMS = [
  {
    label: 'मुख्य पृष्ठ',
    path: '/',
    children: [
      // { label: ' मंदिर', path: '/' },
      { label: 'मंदिरक परिचय', path: '/about' },
      { label: 'इतिहास आ महत्व', path: '/history' },
      { label: 'देवी-देवता आ मन्दिर', path: '/deities' },
      { label: 'फोटो गैलरी', path: '/gallery' },
      { label: 'दैनिक आरती समय', path: '/darshan-timings' },
    ],
  },
  {
    label: 'पूजा सेवा',
    path: '/services',
    children: [
      { label: 'दर्शन आ आरती समय', path: '/darshan-timings' },
      { label: 'शांति कलश आवेदन', path: '/seva' },
    ],
  },
  {
    label: 'मंत्र या पुस्तक',
    path: '/mantra-books',
    children: [
      { label: 'दुर्गा सप्तशती', path: '/durga-saptashati' },
      { label: 'शिव चालीसा', path: '/shiva-chalisa' },
      { label: 'देवी आरती', path: '/devi-aarti' },
      { label: 'शिव आरती', path: '/shiva-aarti' },
      { label: 'संध्यान मंत्र', path: '/sandhya-mantra' },
      { label: 'प्रार्थना संग्रह', path: '/prayer-collection' },
      { label: 'चौरचन पूजा मंत्र', path: '/chaurchan-mantra' },
      { label: 'उक्का-पाती मंत्र', path: '/ukka-pati-mantra' },
    ],
  },
  {
    label: 'तीर्थयात्री सुविधा',
    path: '/pilgrim-services',
    children: [
      { label: 'आवास व्यवस्था (सूचना)', path: '/accommodation' },
      { label: 'कैना पहुँचब', path: '/how-to-reach' },
      { label: 'क्या करब / की नहि करब', path: '/dos-donts' },
      { label: 'प्रश्न आ उत्तर (FAQ)', path: '/faq' },
    ],
  },
  
  {
  label: 'उत्सव आ कार्यक्रम',
  path: '/festivals',
  children: [
    { label: 'दुर्गा पूजा महोत्सव', path: '/festivals#durga-puja' },
    { label: 'महाशिवरात्रि', path: '/festivals#maha-shivratri' },
    { label: 'सरस्वती पूजा', path: '/festivals#saraswati-puja' },
    { label: 'राम नवमी', path: '/festivals#ram-navmi' },
    { label: 'वार्षिक कार्यक्रम', path: '/events' },
    { label: 'समाचार आ सूचना', path: '/news' },
  ]},
  {
    label: 'ऑनलाइन सुविधा',
    path: '/online',
    children: [
      { label: 'दान संबंधी जानकारी', path: '/donations' },
      { label: 'स्वयंसेवक पंजीकरण', path: '/volunteer' },
      { label: 'सुझाव आ प्रतिक्रिया', path: '/feedback' },
    ],
  },
  {
    label: 'मंदिर प्रबंधन',
    path: '/management',
    children: [
      { label: 'समिति / प्रबंधन', path: '/management' },
      { label: 'संपर्क फॉर्म', path: '/contact' },
    ],
  },
];

function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/deities" element={<DeitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/darshan-timings" element={<DarshanTimingsPage />} />
            <Route path="/seva" element={<SevaPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/dos-donts" element={<DosDontsPage />} />
            <Route path="/faq" element={<FaqPage />} />
<Route path="/festivals" element={<Festivals />} />            <Route path="/durga-puja" element={<DurgaPujaPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/how-to-reach" element={<HowToReachPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/durga-saptashati" element={<DurgaSaptashatiPage />} />
            <Route path="/shiva-chalisa" element={<ShivaChalisaPage />} />
            <Route path="/devi-aarti" element={<DeviAartiPage />} />
            <Route path="/shiva-aarti" element={<ShivaAartiPage />} />
            <Route path="/sandhya-mantra" element={<SandhyaMantraPage />} />
            <Route path="/prayer-collection" element={<PrayerCollectionPage />} />
            <Route path="/chaurchan-mantra" element={<ChaurchanMantraPage />} />
            <Route path="/ukka-pati-mantra" element={<UkkaPatiMantraPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  React.useEffect(() => {
    const audio = document.getElementById('durgaAudio');
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const toggleAudio = () => {
    const audio = document.getElementById('durgaAudio');
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  const handleProgressChange = (e) => {
    const audio = document.getElementById('durgaAudio');
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <header className="site-header">
      <audio id="durgaAudio" src={`${process.env.PUBLIC_URL}/Ya_Devi_Sarvbhuteshu___GODDESS_DURGA_STUTI___mantra_for_POSITIVE_ENERGY,_PROSPERITY___SUCCESS(48k).mp3`} />
      <div className="top-bar">
        <div className="top-bar-text">
          दुर्गा महादेव स्थान, हुलास – सुपौल, मिथिला
        </div>
      </div>
      <div className="header-main">
        <div className="brand">
          <div className="brand-logo-circle">
            ॐ
            <div className="smoke-container">
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
              <div className="smoke-particle"></div>
            </div>
          </div>
          {isPlaying && (
            <div className="audio-progress-vertical">
              <span className="audio-time-small">{formatTime(currentTime)}</span>
              <input
                type="range"
                className="audio-progress-bar-vertical"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgressChange}
              />
              <span className="audio-time-small">{formatTime(duration)}</span>
            </div>
          )}
          <div className="brand-audio-section">
            <button 
              className="audio-toggle-btn"
              onClick={toggleAudio}
              aria-label="Play Durga Saptashati"
            >
              {isPlaying ? '⏸️' : '🔊'}
            </button>
            <div className="brand-text">
              <div className="brand-title">दुर्गा महादेव स्थान, हुलास</div>
              <div className="brand-subtitle">
                सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके
              </div>
            </div>
          </div>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item.label}
                className={`nav-item ${
                  activeDropdown === index ? 'nav-item-active' : ''
                }`}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <>
                    <button
                      className="nav-item-toggle"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                    >
                      ▾
                    </button>
                    <div
                      className={`dropdown ${
                        activeDropdown === index ? 'dropdown-open' : ''
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="dropdown-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function FestivalCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set next major festival (Durga Puja - October 10, 2026)
  const festivalName = 'दुर्गा पूजा महोत्सव';

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = NEXT_FESTIVAL_DATE - new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="festival-countdown">
      <h2 className="countdown-title">आगामी महोत्सव</h2>
      <div className="countdown-festival-name">{festivalName}</div>
      <div className="countdown-display">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">दिन</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">घंटा</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">मिनट</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">सेकंड</span>
        </div>
      </div>
      <Link to="/festivals#durga-puja" className="countdown-btn">
        🪔 महोत्सव के बारे मे जानू
      </Link>
    </section>
  );
}

function HomePage() {
  return (
    <div className="page home-page">
      <HomeCarousel />
      <HeroSection />
      <FestivalCountdown />
      <QuickInfoStrip />
      <HighlightsSection />
      <NewsAndUpdates />
    </div>
  );
}

function HeroSection() {
  const heroBg = `${process.env.PUBLIC_URL}/photos/dp1.jpg`;

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>दुर्गा महादेव स्थान, हुलास</h1>
          <p className="hero-mantra">
            सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके। शरण्ये त्र्यम्बके गौरी
            नारायणी नमोऽस्तुते॥
          </p>
          <p className="hero-description">
            सुपौल जिलाक हुलास गाँवमे अवस्थित दुर्गा महादेव स्थान मिथिलाक
            प्रमुख धार्मिक आ आध्यात्मिक केंद्र छी। एहि पवित्र धाममे देवी दुर्गा
            आ भगवान शिवक आराधना हजारों श्रद्धालुभ अपन आस्था आ भक्ति संग करैत
            छथि।
          </p>
          <div className="hero-buttons">
            <Link to="/darshan-timings" className="btn btn-primary">
              दर्शन समय देखू
            </Link>
            <Link to="/festivals" className="btn btn-outline">
              मुख्य पर्व आ उत्सव
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <h2>आजुक प्रमुख जानकारी</h2>
          <ul>
            <li>
              संध्याकालीन आरती – प्रतिदिन साँझ 8:00 बजे, सभ श्रद्धालुभ लेल
              खुल्ला।
            </li>
            <li>विशेष पूजा: प्रत्येक सोमबार भगवान महादेवक रुद्राभिषेक।</li>
            <li>दुर्गा पूजा महोत्सव: शारदीय नवरात्रि दौरान विशेष कार्यक्रम।</li>
          </ul>
          <Link to="/news" className="link-black">
            सभ समाचार आ विस्तृत कार्यक्रम देखू →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeCarousel() {
  const slides = [

      {  src: `${process.env.PUBLIC_URL}/photos/drive-download-20260307T153529Z-1-001 (1)/IMG-20241012-WA0007.jpg`,
      alt: 'मंदिर फोटो'},
 
    { src: `${process.env.PUBLIC_URL}/photos/nv1.jpg`, alt: 'मन्दिर आ प्रांगण' }, 
    
    { src: `${process.env.PUBLIC_URL}/photos/hulas7.jpg`, alt: 'मन्दिर आ प्रांगण' },  
       { src: `${process.env.PUBLIC_URL}/photos/hulas1.jpg`, alt: 'मन्दिर बाह्य दृश्य 1' },
         { src: `${process.env.PUBLIC_URL}/photos/dp2.jpg`, alt: 'मन्दिरक रात्रिक दृश्य' }, 
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  if (!slides.length) return null;

  const current = slides[index];

  return (
    <section className="carousel-section">
      <div className="carousel-inner">
        <img src={current.src} alt={current.alt} />
        <div className="carousel-caption">{current.alt}</div>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot ${i === index ? 'carousel-dot-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function QuickInfoStrip() {
  return (
    <section className="quick-info">
      <div className="quick-info-item">
        <div className="quick-info-label">दैनिक दर्शन समय</div>
        <div className="quick-info-value">
          बिहान 5:00 – दुपहरि 12:00, साँझ 4:00 – राति 9:00
        </div>
      </div>
      <div className="quick-info-item">
        <div className="quick-info-label">स्थान</div>
        <div className="quick-info-value">
          वार्ड नं. 8, हुलास, राघोपुर, सुपौल, बिहार – 852111
        </div>
      </div>
      <div className="quick-info-item">
        <div className="quick-info-label">सम्पर्क</div>
        <div className="quick-info-value">
          +91-8825130710, +91-7549662532
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const cards = [
    {
      title: 'मंदिरक इतिहास',
      description:
        'कहल जाइत अछि जे ई प्राचीन शिवमन्दिर 18म शताब्दी सँ पहिने निर्माण भेल आ कालान्तरमे देवी दुर्गाक भव्य मन्दिरक रूपमे विकसित भेल।',
      link: '/history',
    },
    {
      title: 'दुर्गा पूजा महोत्सव',
      description:
        'शारदीय नवरात्रि दौरान दुर्गा महादेव स्थान पर भव्य दुर्गा पूजा महोत्सव आयोजित होइत अछि, जतए सम्पूर्ण जिलासँ हजारों भक्त सभ जोड़ाइत छथि।',
      link: '/durga-puja',
    },
    {
      title: 'देखबाक चीज',
      description:
        'मुख्य मन्दिर संग-संग देवी पार्वती, भगवान गणेश आ अन्य देवतासभक मन्दिर, पोखर, बगीचा आ विशाल प्रांगण भक्तिमय वातावरण तैयार करैत अछि।',
      link: '/deities',
    },
  ];

  return (
    <section className="highlights">
      <h2>दुर्गा महादेव स्थानक मुख्य विशेषता</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <article key={card.title} className="info-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to={card.link} className="link-primary">
              विस्तृत पढ़ू →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsAndUpdates() {
  const items = [
    {
      date: 'सितम्बर – अक्तूबर 2025',
      title: 'दुर्गा पूजा महोत्सव 2025',
      description:
        '22 सितम्बर सँ 02 अक्तूबर 2025 धरि दुर्गा पूजा महोत्सवक आयोजन, भागवत कथा, सांस्कृतिक कार्यक्रम आ भजन संध्या के संग।',
    },
    {
      date: 'प्रतिदिन',
      title: 'संध्याकालीन पुष्पांजलि आ आरती',
      description:
        'प्रत्येक संध्याकाल 8:00 बजे पुष्पांजलि आ आरती संपन्न होइत अछि। सभ श्रद्धालुगन सँ प्रार्थना जे नियमित रूप सँ सहभागिता करथि।',
    },
    {
      date: 'शिघ्र',
      title: 'ऑनलाइन दान आ सेवा सूचना',
      description:
        'मन्दिरक विकास, सेवा आ जनसहभागिता लेल ऑनलाइन सूचना पोर्टल शिघ्र चालू करबाक योजना अछि।',
    },
  ];

  return (
    <section className="news-section">
      <div className="section-header">
        <h2>समाचार आ अपडेट</h2>
        <Link to="/news" className="link-primary">
          सभ समाचार देखू →
        </Link>
      </div>
      <div className="news-list">
        {items.map((item) => (
          <article key={item.title} className="news-item">
            <div className="news-date">{item.date}</div>
            <h3 className="news-title">{item.title}</h3>
            <p className="news-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <h1>मंदिरक परिचय</h1>
      <p>
        दुर्गा महादेव स्थान, हुलास, सुपौल जिलाक राघोपुर प्रखंड अंतर्गत एक
        प्राचीन हिन्दू मन्दिर परिसर अछि। ई मन्दिर देवी दुर्गा आ भगवान शिवक
        संयुक्त आराधना स्थल छी, जतए वर्षभरि विभिन्न धार्मिक, आध्यात्मिक आ
        सांस्कृतिक कार्यक्रमक आयोजन होइत रहैत अछि।
      </p>
      <p>
        मन्दिर परिसरमे मुख्य दुर्गा मन्दिर, प्राचीन शिवलिङ्ग, देवी पार्वती,
        भगवान गणेश आ अन्य देवतासभक मन्दिर, विशाल प्रांगण, पोखर, बगीचा, मंडप
        आ श्रद्धालुगनक विश्राम स्थलक समुचित व्यवस्था अछि।
      </p>
    </div>
  );
}

function HistoryPage() {
  return (
    <div className="page">
      <h1>इतिहास आ धार्मिक महत्व</h1>
      <p>
        लोक-श्रुति अनुसार ई महादेव स्थान 18म शताब्दी सँ पहिने सँ अस्तित्वमे
        अछि। स्थानीय जनश्रुति, पुरनका कथन आ विद्वान लोकनिक मत अनुसार एतए
        स्थापित शिवलिङ्ग अत्यन्त प्राचीन आ सिद्ध मानल जाइत अछि।
      </p>
      <p>
        कालान्तरमे श्रद्धालुगनक सहयोग, ग्राम समाजक सहभागिता आ दानी
        सज्जनसभक प्रेरणासँ देवी दुर्गाक भव्य मन्दिर निर्माण भेल। नव-नव
        निर्माण, पुनर्निर्माण आ विस्तारक माध्यम सँ आजुक स्वरूपमे मन्दिर
        परिसर तैयार भेल अछि।
      </p>
      <p>
        दुर्गा महादेव स्थान केवल पूजा-अर्चना करबाक स्थल नहि, बल्कि मिथिला
        परम्परा, संस्कार, लोक-संस्कृति आ आध्यात्मिक जागरणक केन्द्र रूपेँ
        मानल जाइत अछि।
      </p>
    </div>
  );
}

function DeitiesPage() {
  return (
    <div className="page">
      <h1>देवी-देवता आ मन्दिर परिसर</h1>
      <ul className="bullet-list">
        <li>
          मुख्य मन्दिर – देवी दुर्गाक सिंहासन, सुन्दर सजावट, शिल्प आ अलंकरणक
          संग।
        </li>
        <li>
          महादेव मन्दिर – प्राचीन शिवलिङ्ग, जे अत्यन्त पवित्र आ मनोकामना
          पूर्ण करैया मानल जाइत अछि।
        </li>
        <li>देवी पार्वती मन्दिर, भगवान गणेश मन्दिर आ अन्य देवालय।</li>
        <li>विशाल प्रांगण, परिक्रमा पथ, यज्ञशाला आ सांस्कृतिक कार्यक्रमक मंच।</li>
        <li>पोखर आ बगीचा, जे सम्पूर्ण वातावरण केँ हरित आ शान्त बनबैत अछि।</li>
      </ul>
    </div>
  );
}

function DarshanTimingsPage() {
  return (
    <div className="page">
      <h1>दर्शन आ आरती समय</h1>
      <h2>दैनिक समय</h2>
      <ul className="bullet-list">
        <li>भोरक दर्शन: बिहान 5:00 – 8:00 बजे</li>
        <li>पूर्वाह्न दर्शन: 8:00 – 12:00 बजे</li>
        <li>साँझक दर्शन: 4:00 – 9:00 बजे</li>
      </ul>
      <h2>मुख्य आरती</h2>
      <ul className="bullet-list">
        <li>मंगला आरती – भोर 5:30 बजे</li>
        <li>दोपहरिया भोग आरती – दिन 12:00 बजे</li>
        <li>संध्याकालीन आरती – साँझ 7:30 – 8:00 बजे</li>
      </ul>
      <p>त्योहारक दिन विशेष आरती आ अतिरिक्त समयसूची घोषित कएल जाइत अछि।</p>
    </div>
  );
}

function SevaPage() {
  return (
    <div className="page">
      <h1>पूजा, सेवा आ विशेष अनुष्ठान</h1>
      <p>
        मन्दिरमे नियमित रूप सँ विभिन्न प्रकारक पूजा, अनुष्ठान आ खास अवसरक
        विशेष कार्यक्रम आयोजित होइत अछि। स्थानीय पुरोहित मण्डली द्वारा समस्त
        विधि-विधान वैदिक परम्परा अनुसारे सम्पन्न कएल जाइत अछि।
      </p>
      <ul className="bullet-list">
        <li>सामान्य पूजा – नित्य दर्शन, पुष्प अर्पण, दीपदान इत्यादि।</li>
        <li>विशेष पूजा – दुर्गा सप्तशती पाठ, रुद्राभिषेक, महामृत्युंजय जप।</li>
        <li>
          संस्कार – नामकरण, उपनयन, गृह प्रवेश, नव गृह प्रवेश, विवाह पूर्व शांति
          पाठ, इत्यादि।
        </li>
      </ul>
      <p>
        विस्तृत पूजा-सूची, तिथि-समय आ सहयोग राशिक जानकारी मन्दिर कार्यालयमे
        उपलब्ध अछि।
      </p>

      <section className="form-section">
        <h2>शांति कलश आवेदन (Shanti Kalash Application)</h2>
        <p>
          जे श्रद्धालु स्वयं अथवा परिवारक शांति, आरोग्य, समृद्धि आ विशेष
          मनोकामनाक निमित्त शांति कलश कराबय चाहैत छथि, ओ एतय प्राथमिक
          जानकारी भरि सकैत छथि। मन्दिर प्रबंधन द्वारा फोन मार्फत अंतिम पुष्टि
          आ तिथि निश्चित कएल जायत।
        </p>
        <ShantiKalashForm />
      </section>
    </div>
  );
}

function ShantiKalashForm() {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    address: '',
    occasion: '',
    kalashCount: '1',
    preferredDate: '',
    mode: 'in-person',
    remarks: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Just show submitted state without any email functionality
    setSubmitted(true);
  }

  return (
    <div className="shanti-form-wrapper">
      <form className="shanti-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="form-field">
            <span>श्रद्धालुक नाम *</span>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>शांति कलश संख्या *</span>
            <select
              name="kalashCount"
              required
              value={form.kalashCount}
              onChange={handleChange}
            >
              <option value="1">1 कलश</option>
              <option value="2">2 कलश</option>
              <option value="3">3 कलश</option>
              <option value="4">4 कलश</option>
              <option value="5">5 कलश</option>
              <option value="6">6 कलश</option>
              <option value="7">7 कलश</option>
              <option value="8">8 कलश</option>
              <option value="9">9 कलश</option>
              <option value="10">10 कलश</option>
              <option value="11">11 कलश</option>
              <option value="12">12 कलश</option>
            </select>
          </label>
          <label className="form-field">
            <span>मोबाइल नंबर *</span>
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label className="form-field form-field-full">
            <span>पूरा पता *</span>
            <textarea
              name="address"
              required
              rows={2}
              value={form.address}
              onChange={handleChange}
            />
          </label>
          <label className="form-field form-field-full">
            <span>शांति कलशक उद्देश्य / प्रसंग *</span>
            <textarea
              name="occasion"
              required
              rows={2}
              placeholder="उदाहरण: गृह शांति, स्वास्थ्य लाभ, पितृ शांति, व्यवसाय उन्नति इत्यादि"
              value={form.occasion}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>इच्छित तिथि</span>
            <input
              name="preferredDate"
              type="date"
              value={form.preferredDate}
              onChange={handleChange}
            />
          </label>
          <label className="form-field">
            <span>उपस्थिति प्रकार</span>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
            >
              <option value="in-person">स्वयं उपस्थित</option>
              <option value="remote">दूरभाष मार्फत संकल्प</option>
            </select>
          </label>
          <label className="form-field form-field-full">
            <span>अतिरिक्त टिप्पणी</span>
            <textarea
              name="remarks"
              rows={2}
              value={form.remarks}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          आवेदन सबमिट करू
        </button>
        <p className="form-note">
          * आवेदन सबमिट करबाक बाद मन्दिर प्रबंधन टीम द्वारा प्रदान कएल गेल
          मोबाइल नंबर पर संपर्क कएल जायत।
        </p>
      </form>

      {submitted && (
        <div className="form-confirm">
          <h3>आवेदन प्राप्त भʼ गेल</h3>
          <p>
            धन्यवाद {form.name} जी, अहाँक शांति कलश संबंधी प्राथमिक आवेदन
            सुरक्षित कएल गेल अछि।
          </p>
          <p>
            मन्दिर प्रबंधन अहाँसँ शीघ्रहि संपर्क करैत।
          </p>
          <p>
            <strong>संपर्क नंबर:</strong> +91-8825130710, +91-7549662532
          </p>
        </div>
      )}
    </div>
  );
}

function AccommodationPage() {
  return (
    <div className="page">
      <h1>आवास संबंधी सूचना</h1>
      <p>
        वर्तमानमे मन्दिरक स्वयं केर आवास गृह सीमित अछि। हुलास आ आसपासक
        क्षेत्रमे निजी लॉज, धर्मशाला आ होटल उपलब्ध अछि, जतए श्रद्धालु
        ठहरबाक व्यवस्था कऽ सकैत छथि।
      </p>
      <p>
        नजदीकी मुख्य शहर – राघोपुर, सिमराही आ सुपौल मे समेत विभिन्न धर्मशाला
        आ गेस्ट हाउस स्थित अछि। भविष्यमे मन्दिरक ओरसँ यात्री-निवास निर्माणक
        योजना सेहो अछि।
      </p>
    </div>
  );
}

function DurgaPujaPage() {
  return (
    <div className="page">
      <h1>दुर्गा पूजा महोत्सव</h1>
      <p>
        दुर्गा महादेव स्थान, हुलास मे शारदीय नवरात्रि दौरान दुर्गा पूजा
        महोत्सव विशेष रूप सँ भव्य ढंग सँ मनाओल जाइत अछि। कलश स्थापना, घट
        स्थापना सँ आरम्भ भऽ नवमी, दशमी धरि प्रतिदिन पूजा, पाठ, भजन, प्रवचन
        आ सांस्कृतिक कार्यक्रम होइत अछि।
      </p>
      <p>
        नवरात्रि दौरान सम्पूर्ण परिसर लाइट, फूल आ विविध सजावट सँ अलोकित
        रहैत अछि। भक्तजन अपन परिवार संग एहि पुण्य पर्वमे सम्मिलित होइत छथि
        आ देवीक कृपा प्राप्त करैत छथि।
      </p>
    </div>
  );
}

function EventsPage() {
  return (
    <div className="page">
      
      
    <div className="page">
      <h1>वार्षिक कार्यक्रम आ आयोजन</h1>
      <p>मन्दिरमे वर्षभरि आयोजित प्रमुख धार्मिक उत्सव आ कार्यक्रम निम्न प्रकार अछि:</p>

      <ul>
        <li><strong>जनवरी–फरवरी:</strong> सरस्वती पूजा (माघ, शुक्ल पक्ष पंचमी) – ज्ञान, शिक्षा आ संगीतक आराधना।</li>
        <li><strong>मार्च–अप्रैल:</strong> राम नवमी (चैत्र, शुक्ल पक्ष नवमी) – भगवान रामक जन्म उत्सव।</li>
        <li><strong>अप्रैल–मई:</strong> रंगपंचमी / होली – रंग आ खेलक सांस्कृतिक आयोजन।</li>
        <li><strong>सितम्बर–अक्टूबर:</strong> दुर्गा पूजा महोत्सव (आश्विन, शुक्ल पक्ष सप्तमी–दशमी) – देवी दुर्गाक आराधना आ सांस्कृतिक कार्यक्रम।</li>
        <li><strong>फाल्गुन (फरवरी–मार्च):</strong> महाशिवरात्रि (कृष्ण पक्ष १४म राति) – भगवान शिवक आराधना आ रात्रि जागरण।</li>
        <li><strong>सांस्कृतिक आयोजन:</strong> वर्षभरि संगीत, नृत्य, नाटक आ सामुदायिक कार्यक्रम।</li>
      </ul>
    </div>

    </div>
  );
}

function NewsPage() {
  return (
    <div className="page">
      <h1>समाचार आ सूचना</h1>
      <p>
        एतए मन्दिर सँ जुड़ल मुख्य समाचार, विशेष घोषणा, महोत्सवक तिथि, प्रसंग
        आ अन्य अद्यतन सूचनासभ प्रकाशित कएल जायत। फिलहाल आधारभूत सूचना
        प्रदर्शित अछि।
      </p>
    </div>
  );
}

function DonationsPage() {
  return (
    <div className="page">
      <h1>दान संबंधी जानकारी</h1>
      <p>
        दुर्गा महादेव स्थानक समुचित संचालन, नव निर्माण, सेवा कार्य, धार्मिक
        कार्यक्रम, प्रकाश-व्यवस्था, स्वच्छता आ सामाजिक पहलसभ मन्दिरक दान आ
        सहयोग पर आधारित अछि।
      </p>
      <p>वर्तमानमे दान मुख्य रूप सँ नगद अथवा मन्दिर कार्यालय मार्फत स्वीकार होइत अछि।</p>
      <p>
        बैंक विवरण, UPI अथवा अन्य माध्यम सँ दानक ऑनलाइन सुविधा निकट भविष्यमे
        सुरु करबाक योजना अछि। विस्तृत जानकारी लेल मन्दिर प्रबंधन सँ सम्पर्क
        कएल जा सकैत अछि।
      </p>
      
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2 style={{ marginBottom: '30px', color: '#7c1a1a' }}>ऑनलाइन दान करबाक लेल</h2>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '30px',
          padding: '40px',
          backgroundColor: '#f8f8f8',
          borderRadius: '15px',
          border: '2px solid #7c1a1a',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>QR Code स्कैन करू</h3>
            <img 
              src="/photos/donation/qrcode.jpg" 
              alt="Donation QR Code" 
              style={{ 
                width: "250px", 
                height: "250px",
                borderRadius: "15px",
                border: "3px solid #7c1a1a",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            />
            <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
              ऊपर दिएल QR code कें स्कैन कएक दान करू
            </p>
          </div>
          
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h3 style={{ marginBottom: '25px', color: '#333', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
              बैंक खाता विवरण
            </h3>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '25px', 
              borderRadius: '10px',
              border: '1px solid #ddd',
              fontSize: '16px',
              lineHeight: '1.8'
            }}>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>खाता नाम:</strong> Durga Puja Samiti Hulash
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>खाता संख्या:</strong> 458010100002205
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>IFSC कोड:</strong> BKID0004580
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>बैंक:</strong> Bank of India
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h3 style={{ marginBottom: '25px', color: '#333', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
              UPI विवरण
            </h3>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '25px', 
              borderRadius: '10px',
              border: '1px solid #ddd',
              fontSize: '16px',
              lineHeight: '1.8'
            }}>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>UPI ID:</strong> boim-458013142205@boi
              </p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333' }}>
                <strong>UPI ऐप:</strong> PhonePe, Google Pay, Paytm या कोनो भी UPI ऐप
              </p>
              <p style={{ margin: '15px 0', color: '#666', fontSize: '14px' }}>
                ऊपर दिएल UPI ID कें कॉपी कएक कोनो भी UPI ऐप सँ भुगतान करू
              </p>
            </div>
          </div>
          
        </div>
        
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '10px', border: '1px solid #ffeaa7' }}>
          <h4 style={{ color: '#856404', marginBottom: '15px' }}>महत्वपूर्ण सूचना</h4>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            • दान करबाक पश्चात् रसीद प्राप्त करबाक लेल कृपया मन्दिर कार्यालय सँ संपर्क करू
          </p>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            • सभी दान सूची मन्दिर परिसर में प्रदर्शित कएल जायत
          </p>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            • कोनो संदेह क लेल: +91-8825130710, +91-7549662532
          </p>
        </div>
      </div>
    </div>
  );
}

function VolunteerPage() {
  return (
    <div className="page">
      <h1>स्वयंसेवक पंजीकरण (जल्द चालू होयत)</h1>
      <p>
        पूजा, महोत्सव आ भीड़-व्यवस्थापन दौरान स्वयंसेवक दलक भूमिका अत्यन्त
        महत्वपूर्ण होइत अछि। शीघ्र एतए स्वयंसेवक पंजीकरणक सरल प्रक्रिया
        उपलब्ध कएल जायत।
      </p>
    </div>
  );
}

function FeedbackPage() {
  return (
    <div className="page">
      <h1>सुझाव आ प्रतिक्रिया</h1>
      <p>
        मन्दिरक व्यवस्था, स्वच्छता, सुविधा आ कार्यक्रमक संबंधमे अहाँक सुझाव
        अत्यन्त मूल्यवान अछि। कृपया अपन अनुभव आ सुझाव मन्दिर प्रबंधन तक जरूर
        पहुँचा सकैत छी।
      </p>
      <p>फिलहाल ई पृष्ठ सूचना मात्र लेल अछि, ऑनलाइन फॉर्म शीघ्र उपलब्ध होयत।</p>
    </div>
  );
}

function HowToReachPage() {
  return (
    <div className="page">
      <h1>कैना पहुँचब?</h1>
      <ul className="bullet-list">
        <li>नजदीकी शहर: राघोपुर-सिमराही – करीब 6 किलोमीटर।</li>
        <li>नजदीकी रेलवे स्टेशन: राघोपुर स्टेशन – लगभग 6 किलोमीटर।</li>
        <li>नजदीकी हवाई अड्डा: दरभंगा हवाई अड्डा – लगभग 100 किलोमीटर।</li>
      </ul>
      <p>स्थानीय स्तर पर ऑटो, बस, निजी वाहन आ अन्य साधन उपलब्ध रहैत अछि।</p>
    </div>
  );
}

function ManagementPage() {
  return (
    <div className="page">
      <h1>मन्दिर प्रबंधन आ समिति</h1>
      <p>
        दुर्गा महादेव स्थानक संचालन एक समर्पित प्रबंधन समिति द्वारा कएल जाइत
        अछि, जे मन्दिरक नित्य पूजा, कार्यक्रम, वित्तीय अनुशासन, स्वच्छता,
        सुरक्षा आ विकास संबंधी योजना देखैत अछि।
      </p>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#7c1a1a', textAlign: 'center', marginBottom: '30px' }}>
          श्रेष्ठ समिति सदस्य
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <h3 style={{ color: '#7c1a1a', marginBottom: '20px', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
            मुख्य संरक्षक
          </h3>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px', 
            marginBottom: '20px',
            border: '1px solid #ddd'
          }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>श्री प्रभाकर झा, IAS (सेवानिवृत्त)</h4>
            <p style={{ margin: '5px 0', color: '#666' }}>मोबाइल: 9431076168</p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <h3 style={{ color: '#7c1a1a', marginBottom: '20px', borderBottom: '2px solid #7c1a1a', paddingBottom: '10px' }}>
            संरक्षक
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री कुशेश्वर झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572486364</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री कृत्यानंद झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9661339224</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री इंद्रकांत झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 7763880583</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>स्व. श्री जीव नारायण झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: XXXXXXXXXX</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री विद्याकांत मिश्रा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9430467509</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '16px' }}>श्री विजय नारायण झा</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 7654009737</p>
            </div>
          </div>
        </div>

        <h2 style={{ color: '#7c1a1a', textAlign: 'center', marginBottom: '30px' }}>
          कार्यकारी सदस्य
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सचिव
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री सुशील कुमार झा (फूल झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 8825130710</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सह-सचिव I
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री प्रदीप ठाकुर</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572441723</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सह-सचिव II
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>रोशन कुमार झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9931201314</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                कोषाध्यक्ष I
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री यतींद्र नाथ झा (चंदू झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572093590</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                कोषाध्यक्ष II
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>श्री कृष्णानंद पाठक</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 7209002685</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सदस्य I
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>राकेश कुमार झा (डब्लू झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9572486364</p>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h4 style={{ color: '#7c1a1a', marginBottom: '10px', borderBottom: '1px solid #7c1a1a', paddingBottom: '5px' }}>
                सदस्य II
              </h4>
              <h5 style={{ color: '#333', marginBottom: '8px' }}>रंजीत कुमार झा (सेंटू झा)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>मोबाइल: 9631552957</p>
            </div>
          </div>
        </div>

        <h2 style={{ color: '#7c1a1a', textAlign: 'center', marginBottom: '30px' }}>
          स्वयंसेवक
        </h2>
        
        <div style={{ 
          backgroundColor: '#f8f8f8', 
          padding: '30px', 
          borderRadius: '10px', 
          marginBottom: '40px',
          border: '2px solid #7c1a1a'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>गगन कुमार झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 8210941827</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>कौशल वात्स</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 9661546789</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>बसंत झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 6204274972</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>केशव झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 7979923963</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>जयप्रकाश मिश्रा (मोनू)</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 8969234899</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
              <h5 style={{ color: '#333', marginBottom: '8px', fontSize: '15px' }}>आयुष झा</h5>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '13px' }}>मोबाइल: 9798809842</p>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#fff3cd', 
          borderRadius: '10px', 
          border: '1px solid #ffeaa7',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#856404', marginBottom: '15px' }}>संपर्क करबाक लेल</h4>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            मन्दिर प्रबंधन सँ संपर्क करबाक लेल उपर दिएल गेल फोन नंबर पर कॉल करू
          </p>
          <p style={{ margin: '10px 0', color: '#856404', fontSize: '14px' }}>
            या मन्दिर कार्यालय पर सीधा संपर्क करू
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  return (
    <div className="page">
      <h1>प्रश्न आ उत्तर (FAQ)</h1>
      <ul className="bullet-list">
        <li>दर्शन लेल शुल्क? – सामान्य दर्शन पूर्णत: निःशुल्क अछि।</li>
        <li>फोटोग्राफी? – मन्दिरक भीतरक नियम अनुसार सीमित अनुमति।</li>
        <li>दान रसीद? – मन्दिर कार्यालय द्वारा विधिवत रसीद प्रदान कएल जाइत अछि।</li>
      </ul>
    </div>
  );
}

function DosDontsPage() {
  return (
    <div className="page">
      <h1>क्या करब आ की नहि करब</h1>
      <h2>क्या करब</h2>
      <ul className="bullet-list">
        <li>शुद्ध वस्त्रमे, श्रद्धा आ मर्यादासँ मन्दिरमे प्रवेश करू।</li>
        <li>मन्दिरक स्वच्छता, शान्ति आ अनुशासन बनाए रखू।</li>
        <li>पंक्तिबद्ध होइ दर्शन करू, बुजुर्ग आ महिलासभक सम्मान करू।</li>
      </ul>
      <h2>की नहि करब</h2>
      <ul className="bullet-list">
        <li>अशोभनीय व्यवहार, ऊँचा आवाज, धक्का-मुक्की कनि सेहो नहि करू।</li>
        <li>प्लास्टिक, गुटखा, तम्बाकू, मदिरा आदि पूर्णत: प्रतिबंधित अछि।</li>
        <li>मन्दिरक दीवार, शिला, भवन पर लिखावट अथवा क्षति नहि पहुँचाउ।</li>
      </ul>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="page">
      <h1>सम्पर्क</h1>
      <h2>पता</h2>
      <p>
        वार्ड नं. 8, हुलास, राघोपुर, सुपौल, बिहार – 852111
      </p>
      <h2>संपर्क विवरण</h2>
      <p>
        फोन: +91-8825130710, +91-7549662532
      </p>
    </div>
  );
}

function DurgaSaptashatiPage() {
  return (
    <div className="page">
      <h1>दुर्गा सप्तशती</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>दुर्गा सप्तशती PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://vedpuran.net/wp-content/uploads/2013/04/durga-saptashati-hindi.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://vedpuran.net/wp-content/uploads/2013/04/durga-saptashati-hindi.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>दुर्गा सप्तशती पाठ</h2>
        <p className="mantra-intro">
          दुर्गा सप्तशती हिन्दू धर्म के अनुसार देवी दुर्गा के स्तुति संग्रह अछि, जे मार्कण्डेय पुराण मे वर्णित अछि।
          ई 700 श्लोक क संग्रह अछि जे तीन चरण मे विभाजित अछि।
        </p>
        <div className="mantra-section">
          <h3>पहिला चरण - देवी कथा</h3>
          <p className="shlok">
            ॥ देवी सूक्तम् ॥<br/>
            वन्दे विचित्रं देवीं सुरैः समुदैर्यास्तथा।<br/>
            ब्रह्माण्यं विष्णुं शिवं तथ देवीं सर्वान् नमोऽस्तुते॥
          </p>
          <p className="meaning">
            म विचित्र रूपी देवी क पूजा करैत छी, जे समुद्र सँ उत्पन्न भेल आ
            ब्रह्मा, विष्णु, शिव आओर सभ देवतासभ क संग-संग देवी क वंदन करैत छी।
          </p>
        </div>
        <div className="mantra-benefits">
          <h3>पाठ के लाभ</h3>
          <ul>
            <li>सभ तरह के कष्टन क नाश</li>
            <li>शत्रु सँ रक्षा</li>
            <li>सुख-समृद्धि प्राप्ति</li>
            <li>आध्यात्मिक शक्ति वृद्धि</li>
            <li>मनोकामना पूर्ति</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ShivaChalisaPage() {
  return (
    <div className="page">
      <h1>शिव चालीसा</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>शिव चालीसा PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://www.templepurohit.com/wp-content/uploads/2015/10/Shiva-Chalisa.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://www.templepurohit.com/wp-content/uploads/2015/10/Shiva-Chalisa.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>श्री शिव चालीसा</h2>
        <p className="mantra-intro">
          शिव चालीसा भगवान शिव क स्तुति मे लिखल गेल 40 चौपाइ क संग्रह अछि।
          एकरा पाठ सँ भगवान शिव क कृपा प्राप्त होइत अछि।
        </p>
        <div className="chaupai-section">
          <p className="chaupai">
            ॥ दोहा ॥<br/>
            जय गिरिजापति बलभद्रा केशव।<br/>
            मधुसूदन कृपाकर स्वदेश॥
          </p>
          <p className="chaupai">
            ॥ चौपाई ॥<br/>
            जय गिरिजापति बलभद्रा केशव।<br/>
            मधुसूदन कृपाकर स्वदेश।<br/>
            करत त्रिनयन भव सिंहार।<br/>
            रिपु नाशन सकल विशेष।
          </p>
        </div>
      </div>
    </div>
  );
}

function DeviAartiPage() {
  return (
    <div className="page">
      <h1>देवी आरती</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>देवी आरती संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://sriadishankarastutis.org/wp-content/uploads/2019/04/Devi-Kshamaapana-Stotram.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://sriadishankarastutis.org/wp-content/uploads/2019/04/Devi-Kshamaapana-Stotram.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>दुर्गा माँ क आरती</h2>
        <p className="mantra-intro">
          देवी आरती माँ दुर्गा क स्तुति मे लिखल गेल भजन अछि, जकरा पाठ सँ
          माँ क कृपा आ आशीर्वाद मिलैत अछि।
        </p>
        <div className="aarti-text">
          <p className="aarti-line">
            ॥ जय देवी माँ जय देवी माँ ॥<br/>
            ॥ जय सरस्वती माँ जय लक्ष्मी माँ ॥
          </p>
          <p className="aarti-line">
            जय दुर्गा माँ जय दुर्गा माँ<br/>
            तुम संकट हारी माँ<br/>
            भक्तन क दुख हारी माँ<br/>
            सभ कल्याण करी माँ
          </p>
        </div>
      </div>
    </div>
  );
}

function ShivaAartiPage() {
  return (
    <div className="page">
      <h1>शिव आरती</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>शिव आरती संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://www.chinmayaorlando.org/downloads/JayaJagadishaHareAarti.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://www.chinmayaorlando.org/downloads/JayaJagadishaHareAarti.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>शिव जी क आरती</h2>
        <p className="mantra-intro">
          शिव आरती भगवान शिव क स्तुति मे लिखल गेल भजन अछि।
          महादेव क पूजा करैत समय ई आरती करनाइ महत्वपूर्ण मानल जाइत अछि।
        </p>
        <div className="aarti-text">
          <p className="aarti-line">
            ॥ ओम जय शिव ओंकारा ॥<br/>
            ॥ प्रभु शिव ओंकारा ॥
          </p>
          <p className="aarti-line">
            ओम जय शिव ओंकारा<br/>
            ब्रह्मा विष्णु सदाशिव<br/>
            अंग अंग के भूषण लगा<br/>
            भोले शंकर भोले
          </p>
        </div>
      </div>
    </div>
  );
}

function SandhyaMantraPage() {
  return (
    <div className="page">
      <h1>संध्यान मंत्र</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>संध्यान मंत्र संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://satymarg.wordpress.com/wp-content/uploads/2015/07/sandhya.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://satymarg.wordpress.com/wp-content/uploads/2015/07/sandhya.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>दैनिक संध्या मंत्र</h2>
        <p className="mantra-intro">
          संध्या काल मे पठित जाए वाला मंत्र सभ कर्मन क फल प्राप्त करैत अछि।
          ई मंत्रन क नियमित पाठ सँ जीवन मे सकारात्मक परिवर्तन होइत अछि।
        </p>
        <div className="mantra-section">
          <h3>गायत्री मंत्र</h3>
          <p className="mantra">
            ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं<br/>
            भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥
          </p>
        </div>
      </div>
    </div>
  );
}

function PrayerCollectionPage() {
  return (
    <div className="page">
      <h1>प्रार्थना संग्रह</h1>
      <div className="mantra-content">
        <div className="download-section">
          <h3>प्रार्थना संग्रह PDF डाउनलोड</h3>
          <div className="download-buttons">
            <a href="https://adipurgroup.wordpress.com/wp-content/uploads/2016/12/e0a4b8e0a4ade0a4be.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn">
              📥 PDF डाउनलोड करू
            </a>
            <a href="https://adipurgroup.wordpress.com/wp-content/uploads/2016/12/e0a4b8e0a4ade0a4be.pdf" 
               target="_blank" rel="noopener noreferrer" 
               className="download-btn secondary">
              📚 ऑनलाइन पढ़ू
            </a>
          </div>
        </div>
        <h2>संग्रहित प्रार्थना</h2>
        <p className="mantra-intro">
          ई संग्रह मे महत्वपूर्ण प्रार्थना, स्तोत्र आ मंत्र दिया गेल अछि
          जे दैनिक जीवन मे उपयोगी अछि।
        </p>
        <div className="prayer-list">
          <h3>दैनिक प्रार्थना</h3>
          <ul>
            <li>सुबहे उठना क प्रार्थना</li>
            <li>भोजन से पहिने क प्रार्थना</li>
            <li>बाहर जाए समय प्रार्थना</li>
            <li>सोए समय प्रार्थना</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ChaurchanMantraPage() {
  return (
    <div className="page">
      <h1>चौरचन पूजा मंत्र</h1>
      <div className="mantra-content">
        <p className="mantra-intro">
          चौरचन पूजा मिथिला क्षेत्र मे विशेष रूप सँ मनायल जाए वाल पर्व अछि। 
          ई पर्व गणेश जी के सम्मान मे मनायल जाइत अछि आ एहि दिन विशेष मंत्रोच्चार कएल जाइत अछि।
        </p>
        
        <div className="mantra-box">
          <h3>🌙 चन्द्रमा प्रणाम मंत्र</h3>
          <div className="mantra-text">
            <p className="shlok">
              दधि-शंख-तुषाराभं, क्षीरोदार्णव-संभवम्‌।<br/>
              नमामि शशिनं भक्त्या, शंभोर्मुकुट भूषणम्‌।।
            </p>
            <p className="meaning">
              अर्थ: दधि, शंख आ तुषार के समान श्वेत रंग वाले, क्षीरसागर से उत्पन्न हुए,
              शिव जी के मुकुट के भूषण रूप चन्द्रमा को भक्तिपूर्वक नमस्कार अछि।
            </p>
          </div>
        </div>

        <div className="mantra-box">
          <h3>🙏 चौरचन पूजा मंत्र</h3>
          <div className="mantra-text">
            <p className="shlok">
              सिंह: प्रसेनवमवधीत सिंहो जाम्बवताहतः।<br/>
              सुकुमारक मा रोदीस्तव ह्येष स्यमन्तकः ॥
            </p>
            <p className="meaning">
              अर्थ: सिंह ने प्रसेन को मार डालल आ जाम्बवान ने सिंह के मार देलक।
              हे बालक (सुकुमारक), रोव नहि, ई तोर स्यमन्तक मणि अछि।
              (भगवान श्री कृष्ण के समझावल गेल शब्द)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UkkaPatiMantraPage() {
  return (
    <div className="page">
      <h1>उक्का-पाती मंत्र</h1>
      <div className="mantra-content">
        <p className="mantra-intro">
          उक्का-पाती मिथिला क्षेत्र क एक महत्वपूर्ण लोक आस्था अछि। 
          ई मुख्य रूप सँ श्रावण महीना मे मनायल जाए वाल पर्व अछि। 
          एहि दिन विशेष पूजा आ मंत्रोच्चार कएल जाइत अछि।
        </p>
        
        <div className="mantra-box">
          <h3>🙏 उक्का-पाती मुख्य मंत्र</h3>
          <div className="mantra-text">
            <p className="shlok">
              शास्त्राशस्त्रहतानांच भूतानांभूत दर्शयोः।<br/>
              उज्ज्वल ज्योतिषा देहं निदहेव्योमवह्निना॥<br/><br/>
              अग्निदग्धाश्व ये जीवा येऽदयद्ग्धाः कुले मम।<br/>
              उज्ज्वलज्योतिषा दग्धास्ते यान्तु परमाङ्गतिम्‌‌॥<br/><br/>
              यमलोकं परित्यज्य आगता महालये।<br/>
              उज्ज्वलज्योतिषा वत्मं पश्यन्तो व्रजन्तुते॥
            </p>
            <p className="meaning">
              अर्थ: हे भूतों के दर्शन करने वाले, शस्त्रों से मारे गए आत्माओं के लिए 
              उज्ज्वल ज्योति से देह को जलाने वाले। जो मेरे कुल में अग्नि से दग्ध हुए हैं,
              वे उज्ज्वल ज्योति से दग्ध होकर परमगति को प्राप्त हों। यमलोक को त्यागकर 
              महालय में आए हुए, उज्ज्वल ज्योति को देखते हुए अपने गंतव्य को प्राप्त हों।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-column">
          <h3>मानचित्र</h3>
          <div className="footer-map-wrapper">
            <iframe
              title="Durga Mahadev Sthan, Hulas Map"
              src="https://www.google.com/maps?q=Durga+Mahadev+Sthan,+Hulas,+Supaul,+Bihar&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="footer-column">
          <h3>दुर्गा महादेव स्थान, हुलास</h3>
          <p>
            मिथिलाक धरती पर अवस्थित ई पवित्र धाम भक्तजनक आस्था, सेवा आ
            संस्कारक केन्द्र अछि।
          </p>
        </div>
        <div className="footer-column">
          <h3>महत्वपूर्ण लिंक</h3>
          <ul>
            <li>
              <Link to="/darshan-timings">दर्शन आ आरती समय</Link>
            </li>
            <li>
              <Link to="/festivals">मुख्य पर्व आ उत्सव</Link>
            </li>
            <li>
              <Link to="/donations">दान संबंधी जानकारी</Link>
            </li>
            <li>
              <Link to="/how-to-reach">कैना पहुँचब</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>सम्पर्क</h3>
          <p>वार्ड नं 8, हुलास, सुपौल, बिहार – 852111</p>
          <p>मोबाइल: +91 8825130710, +91 7549662532</p>
          <p>ईमेल: durgamahadevsthanhulas@gmail.com</p>
        </div>
<div className="footer-social">
  <a href="https://chat.whatsapp.com/FbhHQWe2yKcDsaUx56t0Si" aria-label="WhatsApp">
    <FaWhatsapp />
  </a>

  <a href="https://www.facebook.com/DurgaSthanHulas/" aria-label="Facebook">
    <FaFacebook />
  </a>

  <a href="https://www.instagram.com/_mahadev_sthan_hulash/" aria-label="Instagram">
    <FaInstagram />
  </a>

  <a href="https://www.youtube.com/@DurgaMahadevSthanHulas" aria-label="YouTube">
    <FaYoutube />
  </a>
</div>

      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} दुर्गा महादेव स्थान, हुलास. सर्वाधिकार
        सुरक्षित। | Developed by <strong>RATAN JHA</strong>
      </div>
    </footer>
  );
}


export default App;
>>>>>>> b0adb73 (Add social media icons and Om app icon)
