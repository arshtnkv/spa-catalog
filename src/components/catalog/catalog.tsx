import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/shared/store'
import { Product } from '@/components/product'
import { initializeCatalog } from './catalogSlice'
import { Loader } from '@/components/loader'
import styles from './catalog.module.scss'

const Catalog: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { products, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.catalog
  )

  useEffect(() => {
    dispatch(initializeCatalog())
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <ul className={styles.root}>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default Catalog
