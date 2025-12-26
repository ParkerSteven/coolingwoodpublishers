'use client';
import React, { useState, useEffect } from 'react';
import { PenTool } from 'lucide-react';

const authorsData = [
  {
    id: 1,
    name: "MICHAEL D. EVANS",
    bio: "Discover Michael D. Evans, author of The Power. His message is bold, practical, and motivating focused on mindset, discipline, and action steps that push readers to level up consistently.",
    profileHref: "/authors/michael-d-evans",
    imageSrc: "/assets/images/PublishedAuthors/Michael D. Evans/freepik__the-style-is-candid-image-photography-with-natural__25396.png",
    bookCoverSrc: "/assets/images/book-front-back/michael/front.jpg"
  },
  {
    id: 2,
    name: "SUSAN CLARK",
    bio: "Explore Susan Clark, author of The Dangerous Wolf in Forest Root. Her storytelling is atmospheric and literary, built on tension, hidden truths, and a calm intensity that stays with you.",
    profileHref: "/authors/susan-clark",
    imageSrc: "/assets/images/PublishedAuthors/susan-clark/freepik__the-style-is-candid-image-photography-with-natural__25395.png",
    bookCoverSrc: "/assets/images/book-front-back/clark/WOLF FULL BOOK COVER DESIGN front.jpg"
  },
  {
    id: 3,
    name: "JOSH PETER",
    bio: "Discover Josh Peter, author of The Last King. His writing carries a sharper edge cinematic, intense, and built around power, consequences, and the kind of momentum that keeps pages turning.",
    profileHref: "/authors/josh-peter",
    imageSrc: "/assets/images/PublishedAuthors/Josh Peter/Chc 1.png",
    bookCoverSrc: "/assets/images/PublishedAuthors/Josh Peter/Book (4).png"
  }
];

const AuthorsSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % authorsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideChange = (newIndex) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeClass('opacity-100');
    }, 300);
  };

  const handleDotClick = (idx) => {
    if (idx !== currentIndex) {
      handleSlideChange(idx);
    }
  };

  return (
    <section style={{background: 'var(--bg)'}} className="w-full py-16 px-4">
      {/* Heading - OUTSIDE Container */}
      <div className="text-center mb-12">
        {/* Pen Icon */}
        <div className="flex justify-center mb-4">
          <PenTool 
            className="w-16 h-16 text-[#1f2a44] hover:text-[#EB6358] transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12"
            strokeWidth={1.5}
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-3 inline-block transition-colors duration-300 text-gray-900 hover:text-[#EB6358] cursor-pointer">
          Author&apos;s Spotlight
        </h2>
        <div style={{background: 'var(--border)'}} className="w-full max-w-md mx-auto h-[1px] mb-5 mt-3"></div>
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 text-gray-600 hover:text-[#EB6358] cursor-pointer">
          Each month, we shine a light on one of our remarkable authors. Dive into their creative process, 
          learn about their journey to publication, and get a glimpse into the world they&apos;ve crafted.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Outer Frame */}
        <div style={{
          background: 'white',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-sm)',
          borderRadius: 'var(--radius)'
        }} className="border p-5 md:p-7">
          {/* Spotlight Card - Desktop Grid Layout */}
          <div style={{borderRadius: 'var(--radius)'}} className="hidden md:grid grid-cols-[90px_320px_320px_1fr] min-h-[380px] overflow-hidden">
            {/* A) Vertical Name Strip */}
            <div style={{
              background: 'var(--text)',
              borderRightColor: 'var(--border)',
              borderRadius: 'var(--radius) 0 0 var(--radius)'
            }} className="border-r flex items-center justify-center relative overflow-visible">
              <div 
                className={`transition-opacity duration-300 ${fadeClass}`}
                style={{ 
                  writingMode: 'vertical-rl', 
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap',
                  color: 'white'
                }}
              >
                <span className="text-2xl font-black tracking-[0.25em] inline-block">
                  {authorsData[currentIndex].name}
                </span>
              </div>
            </div>

            {/* B) Author Image Placeholder */}
            <div
              style={{
                background: 'var(--surface)',
                borderRightColor: 'var(--border)'
              }}
              className="border-r h-full overflow-hidden"
            >
              <img
                src={authorsData[currentIndex].imageSrc}
                alt={`${authorsData[currentIndex].name} author photo`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${fadeClass}`}
              />
            </div>

            {/* C) Book Cover Placeholder */}
            <div style={{
              background: 'var(--surface)',
              borderRightColor: 'var(--border)'
            }} className="border-r flex flex-col items-center justify-center">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <img
                  src={authorsData[currentIndex].bookCoverSrc}
                  alt={`${authorsData[currentIndex].name} book cover`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* D) Text Block + Button */}
            <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] relative px-6 py-5 flex flex-col items-center justify-center text-center">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <p className="text-sm md:text-[15px] leading-6 line-clamp-[8] mb-2 transition-colors duration-300 text-gray-600 hover:text-[#EB6358] cursor-pointer">
                  {authorsData[currentIndex].bio}
                </p>
              </div>
              
              <button 
                onClick={() => window.location.href = authorsData[currentIndex].profileHref}
                className="absolute bottom-4 right-4 bg-[#1f2a44] hover:bg-[#EB6358] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 border-2 border-black"
              >
                Author Profile
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div style={{borderRadius: 'var(--radius)'}} className="md:hidden flex flex-col overflow-hidden min-h-[500px]">
            {/* Name Strip - Horizontal on mobile */}
            <div style={{
              background: 'var(--text)',
              borderBottomColor: 'var(--border)'
            }} className="border-b py-4 flex items-center justify-center">
              <span style={{color: 'white'}} className={`text-2xl font-black tracking-widest transition-opacity duration-300 ${fadeClass}`}>
                {authorsData[currentIndex].name}
              </span>
            </div>

            {/* Images Row */}
            <div style={{borderBottomColor: 'var(--border)'}} className="grid grid-cols-2 border-b">
              <div style={{
                background: 'var(--surface)',
                borderRightColor: 'var(--border)'
              }} className="border-r h-40 flex flex-col items-center justify-center">
                <div className={`transition-opacity duration-300 ${fadeClass}`}>
                  <img
                    src={authorsData[currentIndex].imageSrc}
                    alt={`${authorsData[currentIndex].name} author photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div style={{background: 'var(--surface)'}} className="h-40 flex flex-col items-center justify-center">
                <div className={`transition-opacity duration-300 ${fadeClass}`}>
                  <img
                    src={authorsData[currentIndex].bookCoverSrc}
                    alt={`${authorsData[currentIndex].name} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] p-5 relative flex-1 flex flex-col justify-between">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <p className="text-sm leading-6 text-center mb-16 transition-colors duration-300 text-gray-600 hover:text-[#EB6358] cursor-pointer">
                  {authorsData[currentIndex].bio}
                </p>
              </div>
              <button 
                onClick={() => window.location.href = authorsData[currentIndex].profileHref}
                className="bg-[#1f2a44] hover:bg-[#EB6358] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 w-full border-2 border-black"
              >
                Author Profile
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {authorsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              style={{
                background: idx === currentIndex ? 'var(--accent)' : 'var(--border)',
                width: idx === currentIndex ? '40px' : '12px',
                height: '12px'
              }}
              className="rounded-full transition-all duration-300"
              aria-label={`View author ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSpotlight;
