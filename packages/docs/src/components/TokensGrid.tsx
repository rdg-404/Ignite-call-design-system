import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([index, value]) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}