import { Helmet } from 'react-helmet-async'
import { Catalog, ToolBar } from '@/components'
import { Heading } from '@/ui'

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная | Каталог</title>
      </Helmet>
      <section>
        <Heading tagName="h1">Каталог</Heading>
        <ToolBar />
        <Catalog />
      </section>
    </>
  )
}

export default HomePage
