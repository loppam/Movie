import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'

function App() {

  return (
    <div className="app">
      <Navbar />
    <div className="content">
      <Hero />
    </div>
    </div>
  )
}

export default App
