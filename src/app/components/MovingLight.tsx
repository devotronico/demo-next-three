import  { useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import { PointLight } from 'three';

// Componente per la luce in movimento
export function MovingLight  ()  {
  const lightRef = useRef<PointLight>(null);

  // Funzione che aggiorna la posizione della luce ad ogni frame
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const x = Math.cos(time) * 3; // Movimento lungo l'asse X (semiasse maggiore)
    const z = Math.sin(time) * 1; // Movimento lungo l'asse Z (semiasse minore)
    const y = 5; // Altezza fissa lungo Y
    
    // Aggiorna la posizione della luce
    lightRef.current?.position.set(x, y, z);
  });

  return (
    <pointLight 
      ref={lightRef} 
      color="red" 
      intensity={1} 
      distance={10} 
      decay={2} 
    />
  );
};

// Componente principale
// const Scene = () => {
//   return (
//     <Canvas>
//       {/* Aggiungiamo una luce ambientale per illuminare la scena */}
//       <ambientLight intensity={0.3} />
      
//       {/* La nostra luce mobile */}
//       <MovingLight />

//       {/* Un oggetto su cui la luce può riflettersi, ad esempio una sfera */}
//       <mesh>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color="white" />
//       </mesh>
//     </Canvas>
//   );
// };

// export default function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Scene />
//     </div>
//   );
// }
