
"use client";
import Image from 'next/image';

export default function GhostwritingHeroSection() {
  return (
    <section className="hero-bg-section px-2 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
                <style jsx global>{`
                  .hero-bg-section {
                    background: #e8f6f6;
                    position: relative;
                    z-index: 0;
                  }
                  body {
                    background: #e8f6f6 !important;
                  }
                `}</style>
        <h1 className="hero-heading text-4xl md:text-5xl font-extrabold text-[#1F2A44] mb-2" style={{letterSpacing: '-1px'}}>
          Ghostwriting Services
        </h1>
        <h2 className="hero-heading text-3xl md:text-4xl font-extrabold text-[#1F2A44] mb-4" style={{letterSpacing: '-1px'}}>
          Turning Your Ideas Into a Finished Book
        </h2>
                <style jsx>{`
                  .hero-heading {
                    transition: color 0.2s;
                    cursor: pointer;
                  }
                  .hero-heading:hover {
                    color: #EB6358;
                  }
                `}</style>
        <div className="w-full flex justify-center mb-1">
          <svg viewBox="0 0 600 18" width="60%" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
            <path d="M10 10 Q 150 18 300 14 Q 450 10 590 14 Q 595 14 595 14 Q 598 16 600 17" stroke="#232B38" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <p className="text-[#1F2A44] text-base md:text-lg font-medium max-w-3xl mx-auto mb-8" style={{lineHeight: '1.5'}}>
          Some stories begin as notes, memories, or unfinished drafts.<br/>
          Our ghostwriting team helps authors transform ideas, recordings, and rough concepts into complete manuscripts—written in your voice, with clarity and structure.<br/>
          From first conversation to final draft, we guide the entire process so your story is finished professionally and ready for the next step.
        </p>
        <div className="flex flex-row items-center justify-center gap-12 mt-12">
          <span className="ghostwriting-hero-img-wrapper ghostwriting-hero-img-pen">
            <Image src="/assets/images/pen-ghostwriting-hero.png" alt="Pen Ghostwriting" width={180} height={180} className="ghostwriting-hero-img" />
          </span>
          <div className="flex flex-col gap-4 items-center justify-center">
            <button className="bg-[#EB6358] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#1F2A44] hover:text-white w-[270px] whitespace-nowrap">
              Submit Your <span className="font-extrabold">Manuscript</span>
            </button>
            <button className="bg-[#1F2A44] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#EB6358] hover:text-white w-[270px] whitespace-nowrap">
              Connect with a <span className="font-extrabold">Literary Agent</span>
            </button>
          </div>
          <span className="ghostwriting-hero-img-wrapper ghostwriting-hero-img-book">
            <Image src="/assets/images/book-ghostwriting-hero.png" alt="Book Ghostwriting" width={270} height={270} className="ghostwriting-hero-img" />
          </span>
        </div>
        <style jsx>{`
          .ghostwriting-hero-img-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 1.5rem;
            padding: 0.5rem;
            transition: box-shadow 0.2s, border-color 0.2s;
          }
          .ghostwriting-hero-img-book {
            background: transparent !important;
          }
          .ghostwriting-hero-img {
            border: 4px solid #111;
            border-radius: 1.5rem;
            background: #f6f7f9;
            transition: border-color 0.2s, transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
            will-change: transform, border-color, box-shadow;
          }
          .ghostwriting-hero-img-pen:hover .ghostwriting-hero-img {
            border-color: #EB6358;
            transform: translateY(-12px) scale(1.07) rotate(-7deg);
            box-shadow: 0 8px 32px 0 rgba(235,99,88,0.10);
          }
          .ghostwriting-hero-img-book:hover .ghostwriting-hero-img {
            border-color: #EB6358;
            transform: translateY(-12px) scale(1.07) rotate(7deg);
            box-shadow: 0 8px 32px 0 rgba(235,99,88,0.10);
          }
          .ghostwriting-hero-img {
            /* ...existing code... */
            transition: border-color 0.2s, transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
          }
        `}</style>
      </div>
    </section>
  );
}
