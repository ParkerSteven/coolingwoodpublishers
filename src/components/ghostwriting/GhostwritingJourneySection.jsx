"use client";
import React, { useRef, useEffect, useState } from "react";

// --- Step Icon SVGs ---
const icons = {
  mic: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="24" y="12" width="16" height="28" rx="8" stroke="#111" strokeWidth="3.5" />
      <path d="M32 44v8m-10-4h20" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      <ellipse cx="32" cy="26" rx="8" ry="12" stroke="#111" strokeWidth="3.5" />
    </svg>
  ),
  paper: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="12" width="40" height="40" rx="8" stroke="#111" strokeWidth="3.5"/>
      <path d="M20 24h24M20 32h24M20 40h12" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M44 52l-6-6" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="38" y="46" width="8" height="4" rx="2" stroke="#111" strokeWidth="2"/>
    </svg>
  ),
  typewriter: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="12" y="28" width="40" height="20" rx="6" stroke="#111" strokeWidth="3.5"/>
      <rect x="20" y="16" width="24" height="12" rx="3" stroke="#111" strokeWidth="3.5"/>
      <circle cx="20" cy="44" r="2" fill="#111"/>
      <circle cx="44" cy="44" r="2" fill="#111"/>
      <rect x="28" y="36" width="8" height="4" rx="2" stroke="#111" strokeWidth="2"/>
    </svg>
  ),
  checklist: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="14" y="14" width="36" height="36" rx="8" stroke="#111" strokeWidth="3.5"/>
      <path d="M24 28l6 6 10-10" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M24 40h16" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  ),
  doc: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="16" y="12" width="32" height="40" rx="6" stroke="#111" strokeWidth="3.5"/>
      <path d="M24 24h16M24 32h16M24 40h10" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="44" cy="48" r="4" stroke="#111" strokeWidth="3.5"/>
      <path d="M42 48l2 2 4-4" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};

const steps = [
  {
    pill: "Discovery Call",
    pillColor: "bg-pink-200",
    pillText: "text-pink-700",
    icon: icons.mic,
    text: "We learn your story, goal, audience, and tone. You share notes or recordings—we turn them into a clear direction.",
  },
  {
    pill: "Outline & Chapter Plan",
    pillColor: "bg-purple-200",
    pillText: "text-purple-700",
    icon: icons.paper,
    text: "We build a strong outline with chapters, flow, and key moments so the writing stays focused and consistent.",
  },
  {
    pill: "Writing Sprint",
    pillColor: "bg-yellow-200",
    pillText: "text-yellow-700",
    icon: icons.typewriter,
    text: "We write chapter by chapter in your voice, sending drafts in milestones so you stay in control.",
  },
  {
    pill: "Revisions & Voice Match",
    pillColor: "bg-blue-200",
    pillText: "text-blue-700",
    icon: icons.checklist,
    text: "You review, we refine. We tighten clarity, improve flow, and lock the tone so it sounds like you.",
  },
  {
    pill: "Final Manuscript Delivery",
    pillColor: "bg-green-200",
    pillText: "text-green-700",
    icon: icons.doc,
    text: "You receive a clean final manuscript ready for editing, formatting, and publishing—plus all source notes organized.",
  },
];

const DoodleLeft = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <path d="M8 48 Q24 16 48 8" stroke="#111" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <circle cx="8" cy="48" r="2.5" fill="#fff" stroke="#111" strokeWidth="2"/>
  </svg>
);
const DoodleRight = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <path d="M48 48 Q32 16 8 8" stroke="#111" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <circle cx="48" cy="48" r="2.5" fill="#fff" stroke="#111" strokeWidth="2"/>
  </svg>
);

export default function GhostwritingJourneySection() {
  const navy = '#0f172a';
  const orange = '#fd9783';

  // Scroll direction hook (single instance)
  function useScrollDirection() {
    const [direction, setDirection] = useState("down");
    const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
    useEffect(() => {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currY = window.scrollY;
            setDirection(currY > lastScrollY.current ? "down" : "up");
            lastScrollY.current = currY;
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return direction;
  }

  // Get scroll direction ONCE
  const direction = useScrollDirection();

  // Animation state hook (stable, both scroll directions)
  function useCardAnimation(index) {
    const ref = useRef(null);
    const isOdd = index % 2 === 0;
    const hiddenState = isOdd ? "hiddenLeft" : "hiddenRight";
    const [state, setState] = useState(hiddenState);
    const timeoutRef = useRef();
    const wasVisibleRef = useRef(false);
    useEffect(() => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio >= 0.28) {
            if (!wasVisibleRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(() => setState("visible"), index * 120);
              wasVisibleRef.current = true;
            }
          } else if (entry.intersectionRatio <= 0.12) {
            clearTimeout(timeoutRef.current);
            setState(hiddenState);
            wasVisibleRef.current = false;
          }
        },
        {
          threshold: [0, 0.12, 0.28, 0.35, 1],
          rootMargin: "0px 0px -15% 0px",
        }
      );
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
        clearTimeout(timeoutRef.current);
      };
    }, [index]);
    return [ref, state];
  }

  return (
    <section className="w-full flex flex-col items-center py-20" style={{ background: '#fff' }}>
      <div className="relative max-w-5xl w-full mx-auto flex flex-col items-center mb-20">
        <div className="absolute left-0 top-0 hidden md:block">
          <DoodleLeft />
        </div>
        <div className="absolute right-0 top-0 hidden md:block">
          <DoodleRight />
        </div>
        <h2
          className="text-3xl md:text-5xl font-black text-center mb-4 leading-tight"
          style={{ color: navy }}
        >
          From Idea to Finished Manuscript
        </h2>
        <p
          className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-7 leading-relaxed font-normal"
          style={{ color: navy }}
        >
          Ghostwriting turns your story into a polished book without losing your voice. We guide the process from discovery to final draft—clear steps, clear deliverables, and zero confusion.
        </p>
        <div className="flex justify-center w-full">
          <span
            className="inline-block px-6 py-2 rounded-2xl border-[3px] border-black bg-[#232B38] shadow-[3px_3px_0px_#000] font-bold text-lg text-white select-none"
          >
            The Ghostwriting Journey
          </span>
        </div>
      </div>
      <ol className="w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-20">
        {steps.map((step, i) => {
          const [ref, state] = useCardAnimation(i);
          // Animation classes
          let animClass = "";
          let transition = "transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
          if (state === "visible") {
            animClass = "opacity-100 translate-x-0 translate-y-0 pointer-events-auto";
          } else if (state === "hiddenLeft") {
            animClass = "opacity-0 -translate-x-20 translate-y-8 pointer-events-none";
          } else if (state === "hiddenRight") {
            animClass = "opacity-0 translate-x-20 translate-y-8 pointer-events-none";
          }
          const hoverClass =
            state === "visible"
              ? "group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_#000] cursor-pointer"
              : "";
          // Offset alignment for desktop
          const justifyClass = i % 2 === 0 ? "md:justify-start" : "md:justify-end";
          // Curved connector SVG between cards (not after last)
          function CurvedConnector({ visible, left }) {
            // left: true = down-right, false = down-left
            return (
              <svg
                width="140"
                height="90"
                viewBox="0 0 140 90"
                fill="none"
                className={`pointer-events-none absolute left-1/2 -translate-x-1/2" style={{ bottom: "-48px", opacity: visible ? 1 : 0, transition: "opacity 300ms" }}`}
                style={{ bottom: "-48px", opacity: visible ? 1 : 0, transition: "opacity 300ms" }}
              >
                <path
                  d={left
                    ? "M20 20 Q70 80 130 70"
                    : "M120 20 Q70 80 10 70"
                  }
                  stroke="#111"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrowhead (point DOWN into the next step) */}
                {left ? (
                  <>
                    {/* end point is near (130,70) */}
                    <path d="M124 64 L130 72" stroke="#111" strokeWidth="3" strokeLinecap="round" />
                    <path d="M136 64 L130 72" stroke="#111" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    {/* end point is near (10,70) */}
                    <path d="M4 64 L10 72" stroke="#111" strokeWidth="3" strokeLinecap="round" />
                    <path d="M16 64 L10 72" stroke="#111" strokeWidth="3" strokeLinecap="round" />
                  </>
                )}
              </svg>
            );
          }
          return (
            <li
              key={step.pill}
              ref={ref}
              className={`group relative flex flex-col md:flex-row items-center will-change-transform transform-gpu ${transition} ${animClass} ${justifyClass}`}
            >
              <div
                className={`relative border-[3px] border-black rounded-3xl shadow-[3px_3px_0px_#000] flex flex-col md:flex-row items-center w-full md:w-[92%] px-6 md:px-12 py-10 md:py-12 ${hoverClass}`}
                style={{
                  minHeight: "220px",
                  maxWidth: "100%",
                  background: orange,
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
              >
                <span
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border-[3px] border-black font-bold text-base shadow-[3px_3px_0px_#000]`}
                  style={{
                    zIndex: 2,
                    background: navy,
                    color: "#fff",
                  }}
                >
                  {step.pill}
                </span>
                <div className={`flex-1 flex flex-col md:items-start md:pl-8 items-center text-center md:text-left`}>
                  <p className="text-lg md:text-xl text-[#232B38] font-semibold">{step.text}</p>
                </div>
                <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
              {/* Curved connector between cards (not after last) */}
              {i < steps.length - 1 && (
                <CurvedConnector visible={state === "visible"} left={i % 2 === 0} />
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
