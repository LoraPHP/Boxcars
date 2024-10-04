import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Featured from './components/Featured/Featured'
import Explore from './components/Explore/Explore'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Banner />
        <Explore />
        <Featured />
        <GeneralInfo />
        <Testimonials />
        <Footer />
      </div>
        
    </>
  )
}

export default App
