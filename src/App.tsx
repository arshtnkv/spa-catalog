import { Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { CartPage, HomePage, ProductPage } from '@/pages'
import { Layout } from '@/components'

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App
