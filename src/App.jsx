import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import SmallNavbar from "./Components/Header/SmallNavbar";
import Appointment from "./pages/Appointment/Appointment";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Faq from "./pages/Faq/Faq";
import Gallery from "./pages/Gallery/Gallery";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Team from "./pages/Team/Team";
import CheckOut from "./pages/CheckOut/CheckOut";
import Cart from "./pages/Cart/Cart";
import Setting from "./pages/Setting/Setting";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";


function App() {
  return (
      <div>
        <Navbar/>
        <SmallNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blogdetail" element={<BlogDetail/>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/servicedetail" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
