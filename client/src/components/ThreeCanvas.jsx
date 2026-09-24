import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';

const FloatingShape = ({ position, color, shape }) => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh>
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
        {shape === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
        {shape === 'cone' && <coneGeometry args={[0.7, 1.5, 32]} />}
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
    </Float>
  );
};

const ThreeCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#6EC6FF" intensity={0.5} />
        
        <FloatingShape position={[-4, 2, -2]} color="#FFD93D" shape="box" />
        <FloatingShape position={[4, -1, -3]} color="#6EC6FF" shape="sphere" />
        <FloatingShape position={[-3, -2, -1]} color="#81E6A0" shape="torus" />
        <FloatingShape position={[3, 2, -2]} color="#FF8FA3" shape="cone" />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
