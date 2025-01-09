import { Link, useLocation } from 'react-router-dom'

import styles from './breadcrumbs.module.scss'

const breadcrumbNameMap: Record<string, string> = {
  product: 'Товар',
  cart: 'Корзина',
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (location.pathname === '/') {
    return null
  }

  return (
    <nav className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link className="link link--underline" to="/">
            Каталог
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const displayName =
            breadcrumbNameMap[value] || decodeURIComponent(value)

          if (
            value === 'product' ||
            (index > 0 && pathnames[0] === 'product')
          ) {
            return (
              <li key={value}>
                <span>{displayName}</span>
              </li>
            )
          }

          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          return (
            <li key={to}>
              <Link to={to}>{displayName}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
