import './App.css'
import Features from './components/features'
import Header from './components/header'
import Intro from './components/intro'

function App() {
  
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Intro />
        <Features />
      </div>
    </div>
  )
}

export default App
