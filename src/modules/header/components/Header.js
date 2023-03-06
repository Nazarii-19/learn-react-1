import { useEffect, useState } from 'react'
import HeaderMobile from './HeaderMobile/HeaderMobile'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const match = matchMedia('(max-width: 768px)')
    match.addEventListener('change', (event) => {
      setIsMobile(() => event.matches)
    })
    setIsMobile(() => match.matches)
  }, [])

  return isMobile ? <HeaderMobile/> : <HeaderDesktop/>
}

export default Header
