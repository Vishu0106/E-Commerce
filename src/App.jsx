import { Routes , Route } from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import ProductDiscription from "./pages/ProductDiscription"
function App() {

  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/description" element={<ProductDiscription />}></Route>
      <Route path='*' element={<NotFound />}/>
      
   </Routes>
  )
}

export default App
