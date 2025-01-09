import { Banners } from '@/components/banners'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Wrapper } from '@/ui'

import styles from './layout.module.scss'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Wrapper className={styles.root}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Outlet />
            </div>
            <Banners />
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}

export default Layout
