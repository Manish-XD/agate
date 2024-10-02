import Allproducts from "./components/Allproducts";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import Foot from "./components/Foot";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollDown from "./components/ScrollDown";
import { useDisclosure } from '@chakra-ui/react';
import "./styles/app.css";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="app_container">
      <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <img src="/hero_part1.png" alt="blob" className="blob1" />
      <img src="/hero_part2.png" alt="blob" className="blob2" />
      <img src="/white_vector.png" alt="blob" className="blob3" />
      <div className="hero">
        <div className="hero__left">
          <h2>Welcome to</h2>
          <h1>Pop Rock Crystal Shop!</h1>
          <p>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
          <div>
            <Button title={"SHOP NOW"} ctn/>
            <a href="#">about us</a>
          </div>
        </div>
        <div className="hero__right">
          <Carousel/>
        </div>
      </div>
      <ScrollDown/>
      <Allproducts isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <Foot/>
      <Footer/>
    </div>
  );
}

export default App;
