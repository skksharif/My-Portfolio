import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ isDarkMode }) => {
  const meshRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  // Create particle system
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        scale: Math.random() * 0.5 + 0.1,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Mouse interaction
      const { mouse } = state;
      meshRef.current.position.x = mouse.x * 0.5;
      meshRef.current.position.y = mouse.y * 0.5;
    }
  });

  return (
    <group>
      {/* Main floating orb */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[0, 0.5]}
      >
        <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color={isDarkMode ? "#8b5cf6" : "#3b82f6"}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive={isDarkMode ? "#4c1d95" : "#1e40af"}
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* Particle system */}
      {particles.map((particle, index) => (
        <Float
          key={index}
          speed={1 + Math.random()}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.5, 0.5]}
        >
          <Sphere
            args={[0.02, 8, 8]}
            position={particle.position}
            scale={particle.scale}
          >
            <meshBasicMaterial
              color={isDarkMode ? "#a855f7" : "#60a5fa"}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>
      ))}

      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight
        position={[10, 10, 10]}
        intensity={1}
        color={isDarkMode ? "#8b5cf6" : "#3b82f6"}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        color={isDarkMode ? "#ec4899" : "#f59e0b"}
      />
    </group>
  );
};

const FloatingOrb = ({ isDarkMode }) => {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <AnimatedSphere isDarkMode={isDarkMode} />
      </Canvas>
      
      {/* Gradient overlay for better integration */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isDarkMode 
            ? 'bg-gradient-radial from-transparent via-transparent to-gray-900/20' 
            : 'bg-gradient-radial from-transparent via-transparent to-gray-50/20'
        }`}
      />
    </div>
  );
};

export default FloatingOrb;