import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";

import Lights from "./Lights";
import { Suspense } from "react";
import Loader from "./Loader";
import Rim from "./Rim";

const ModelView = ({ rim }) => {
  return (
    <View className={`w-full h-full absolute`}>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 3, 3]} />
      <Lights />
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />

      <group position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Rim scale={[12, 12, 12]} rim={rim} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
