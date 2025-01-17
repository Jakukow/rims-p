import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";

const smallHeroVideo = "/src/assets/HeroSmall.mp4";
const heroVideo = "/src/assets/HeroLarge.mp4";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 3 });
  }, []);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    document
      .querySelector(e.currentTarget.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          F40 RIM REPLICA
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#model" className="btn" onClick={handleSmoothScroll}>
          Check 3D Model
        </a>
        <p className="font-normal text-xl">From 250$ per wheel</p>
      </div>
    </section>
  );
};

export default Hero;
