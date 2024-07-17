import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          F40 Rim Replica
        </p>
        <div className="md:w-10/12 w-9/12"></div>
        <video>
          <source src="" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
