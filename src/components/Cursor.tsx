import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(hover: none)').matches) return
    const dot = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let isOnDark = false
    let isOnLink = false

    const getDotColor = () => isOnDark ? '#F5F4F0' : '#1a1a1a'
    const getFollowerColor = () => isOnDark ? 'rgba(245,244,240,0.5)' : 'rgba(26,26,26,0.4)'

    const updateColors = () => {
      if (isOnLink) return // link state takes priority
      dot.style.background = getDotColor()
      follower.style.borderColor = getFollowerColor()
    }

    const checkDarkBackground = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y)
      if (!el) return
      // Walk up the DOM to find a dark section
      let node: Element | null = el
      while (node) {
        const bg = window.getComputedStyle(node).backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          // parse rgb values
          const match = bg.match(/\d+/g)
          if (match) {
            const [r, g, b] = match.map(Number)
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
            const newDark = luminance < 0.35
            if (newDark !== isOnDark) {
              isOnDark = newDark
              updateColors()
            }
          }
          break
        }
        node = node.parentElement
      }
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
      checkDarkBackground(mouseX, mouseY)
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = `${followerX}px`
      follower.style.top = `${followerY}px`
      requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      isOnLink = true
      dot.style.transform = 'translate(-50%, -50%) scale(2.5)'
      dot.style.background = 'transparent'
      follower.style.width = '60px'
      follower.style.height = '60px'
      follower.style.borderColor = isOnDark ? '#F5F4F0' : '#1a1a1a'
    }

    const onLeaveLink = () => {
      isOnLink = false
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
      dot.style.background = getDotColor()
      follower.style.width = '36px'
      follower.style.height = '36px'
      follower.style.borderColor = getFollowerColor()
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    const raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  )
}
