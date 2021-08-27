import './App.css'
import Features from './features/Features'
import Header from './header/Header'
import Home from './home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Features />
      </header>
    </div>
  )
}

export default App
