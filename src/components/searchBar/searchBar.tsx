import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/shared/store'
import { setSearchQuery } from '@/components/catalog/catalogSlice'
import styles from './searchbar.module.scss'
import { Input } from '@/ui'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector(
    (state: RootState) => state.catalog.searchQuery
  )

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    dispatch(setSearchQuery(query))
  }

  return (
    <div className={styles.root}>
      <Input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchBar
