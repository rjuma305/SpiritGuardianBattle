import React from 'react'

export const TitleScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1>Spirit Guardian Battle</h1>
    <button onClick={onStart} style={{ padding: '8px 16px', fontSize: '1rem' }}>
      Start Game
    </button>
  </div>
)
