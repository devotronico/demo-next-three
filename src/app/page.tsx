'use client';

import { Canvas } from '@react-three/fiber';
import { Scene } from '@/app/components/Scene';

export default function Home() {
  // const camera = {
  //   camera: {
  //     fov: 60,
  //     zoom: 1,
  //     near: 0.1,
  //     far: 200,
  //     position: [4, 4, 4],
  //   },
  // };

  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}
