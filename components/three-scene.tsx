"use client"

import { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Simple rotating cube
function Cube(props: any) {
  const mesh = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#ff9c6d' : '#3b82f6'} />
    </mesh>
  )
}

// Scene that renders without issues
export default function ThreeScene() {
  return (
    <div className="h-full w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
} 