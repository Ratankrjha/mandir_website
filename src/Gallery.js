// import React from 'react';
// import './App.css';

// const base = process.env.PUBLIC_URL || '';

// const IMAGES = [
//   { src: `${base}/photos/dp1.jpg`, alt: 'मन्दिर बाह्य दृश्य 1' },
//   { src: `${base}/photos/dp2.jpg`, alt: 'मन्दिर बाह्य दृश्य 2' },
//   { src: `${base}/photos/dp3.jpg`, alt: 'मन्दिर आ प्रांगण' },
//   { src: `${base}/photos/dp4.jpg`, alt: 'मन्दिर प्रवेश द्वार' },
//   { src: `${base}/photos/dp5.jpg`, alt: 'मन्दिरक रात्रिक दृश्य' },
//   { src: `${base}/photos/dp6.jpg`, alt: 'भक्तजनक भीड़' },
//   { src: `${base}/photos/dp7.jpg`, alt: 'मन्दिरक दूसरा कोण' },
//   { src: `${base}/photos/dp8.jpg`, alt: 'पोखर आ बगीचा' },
//   { src: `${base}/photos/hulas0.jpg`, alt: 'हुलास क्षेत्रक दृश्य' },
//   { src: `${base}/photos/hulas1.jpg`, alt: 'ग्राम्य परिवेश' },
//   { src: `${base}/photos/hulas7.jpg`, alt: 'मन्दिर परिसरक एक हिस्सा' },
// ];

// export default function GalleryPage() {
//   return (
//     <div className="page">
//       <h1>फोटो गैलरी</h1>
//       <p>
//         एतए प्रस्तुत कएल गेल तस्वीरसभ मन्दिरक विविध रूप, प्रांगण, उत्सव आ
//         प्राकृतिक सौन्दर्यक झलक देखबैत अछि।
//       </p>
//       <div className="gallery-grid">
//         {IMAGES.map((img) => (
//           <figure key={img.src} className="gallery-item">
//             {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
//             <img src={img.src} alt={img.alt} loading="lazy" />
//             <figcaption>{img.alt}</figcaption>
//           </figure>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "./App.css"; // CSS वही file use karo

function Gallery() {
  const [loading, setLoading] = React.useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/photos/dp1.jpg",
    "/photos/dp2.jpg",
    "/photos/newpic1.jpg",
    "/photos/dp4.jpg",
    "/photos/dp5.jpg",
    "/photos/dp6.jpg",
    "/photos/dp7.jpg",
    "/photos/dp8.jpg",
    "/photos/hulas7.jpg",
    "/photos/hulas1.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/pic1.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/pic2.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_174006.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_174205.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_174730.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_175157.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_175239.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_175252.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_175314.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_175318.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_175919.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_180142.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_181107.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_181125.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_182734.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_190045.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/20241012_205051.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/IMG-20241012-WA0007.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/IMG-20241012-WA0009.jpg",
    "/photos/drive-download-20260307T153529Z-1-001 (1)/IMG-20241012-WA0011.jpg"
  ];

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImg(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    setCurrentIndex(0);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImg(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (!selectedImg) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

React.useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [selectedImg, currentIndex, handleKeyDown]);

  return (
    <div className="gallery">
      {loading ? (
        // Loading Skeleton
        Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="skeleton skeleton-gallery"></div>
        ))
      ) : (
        images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="gallery-img"
            onClick={() => openLightbox(index)}
          />
        ))
      )}

      {selectedImg && (
        <div className="modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
            ‹
          </button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
            ›
          </button>
          <img src={selectedImg} alt="" className="zoom-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default Gallery;