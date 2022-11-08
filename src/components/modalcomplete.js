import check from '../images/icon-check.svg'



function Modalcomplete() {

    const handleClick = () => {

            document.getElementsByClassName('modalcomplete')[0].style.display = "none"
            document.getElementsByClassName('wrapper')[0].style.filter = "brightness(100%)"
            document.getElementsByClassName('darkbackground')[0].style.display = "none"
           


    }

    return (

        <div className="modalcomplete">
            <img alt="check" src={check}></img>
            <h2>Thank you for your support!</h2>
            <p>  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>
            <button onClick={handleClick} className='button'>Got it!</button>

        </div>
    )
}


export default Modalcomplete;