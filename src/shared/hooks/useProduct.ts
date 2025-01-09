import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const useProduct = () => {
  const { id } = useParams<{ id: string }>()
  const product = useSelector((state: RootState) =>
    state.catalog.products.find((product) => product.id === Number(id))
  )

  return product
}

export default useProduct
