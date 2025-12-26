'use client';

import Link from "next/link";
import { useRef } from "react";
import CtaButton from "../ButtonCTA/CtaButton";
import DividerIcon from "../DividerIcon";
import LogoSliderBlock from "../LogoSlider/LogoSliderBlock";

export default function HeroSection({ padding = "pt-80" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section>
      <div className={`${padding} -mt-60 pb-20 sm:pb-32 md:pb-40 bg-gray-100`}>
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
            {/* LEFT */}
            <div className="order-1">
              <h2 className="text-[40px] sm:text-[55px] md:text-[45px] lg:text-[60px] xl:text-[76px] text-black font-bold leading-tight sm:leading-12.75 md:leading-11.25 lg:leading-15 xl:leading-19">
                Get Published, <br /> Seen & Heard.
              </h2>

              <DividerIcon className="w-full h-4 text-black mt-4" />

              <div className="mt-4">
                <p className="font-semibold text-[16px] sm:text-[18px] md:text-[14px] lg:text-[16px] xl:text-[19px] leading-relaxed text-gray-900/90">
                  Go beyond writing and become a published author with a global audience. With hassle-free publishing,
                  personalized guidance, and a dedicated literary agent by your side, turning your manuscript into a
                  professionally published book is now easier than ever. We handle the complexity so you can focus on
                  telling your story with confidence.
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-2">
                <CtaButton className="bg-[#1f2a44] text-white hover:text-white hover:bg-[#EB6358]" />
                <CtaButton
                  content="Connect with Agent"
                  className="bg-[#EB6358] text-white hover:text-white hover:bg-[#1f2a44]"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="order-2 md:ml-0 lg:ml-14">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="
                  relative w-full
                  h-[320px] sm:h-[380px] md:h-[430px] lg:h-[500px]
                  rounded-2xl
                  overflow-visible
                  bg-transparent
                  transition-all duration-300 ease-out
                  group
                  cursor-pointer
                  select-none
                "
                style={{
                  transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)",
                  willChange: "transform",
                }}
              >
                {/* Transparent container: NO background block, just a soft shadow behind the PNG */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none
                    blur-2xl
                    bg-black/10
                  "
                />

                {/* Image wrapper (no cropping) */}
                <div className="absolute inset-0 p-0 sm:p-0 md:p-0">
                  <img
                    src="/assets/images/Hero section image full.png"
                    alt="Featured book covers"
                    loading="lazy"
                    draggable={false}
                    className="
                      w-full h-full
                      object-contain
                      transition-transform duration-300 ease-out
                      group-hover:scale-[1.03]
                      drop-shadow-[0_18px_35px_rgba(0,0,0,0.22)]
                    "
                  />
                </div>

                {/* Subtle sheen across the PNG only */}
                <div
                  className="
                    absolute -inset-24
                    bg-gradient-to-r from-transparent via-white/35 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    rotate-12
                    pointer-events-none
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 -mt-16 sm:-mt-20 md:-mt-24">
        <LogoSliderBlock />
      </div>
    </section>
  );
}
