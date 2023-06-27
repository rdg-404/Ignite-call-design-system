import { colors } from '@ignite-ui/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([index, color]) => {
    return (
      <div key={index} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: '#fff',
          }}
        >
          <strong>${index}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
