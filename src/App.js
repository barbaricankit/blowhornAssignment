import './App.css'
import ProjectBlog from './blogs/ProjectBlogs'
import Features from './features/Features'
import Footer from './footer/Footer'
import Header from './header/Header'
import Home from './home/Home'
import TeamMembers from './team/TeamMembers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Features />
        <TeamMembers />
        <ProjectBlog />
      </header>
      <Footer />
    </div>
  )
}

export default App
