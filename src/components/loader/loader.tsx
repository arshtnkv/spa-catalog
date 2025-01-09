import styles from './loader.module.scss'

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <div className={styles.spinner}></div>
  </div>
)

export default Loader
