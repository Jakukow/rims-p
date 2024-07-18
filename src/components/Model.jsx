import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { sizes } from "../constants";

const Model = () => {
  const [rim, setRim] = useState("f40");

  const cameraControlF40 = useRef();

  const f40 = useRef(new THREE.Group());

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0 });
  }, []);
  return (
    <section id="model" className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-full h-[65vh] md:h-[80vh] overflow-hidden relative">
            <ModelView groupRef={f40} controlRef={cameraControlF40} rim={rim} />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full -translate-y-20">
            <p className="text-xl font-light text-center mb-5">
              Check others wheels
            </p>
            <div className="flex-center">
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: rim === value ? "white" : "transparent",
                      color: rim === value ? "black" : "white",
                    }}
                    onClick={() => setRim(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
