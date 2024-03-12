import { useState } from 'react'

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const handleHoverOver = () => setIsHovered(true)
  const handleHoverLeave = () => setIsHovered(false)

  return { isHovered, handleHoverOver, handleHoverLeave }
}

export { useHover }
