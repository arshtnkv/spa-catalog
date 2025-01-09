export const shrinkHeader = (
  headerElement: HTMLElement,
  logoElement: HTMLElement,
  cartWidgetElement: HTMLElement,
  productsCountElement: HTMLElement
) => {
  const DISTANCE_FROM_TOP = 140
  const scrollY = document.body.scrollTop || document.documentElement.scrollTop

  if (scrollY > DISTANCE_FROM_TOP) {
    headerElement.style.transition = 'height 200ms ease-in'
    headerElement.style.height = '80px'
    logoElement.style.transition = 'height 200ms ease-in'
    logoElement.style.height = '5rem'
    cartWidgetElement.style.transition = 'height 200ms ease-in'
    cartWidgetElement.style.height = '3rem'
    productsCountElement.style.transition = 'font-size 200ms ease-in'
    productsCountElement.style.fontSize = '1.5em'
  } else {
    headerElement.style.height = '150px'
    logoElement.style.height = '6rem'
    cartWidgetElement.style.height = '5rem'
    productsCountElement.style.fontSize = '2em'
  }
}
