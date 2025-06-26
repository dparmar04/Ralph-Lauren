import Golf from './components/Golf.jsx'
import Hero from './components/Hero'
import LuxurySection from './components/LuxurySection.jsx'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Sophisticated from './components/Sophisticated.jsx'

function App() {

  return (
    <div className='overflow-hidden '>
      <Navbar />
      <Hero />
      <Showcase />
      <Sophisticated />
      <Golf />
      <LuxurySection />
    </div>
  )
}

export default App
