import React from 'react'
import { regions } from '../regions'
import { usePlayerLocation } from '../stores/usePlayerLocation'

export const WorldMap: React.FC = () => {
  const { regionId } = usePlayerLocation()
  const size = 60
  const cols = 3

  return (
    <div style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}>
      <svg width={cols * size} height={Math.ceil(regions.length / cols) * size}>
        {regions.map((region, index) => {
          const x = (index % cols) * size
          const y = Math.floor(index / cols) * size
          const isCurrent = regionId === region.id

          return (
            <g key={region.id}>
              <rect
                x={x + 2}
                y={y + 2}
                width={size - 4}
                height={size - 4}
                fill="#333"
                stroke="white"
              />
              <text
                x={x + size / 2}
                y={y + size - 10}
                textAnchor="middle"
                fill="white"
                fontSize="8"
              >
                {region.name}
              </text>
              {isCurrent && (
                <circle
                  cx={x + size / 2}
                  cy={y + size / 2}
                  r={6}
                  fill="red"
                />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
