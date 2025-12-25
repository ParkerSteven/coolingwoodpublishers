"use client";
import React, { useRef, useEffect, useState } from "react";

// Pastel header colors (formal, muted, distinct)
const headerColors = [
  "#E6F0FA", // soft light blue
  "#D8EDE1", // soft sage green
  "#F8E6EC", // soft blush / pale rose
];

const orange = "#fd9783";
const border = "border-[3px] border-black";
const shadow = "shadow-[3px_3px_0_#000]";
const rounded = "rounded-3xl";

const cards = [
  {
    title: "GUIDED PARTNERSHIP",
    body:
      "You’ll have a dedicated project lead who manages the entire ghostwriting process—planning, interviews, drafts, revisions, and deadlines—so everything stays organized and clear.",
  },
  {
    title: "VOICE & CREATIVE INTEGRITY",
    body:
      "Your voice remains intact. We write in your tone, preserve your message, and refine until the manuscript sounds authentically like you—not a generic writer.",
  },
  {
    title: "PUBLISHING-READY DELIVERY",
    body:
      "You receive a polished manuscript structured for editing and publishing—clean files, organized notes, and a clear path to the next stage.",
  },
];

function useSectionAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    let ticking = false;
    let lastVisible = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio > 0.18;
        if (isVisible !== lastVisible) {
          lastVisible = isVisible;
          if (isVisible) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      },
      {
        threshold: [0, 0.18, 0.5, 1],
        rootMargin: "0px 0px -10% 0px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function HeadingUnderline({ color }) {
  // SVG width is 70% of heading width, hand-drawn curve
  return (
    <svg
      viewBox="0 0 320 32"
      width="70%"
      height="32"
      className="mx-auto mt-2 mb-6"
      style={{ display: "block" }}
    >
      <path
        d="M20 20 Q160 38 300 12"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ transition: 'stroke 220ms ease' }}
      />
    </svg>
  );
}

export default function GhostwritingSupportSection() {
  const [sectionRef, visible] = useSectionAnimation();
  const navy = '#0f172a';
  const orange = '#fd9783';
  const [hover, setHover] = useState(false);

  // Section animation classes
  const animClass = visible
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 translate-y-5 pointer-events-none";
  const animTransition =
    visible
      ? "transition-all duration-[700ms] ease-out"
      : "transition-all duration-[400ms] ease-out";

  // Heading/underline color logic
  const headingColor = hover ? orange : navy;

  return (
    <section
      ref={sectionRef}
      className={`w-full py-24 md:py-[96px] bg-[#FAFAFA] ${animClass} ${animTransition}`}
      style={{ minHeight: "1px" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
        <div
          className="w-full flex flex-col items-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2
            className="text-3xl md:text-5xl font-black text-center leading-tight"
            style={{ fontWeight: 900, color: headingColor, transition: 'color 220ms ease' }}
          >
            How We Support
            <br />
            Ghostwriting Authors
          </h2>
          <HeadingUnderline color={headingColor} />
        </div>
        <div className="w-full mt-2">
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 w-full">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`group flex flex-col h-full ${border} ${shadow} ${rounded} bg-white transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]`}
                style={{ minHeight: 380 }}
              >
                {/* Header panel */}
                <div
                  className={`w-full ${border} ${shadow} rounded-t-2xl rounded-b-none flex items-center justify-center h-20 md:h-24 select-none transition-colors duration-200`}
                  style={{
                    background: headerColors[i],
                    color: "#111",
                  }}
                >
                  <span
                    className="w-full text-center font-bold uppercase text-lg md:text-xl transition-colors duration-200 group-hover:text-[#fd9783]"
                    style={{ color: "#111" }}
                  >
                    {card.title}
                  </span>
                </div>
                {/* Body panel */}
                <div
                  className="flex-1 flex items-center justify-center px-6 py-8 md:py-10 text-center text-[1.08rem] text-[#232B38] font-medium transition-colors duration-200 group-hover:text-[#fd9783] bg-white rounded-b-2xl"
                  style={{ minHeight: 180 }}
                >
                  {card.body}
                </div>
              </div>
            ))}
          </div>
          {/* Mobile/Tablet horizontal scroll */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide w-full mt-2">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`group flex-shrink-0 w-[85vw] max-w-xs ${border} ${shadow} ${rounded} bg-white transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] snap-center`}
                style={{ minHeight: 380 }}
              >
                {/* Header panel */}
                <div
                  className={`w-full ${border} ${shadow} rounded-t-2xl rounded-b-none flex items-center justify-center h-20 select-none transition-colors duration-200`}
                  style={{
                    background: headerColors[i],
                    color: "#111",
                  }}
                >
                  <span
                    className="w-full text-center font-bold uppercase text-lg transition-colors duration-200 group-hover:text-[#fd9783]"
                    style={{ color: "#111" }}
                  >
                    {card.title}
                  </span>
                </div>
                {/* Body panel */}
                <div
                  className="flex-1 flex items-center justify-center px-6 py-8 text-center text-[1.08rem] text-[#232B38] font-medium transition-colors duration-200 group-hover:text-[#fd9783] bg-white rounded-b-2xl"
                  style={{ minHeight: 180 }}
                >
                  {card.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// Hide scrollbar utility (Tailwind plugin or add to global CSS):
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
// .scrollbar-hide::-webkit-scrollbar { display: none; }
