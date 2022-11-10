import './App.scss'
import { Header, About, Footer, Work, Testimonial, Skills } from './container'
import { Navbar } from './component'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
