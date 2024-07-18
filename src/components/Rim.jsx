import { useGLTF } from "@react-three/drei";

const Rim = ({ scale, rim }) => {
  const { nodes, materials } = useGLTF("/bbs.glb");
  return (
    <group scale={scale} dispose={null}>
      {rim === "bbs" ? (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert004.geometry}
          material={materials["Material.007"]}
          position={[0, 0.032, -0.001]}
          scale={0.016}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bolt033.geometry}
            material={materials["Material.007"]}
            position={[0, 1.847, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.046}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["Material.010"]}
            position={[0, 1.725, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={3.259}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials["Material.007"]}
            position={[0, 1.976, 0.028]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={0.863}
          />
          <group
            position={[0, 1.916, 0.028]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={2.808}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Nut001_1.geometry}
              material={materials["Material.007"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Nut001_2.geometry}
              material={materials["Material.009"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vert003.geometry}
            material={materials["Material.008"]}
            position={[0, 2.289, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      ) : (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001.geometry}
          material={materials["Material.011"]}
          position={[0, 0.062, -0.001]}
          scale={1.239}
        />
      )}
    </group>
  );
};
export default Rim;
useGLTF.preload("/bbs.glb");
