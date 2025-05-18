import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export const NPC: React.FC<{ position: [number, number, number]; color?: string }> = ({ position, color = 'blue' }) => {
  const ref = React.useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
