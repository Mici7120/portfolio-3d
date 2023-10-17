import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
    console.log(boxRef.current.rotation);
  })

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  );

}
export default Experience;