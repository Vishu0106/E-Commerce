import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home";
import ProductList from "../components/ProductList";
function HomeLayout() {
    return (
        <div>
            <Header />
            <Home />
            <ProductList />
            <Footer />
        </div>
    )
}

export default HomeLayout;