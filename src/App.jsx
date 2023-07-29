import { Container } from 'react-bootstrap'
import { CartProvider } from './context/CartContext'
import Navbar from "./components/Navbar/Navbar"
import AllRoutes from './config/AllRoutes'

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <AllRoutes />
      </Container>
    </CartProvider>
  )
}

export default App