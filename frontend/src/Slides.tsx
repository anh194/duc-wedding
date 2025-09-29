import { useState, useMemo, useCallback } from 'react'
import NextButton from './components/NextButton'
import BackButton from './components/BackButton'

export default function Slides() {
  const [index, setIndex] = useState(1) // 1..4

  const backgroundUrl = useMemo(() => {
    switch (index) {
      case 1:
        return 'url(/background_1.png)'
      case 2:
        return 'url(/background_2.png)'
      case 3:
        return 'url(/background_3.png)'
      default:
        return 'url(/background_4.png)'
    }
  }, [index])

  const nextVariant = index === 1 ? 'white' : 'black'

  const goNext = useCallback(() => {
    setIndex((prev) => Math.min(4, prev + 1))
  }, [])

  const goBack = useCallback(() => {
    setIndex((prev) => Math.max(1, prev - 1))
  }, [])

  return (
    <div style={styles.page}>
      <div style={{ ...styles.background, backgroundImage: backgroundUrl }} />
      <BackButton onClick={goBack} />
      {index < 4 && <NextButton onClick={goNext} variant={nextVariant as 'white' | 'black'} />}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    position: 'relative',
    width: '100vw',
    height: '100svh',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}


