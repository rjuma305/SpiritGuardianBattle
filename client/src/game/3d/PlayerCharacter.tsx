import React from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const PLAYER_SPEED = 0.1

export const PlayerCharacter: React.FC = () => {
  const meshRef = React.useRef<Mesh>(null)

  useFrame(() => {
    const mesh = meshRef.current
    if (!mesh) return
    // TODO: Replace with real input handling
    mesh.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
