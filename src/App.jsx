import { useState } from 'react'
import HeroImage from './components/HeroImage'
import HeroVideo from './components/HeroVideo'
import Header from './components/Header'
import Biography from './components/Biography'
import Dates from './components/Dates'
import Music from './components/Music'
import Galery from './components/Galery'
function App() {

  const [muted, setMuted] = useState('muted')

  const mutedVideo = ()=> {
    if(muted === ''){
      setMuted('muted')
    }else{
      setMuted('')
    }
  }

  console.log(window.screen)

  return (
    <div>
      <Header mutedVideo={mutedVideo} muted={muted} />
      {
        window.screen.width > 480 ? <HeroImage /> : <HeroVideo muted={muted} />
      }
      <Biography/>
      <Dates/>
      <Music/>
      <Galery/>
    </div>
  )
}

export default App
