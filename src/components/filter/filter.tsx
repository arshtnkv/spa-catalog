import React from 'react'
import { useDispatch } from 'react-redux'
import { setCatalog } from '@/components/catalog/catalogSlice'
import services from '@/shared/services/productsService'
import { Select } from '@/ui/select'

import styles from './filter.module.scss'

const categories = ['Все', 'Электроника', 'Одежда']

const Filter: React.FC = () => {
  const dispatch = useDispatch()

  const handleFilterChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value
    try {
      const products = await services.getAllProducts()
      const filteredProducts =
        category === 'Все'
          ? products
          : products.filter(
              (product: { category: string }) => product.category === category
            )

      dispatch(setCatalog(filteredProducts))
    } catch (error) {
      console.error('Ошибка фильтрации:', error)
    }
  }

  return (
    <div className={styles.root}>
      <Select onChange={handleFilterChange} defaultValue="Все">
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default Filter
