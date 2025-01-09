import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/shared/store'
import { Loader } from '@/components/loader'
import { Heading } from '@/ui'
import { initializeBanners } from './bannersSlice'
import styles from './banners.module.scss'

const Banners: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { items, loading, error } = useSelector(
    (state: RootState) => state.banners
  )

  useEffect(() => {
    dispatch(initializeBanners())
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <aside className={styles.root}>
      <div className={styles.wrapper}>
        <Heading tagName="h2" size="xs">
          Реклама
        </Heading>
        <ul>
          {items.map((banner) => (
            <li key={banner.id}>
              <a
                className={styles.banner}
                href={banner.link}
                target="_blank"
                rel="noopener noreferrer"
                title={banner.name}
              >
                <img src={banner.image} alt={banner.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Banners
