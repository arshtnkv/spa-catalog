import { useEffect } from 'react'
import { shrinkHeader } from '@/shared/utils/headerUtils'

const useHeaderShrink = () => {
  useEffect(() => {
    const headerElement = document.querySelector('header') as HTMLElement
    const logoElement = document.querySelectorAll('img')[0] as HTMLElement
    const cartWidgetElement = document.querySelectorAll('img')[1] as HTMLElement
    const productsCountElement = document.querySelector('span') as HTMLElement

    const handleScroll = () => {
      shrinkHeader(
        headerElement,
        logoElement,
        cartWidgetElement,
        productsCountElement
      )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useHeaderShrink
