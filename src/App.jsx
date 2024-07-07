import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { productContext, productContextProvider } from './utils/productContext'

import HomePage from "./components/pages/homePage/HomePage"
import Header from "./components/header/Header"
import About from "./components/pages/about/About"
import Pagenotfound from './components/pages/pageNotFound/Pagenotfound'
import Singleproductview from './components/singleproduct/Singleproductview'
import ProductCategory from './components/popularproductpage/ProductCategory'
import DiffCategoryPage from './components/pages/CategoryPage/DiffCategoryPage'
import Footer from './components/footer/Footer'
import Contact from './components/pages/contact/Contact'
import Cart from './components/cart/Cart'
import data from '../serverData/data.json'
import { Navprovider } from './utils/context/navContext'
import Login from './components/loginpage/Login'
import { LoginProvider } from './utils/context/loginContext'

function App() {

  const [category, setCategory] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [navToggle, setNavToggle] = useState(false);

  const [login, setLogin] = useState(false);

  const [loginUsername, setLoginUsername] = useState("");

  useEffect(() => {
    setProductsData(data.productsData)
    console.log(login);
  }, [login])

  return (
    <>
      <productContext.Provider value={{ category, setCategory, productsData }}>
        <Navprovider value={{ navToggle, setNavToggle }}>
          <LoginProvider value={{ loginUsername, setLoginUsername }}>

            <BrowserRouter>
              {login && <Login login={login} setLogin={setLogin} />}
              <Header login={login} setLogin={setLogin} />
              <Routes>
                <Route path='/' element={<HomePage />} login={login} setLogin={setLogin} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='product/:slug' element={<Singleproductview />} />
                <Route path='product-categories' element={<ProductCategory />} />
                <Route path='browse-categories' element={<DiffCategoryPage />} />
                <Route path='cart' element={<Cart />} />
                <Route path='user-login' element={<Login />} />
                <Route path='*' element={<Pagenotfound />} />
              </Routes>
              <Footer />
            </BrowserRouter>

          </LoginProvider>
        </Navprovider>
      </productContext.Provider>
    </>
  )
}

export default App
