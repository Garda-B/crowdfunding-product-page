import heroDesktop from './images/image-hero-desktop.jpg';
import heroMobile from './images/image-hero-mobile.jpg';
import './App.css';
import Desktopnav from './components/desktopnav';
import Mobilenav from './components/mobilenav';
import logo from './images/logo.svg'
import Main from './components/main';
import Window from './components/window';
import { useState } from 'react'
import Modalcomplete from './components/modalcomplete';


function App() {

  const [data, setData] = useState("")
  const [count, setCount] = useState(5007)

  const handleSubmit = (e, value) => {
    e.preventDefault()
    setData(+value)
    setCount(count + 1)
    
  }

  const darkBackground = (
    <div className='darkbackground'></div>
  )


  const displaynone = () => {
    document.getElementsByClassName('windownotvisible')[0].style.display = "none"

  }

  return (
    <div>
      <div className='wrapper'>
        <Desktopnav heroDesktopImage={heroDesktop} logo={logo}></Desktopnav>
        <Mobilenav heroMobileImage={heroMobile} logo={logo} />
        <Main data={data} count={count} />
        
      </div>
      <Window handleSubmit={handleSubmit} />
      {(data != "" || data != 0) && /[a-zA-Z]/.test(data) != true ? [<Modalcomplete />, displaynone()] : null}
      {darkBackground}
    </div>

  );
}

export default App;
