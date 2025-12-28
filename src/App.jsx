import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import DeliveryPayment from "./components/DeliveryPayment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <Products />
      <WhyChooseUs />
      <DeliveryPayment />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
