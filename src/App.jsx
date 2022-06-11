import './App.css'
import About from './components/about'
import Contato from './components/contato'
import Features from './components/features'
import Galeria from './components/gallery'
import Header from './components/header'
import Intro from './components/intro'

function App() {
  
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Intro />
        <Features />
        <About />
        <Galeria />
        <Contato />
      </div>
    </div>
  )
}

export default App
