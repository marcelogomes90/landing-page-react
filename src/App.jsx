import './App.css'
import About from './components/about'
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
      </div>
    </div>
  )
}

export default App
