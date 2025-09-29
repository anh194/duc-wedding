type BackButtonProps = {
  onClick?: () => void
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button onClick={onClick} style={styles.container as React.CSSProperties} className="back-button" aria-label="Back">
      <span style={styles.chevron}>⟵</span>
    </button>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    right: '4vw',
    top: '4vh',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12vw',
    maxWidth: 96,
    minWidth: 48,
    aspectRatio: '1 / 1',
    background: 'rgba(0,0,0,0.35)',
    color: 'white',
    borderRadius: 9999,
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 160ms ease',
  },
  chevron: {
    fontSize: '4vw',
    lineHeight: 1,
    userSelect: 'none',
  },
}


