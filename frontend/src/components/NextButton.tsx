type NextButtonProps = {
  variant: 'white' | 'black'
  onClick?: () => void
}

export default function NextButton({ variant, onClick }: NextButtonProps) {
  const imgSrc = variant === 'white' ? '/white_button.png' : '/black_button.png'

  return (
    <button onClick={onClick} style={styles.container as React.CSSProperties} aria-label="Next">
      <img src={imgSrc} alt="Next" style={styles.image} className="next-button-image" />
    </button>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    right: '4vw',
    bottom: '4vh',
    display: 'inline-block',
    width: '16vw',
    maxWidth: 120,
    minWidth: 64,
    aspectRatio: '1 / 1',
    background: 'transparent',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 160ms ease',
  },
}


