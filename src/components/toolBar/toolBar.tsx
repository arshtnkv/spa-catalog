import Filter from '../filter/filter'
import { SearchBar } from '../searchBar'
import styles from './toolbar.module.scss'

const ToolBar: React.FC = () => {
  return (
    <div className={styles.root}>
      <Filter />
      <SearchBar />
    </div>
  )
}

export default ToolBar
