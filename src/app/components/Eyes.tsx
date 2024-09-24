import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Box } from './Box';

let demo = 0;
export function Eyes() {
  const groupRef = useRef<THREE.Group>(null);
  // Funzione che aggiorna ogni frame
  useFrame(() => {
    if (groupRef.current) {
      demo += 0.02;
      // Anima il gruppo spostandolo e ruotandolo
      //   groupRef.current.rotation.y += 1; // Rotazione sull'asse Y
      //   groupRef.current.position.x += 1; // Spostamento sull'asse X
      groupRef.current.position.x = Math.sin(demo) * 2; // Spostamento sull'asse X
    }
  });

  return (
    <group ref={groupRef} position={[0.5, 0.5, 0]}>
      <Box xDirection={-1} xPosistion={7} />
      <Box xDirection={1} xPosistion={3} />
    </group>
  );
}
