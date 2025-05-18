import React from 'react'

export const WorldTerrain: React.FC = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[100, 100]} />
    <meshStandardMaterial color="green" />
  </mesh>
)
