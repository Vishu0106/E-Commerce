import { Routes , Route } from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import RequireAuth from "./components/Auth/RequireAuth"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"
import ProductDiscription from "./pages/ProductDiscription"
import CheckoutSuccess from "./pages/checkoutSuccess"
function App() {

  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/description" element={<ProductDiscription />}></Route>
      <Route path="/notfound" element={<NotFound />} />
      <Route element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/payment" element={<CheckoutSuccess/>}/>
      </Route>
      <Route path='*' element={<NotFound />}/>
      
   </Routes>
  )
}

export default App
