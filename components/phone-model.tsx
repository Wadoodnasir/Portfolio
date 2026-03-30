"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export default function PhoneModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Add subtle floating animation
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Phone body */}
      <mesh castShadow>
        <boxGeometry args={[0.8, 1.6, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Phone screen */}
      <mesh position={[0, 0, 0.051]}>
        <boxGeometry args={[0.7, 1.4, 0.01]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>

      {/* React Native Logo (simplified) */}
      <mesh position={[0, 0, 0.06]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.15, 0.2, 32]} />
        <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.5} />
      </mesh>

      {/* React Native Logo center */}
      <mesh position={[0, 0, 0.06]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.5} />
      </mesh>

      {/* Home button */}
      <mesh position={[0, -0.7, 0.051]}>
        <circleGeometry args={[0.08, 32]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Camera */}
      <mesh position={[0, 0.7, 0.051]}>
        <circleGeometry args={[0.03, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Speaker */}
      <mesh position={[0, 0.6, 0.051]}>
        <boxGeometry args={[0.15, 0.02, 0.01]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  )
}
