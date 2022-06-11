import './App.css'
import About from './components/about'
import Contato from './components/contato'
import Features from './components/features'
import Footer from './components/footer'
import Galeria from './components/gallery'
import Header from './components/header'
import Intro from './components/intro'
import Testimonials from './components/testimonials'

function App() {
  
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Intro />
        <Features />
        <About />
        <Galeria />
        <Testimonials />
        <Contato />
        <Footer />
      </div>
    </div>
  )
}

export default App
