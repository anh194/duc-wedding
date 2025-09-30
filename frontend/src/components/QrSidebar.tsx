import { useEffect, useRef, useState } from 'react'

export default function QrSidebar() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const src = open ? '/QR_code.png' : '/QR_button.png'

  return (
    <div ref={containerRef} style={styles.container} className="qr-sidebar">
      <img
        src={src}
        alt={open ? 'QR code' : 'Open QR'}
        style={styles.image}
        className="qr-sidebar-image"
        onClick={() => setOpen((v) => !v)}
      />
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    paddingRight: '1vw',
    zIndex: 200,
  },
  image: {
    width: '18vw',
    maxWidth: 160,
    minWidth: 72,
    height: 'auto',
    cursor: 'pointer',
    transition: 'transform 160ms ease',
  },
}


