import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection'
import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
    <HeroSection/>
    <About/>
    <Articles/>
    <Footer/>
    </ChakraProvider>
    </div>
  );
}

export default App;
