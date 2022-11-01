import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cat } from './Cat';
import { OrbitControls } from '@react-three/drei';

const Scene = () => {
  return (
    <Canvas
      style={{ width: '250px', alignSelf: 'center' }}
      camera={{ position: [5, 10, 10], zoom: 10 }}
    >
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Cat />
      </Suspense>
      <OrbitControls
        autoRotate
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 2.8}
      />
    </Canvas>
  );
};

export default Scene;
