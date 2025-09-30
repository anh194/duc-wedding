type ScreenProps = {
  onNext: () => void
  onBack: () => void
}

export default function Screen1({ onNext, onBack }: ScreenProps) {
  return (
    <div style={styles.page}>
      <div style={styles.background} />
      <button onClick={onBack} style={styles.back} aria-label="Back">⟵</button>
      <img
        src="/address.png"
        alt="Address"
        style={styles.address}
        className="screen1-address"
      />
      <img
        onClick={onNext}
        src="/white_button.png"
        alt="Next"
        style={styles.next}
        className="next-button-image screen-next"
      />
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
  // background: {
  //   position: 'absolute',
  //   inset: 0,
  //   backgroundImage: 'url(/background_1.png)',
  //   backgroundSize: ,
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // },
  background: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(/background_1.png)',
    backgroundSize: 'contain',   // fit by height
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  },
  next: {
    position: 'fixed',
    right: '4vw',
    bottom: '4vh',
    width: '16vw',
    maxWidth: 120,
    minWidth: 64,
    aspectRatio: '1 / 1',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  address: {
    position: 'absolute',
    left: '45%',
    transform: 'translateX(-50%)',
    bottom: '-4%',
    width: '60%',
    maxWidth: 720,
    minWidth: 240,
    objectFit: 'contain',
    pointerEvents: 'none',
    zIndex: 10,
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


