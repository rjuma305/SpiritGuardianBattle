import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { PlayerCharacter } from './game/3d/PlayerCharacter'
import { WorldTerrain } from './game/3d/WorldTerrain'
import { WorldMap } from './game/components/WorldMap'

const App: React.FC = () => (
  <>
    <Canvas shadows>
      <ambientLight />
      <PlayerCharacter />
      <WorldTerrain />
    </Canvas>
    <WorldMap />
  </>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
