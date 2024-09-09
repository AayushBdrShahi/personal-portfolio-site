import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About'
import Service  from './Component/Service/Service';
import Mywork from './Component/Mywork/Mywork';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App;
