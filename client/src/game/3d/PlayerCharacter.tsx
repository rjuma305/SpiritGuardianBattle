import React from 'react'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import { Mesh } from 'three'

const PLAYER_SPEED = 0.075 // Slightly bumped from main for smoother feel

export const PlayerCharacter: React.FC = () => {
  const meshRef = React.useRef<Mesh>(null)
  const [keys, setKeys] = React.useState({ left: false, right: false })
  const dragState = React.useRef({ dragging: false, lastX: 0 })

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
        setKeys(k => ({ ...k, left: true }))
      }
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
        setKeys(k => ({ ...k, right: true }))
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
        setKeys(k => ({ ...k, left: false }))
      }
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
        setKeys(k => ({ ...k, right: false }))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    dragState.current.dragging = true
    dragState.current.lastX = e.clientX
  }

  const endDrag = () => {
    dragState.current.dragging = false
  }

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!dragState.current.dragging) return
    const delta = e.clientX - dragState.current.lastX
    dragState.current.lastX = e.clientX
    const mesh = meshRef.current
    if (mesh) {
      mesh.rotation.y += delta * 0.01
    }
  }

  useFrame(() => {
    const mesh = meshRef.current
    if (!mesh) return

    if (keys.left) mesh.rotation.y += PLAYER_SPEED
    if (keys.right) mesh.rotation.y -= PLAYER_SPEED

    const pad = navigator.getGamepads ? navigator.getGamepads()[0] : undefined
    if (pad) {
      const axis = pad.axes[0] || 0
      mesh.rotation.y -= axis * PLAYER_SPEED
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[0, 0.5, 0]}
      onPointerDown={onPointerDown}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerMove={onPointerMove}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
