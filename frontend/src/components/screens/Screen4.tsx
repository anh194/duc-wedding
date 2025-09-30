type ScreenProps = {
  onNext: () => void
  onBack: () => void
}

export default function Screen4({ onNext, onBack }: ScreenProps) {
  void onNext
  return (
    <div style={styles.page}>
      <div style={styles.background} />
      <button onClick={onBack} style={styles.back} aria-label="Back" className="screen-back">⟵</button>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    // position: 'relative',
    width: '100vw',
    height: '100svh',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(/background_4.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  back: {
    position: 'fixed',
    right: '4vw',
    top: '4vh',
    width: '12vw',
    maxWidth: 96,
    minWidth: 48,
    aspectRatio: '1 / 1',
    borderRadius: 9999,
    border: 'none',
    color: 'white',
    background: 'rgba(0,0,0,0.35)',
    cursor: 'pointer',
  },
}


