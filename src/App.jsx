import './index.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Benefits from './components/Benefits'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-drylic-frost">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
      </main>
      <Footer />
    </div>
  )
}
