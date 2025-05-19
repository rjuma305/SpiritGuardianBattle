import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { PlayerCharacter } from './game/3d/PlayerCharacter'
import { WorldTerrain } from './game/3d/WorldTerrain'
import { WorldMap } from './game/components/WorldMap'
import { TitleScreen } from './game/components/TitleScreen'

const GameView: React.FC = () => (
  <>
    <Canvas shadows>
      <ambientLight />
      <PlayerCharacter />
      <WorldTerrain />
    </Canvas>
    <WorldMap />
  </>
)

const App: React.FC = () => {
  const [started, setStarted] = React.useState(false)
  return started ? <GameView /> : <TitleScreen onStart={() => setStarted(true)} />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
