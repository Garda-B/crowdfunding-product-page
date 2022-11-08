import { useEffect } from "react";



function Desktopnav(props) {


    

    return (

        <>
        
       <nav className="desktop" >            
            <div><img src={props.logo}></img></div>
            <ul>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
       
       </nav>
      
    
       </>
    )


}


export default Desktopnav;