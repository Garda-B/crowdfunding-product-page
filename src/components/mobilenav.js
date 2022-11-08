import hamburger from '../images/icon-hamburger.svg'
import closed from '../images/icon-close-menu.svg'
import { useEffect, useState } from 'react'

function Mobilenav(props) {

   const [toggle, setToggle] = useState(true)


   const handleClick = () => {
      setToggle(!toggle)
   }


   useEffect(() => {
      if (toggle === false) {
      document.getElementsByClassName('mobile')[0].classList.add('opaque')
      document.getElementsByClassName('main')[0].classList.add('opaque')
   } else
      {

         document.getElementsByClassName('mobile')[0].classList.remove('opaque')
         document.getElementsByClassName('main')[0].classList.remove('opaque')
      }
   
   }
   , [toggle])

   return (

      <>
         <nav  >
            <div className="mobile">
               <div><img alt="logo" src={props.logo}></img></div>
               <div onClick={handleClick}>{toggle === true ? <img alt="menu" src={hamburger}></img> : <img alt="closed" src={closed}></img>}</div>
            </div>
        {
         toggle === false ? (
         <div className='mobilemenu'>
         <ul>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
         </ul>
      </div>) : null
        } 

         </nav>

      </>
   )



}


export default Mobilenav;