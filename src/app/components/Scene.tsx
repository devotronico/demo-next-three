import { OrbitControls } from '@react-three/drei';
import { Eyes } from './Eyes';
import { Line } from './Line';

export function Scene() {
  return (
    <>
      <OrbitControls />
      <directionalLight intensity={4.5} position={[3, 10, 7]} />
      <ambientLight intensity={1.5} />
      <axesHelper args={[3]} />
      <Eyes />
      <Line />
      <mesh rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[20, 10, 10, 10]} />
        <meshStandardMaterial color={'lightGray'}></meshStandardMaterial>
      </mesh>
    </>
  );
}
