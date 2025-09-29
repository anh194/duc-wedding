import { useState } from 'react'

type ScreenProps = {
  onNext: () => void
  onBack: () => void
}

export default function Screen3({ onNext, onBack }: ScreenProps) {
  const [selection, setSelection] = useState<'single' | 'couple' | null>(null)
  const [afterParty, setAfterParty] = useState<'after_party' | 'home_stay' | 'both' | null>(null)
  const [name, setName] = useState('')

  return (
    <div style={styles.page}>
      <div style={styles.background} />
      <button onClick={onBack} style={styles.back} aria-label="Back">⟵</button>
      <div style={styles.nameRow}>
        <span style={styles.nameLabelText}>Enter Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.nameInput as React.CSSProperties}
          aria-label="Guest name"
        />
      </div>
      <div style={styles.rowOne}>
        <button
          onClick={() => setSelection('single')}
          style={{
            ...styles.choiceButton,
            ...(selection === 'single' ? styles.choiceActive : undefined),
          }}
          aria-label="Select single"
        >
          <img src="/single.png" alt="Single" style={styles.choiceImage} />
        </button>

        {/* <img src="/slash.png" alt="/" style={styles.slash} /> */}

        <button
          onClick={() => setSelection('couple')}
          style={{
            ...styles.choiceButton,
            ...(selection === 'couple' ? styles.choiceActive : undefined),
          }}
          aria-label="Select couple"
        >
          <img src="/couple.png" alt="Couple" style={styles.choiceImage} />
        </button>
      </div>
      <div style={styles.rowTwo}>
        <button
          onClick={() => setAfterParty('after_party')}
          style={{
            ...styles.choiceButtonSmall,
            ...(afterParty === 'after_party' ? styles.choiceActiveSmall : undefined),
          }}
          aria-label="Select after party"
        >
          <img src="/after_party.png" alt="After party" style={styles.choiceImage} />
        </button>

        <button
          onClick={() => setAfterParty('home_stay')}
          style={{
            ...styles.choiceButtonSmall,
            ...(afterParty === 'home_stay' ? styles.choiceActiveSmall : undefined),
          }}
          aria-label="Select home stay"
        >
          <img src="/home_stay.png" alt="Home stay" style={styles.choiceImage} />
        </button>

        <button
          onClick={() => setAfterParty('both')}
          style={{
            ...styles.choiceButtonSmall,
            ...(afterParty === 'both' ? styles.choiceActiveSmall : undefined),
          }}
          aria-label="Select both"
        >
          <img src="/both.png" alt="Both" style={styles.choiceImage} />
        </button>
      </div>
      <img
        onClick={onNext}
        src="/white_button.png"
        alt="Next"
        style={styles.next}
        className="next-button-image"
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
  background: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(/background_3.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  nameRow: {
    position: 'absolute',
    left: '50.5%',
    transform: 'translateX(-50%)',
    bottom: '85vh',
    width: '44vw',
    maxWidth: 960,
    display: 'flex',
    alignItems: 'center',
    gap: '2vw',
    zIndex: 20,
  },
  nameLabelText: {
    color: '#FFD700',
    fontSize: 'clamp(18px, 3.2vw, 28px)',
    fontWeight: 700,
    whiteSpace: 'nowrap',
  },
  nameInput: {
    flex: 1,
    height: '6vh',
    minHeight: 36,
    background: 'transparent',
    border: 'none',
    borderBottom: '0.6vh solid #FFD700',
    borderRadius: 0,
    padding: '0 1rem 0.5rem 1rem',
    color: '#FFFFFF',
    fontSize: 'clamp(14px, 2.6vw, 22px)',
    outline: 'none',
    boxSizing: 'border-box',
  },
  rowOne: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '42vh',
    width: '90vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3vw',
  },
  rowTwo: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '15vh',
    width: '90vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3vw',
  },
  choiceButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24vw',
    maxWidth: 280,
    minWidth: 120,
    aspectRatio: '3 / 2',
    borderRadius: 9999,
    background: 'transparent',
    border: '0.9vw solid transparent',
    cursor: 'pointer',
    padding: 0,
    outline: 'none',
    boxShadow: 'none',
    transition: 'transform 160ms ease, border-color 160ms ease',
  },
  choiceButtonSmall: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18vw',
    maxWidth: 200,
    minWidth: 100,
    aspectRatio: '3 / 2',
    borderRadius: 9999,
    background: 'transparent',
    border: '0.6vw solid transparent',
    cursor: 'pointer',
    padding: 0,
    outline: 'none',
    boxShadow: 'none',
    transition: 'transform 160ms ease, border-color 160ms ease',
  },
  choiceActive: {
    borderColor: '#FFD700',
  },
  choiceActiveSmall: {
    borderColor: '#FFD700',
  },
  choiceImage: {
    width: '80%',
    height: '80%',
    objectFit: 'contain',
    pointerEvents: 'none',
  },
  slash: {
    height: '10vh',
    width: 'auto',
    objectFit: 'contain',
    pointerEvents: 'none',
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


