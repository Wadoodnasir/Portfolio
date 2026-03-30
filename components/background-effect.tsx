"use client"

import { useRef, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useBrowser } from "@/contexts/browser-context"
import ThreeWrapper from "./three-wrapper"

interface StarFieldProps {
  count?: number;
  depth?: number;
}

function StarField({ count = 5000, depth = 50 }: StarFieldProps) {
  const points = useRef<THREE.Points>(null)
  
  // Generate random stars
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 25
      positions[i3 + 1] = (Math.random() - 0.5) * 25
      positions[i3 + 2] = Math.random() * depth * -1
    }
    
    return positions
  }, [count, depth])
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })
  
  return (
    <group>
      <Points ref={points} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8a2be2"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
        />
      </Points>
    </group>
  )
}

function BackgroundContent() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <StarField />
    </>
  )
}

export default function BackgroundEffect() {
  const { isHydrated } = useBrowser()
  
  // Only render if client-side
  if (!isHydrated) return null
  
  return (
    <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
      <ThreeWrapper>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <BackgroundContent />
        </Canvas>
      </ThreeWrapper>
    </div>
  )
} 