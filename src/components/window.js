import closed from '../images/icon-close-modal.svg'
import { useEffect, useState } from 'react'

function Window({ handleSubmit }) {


    const [pledge, setPledge] = useState([false, false, false])
    const [value, setValue] = useState("")


    const handleChange = (i) => {

        
        const temp = [...pledge]
        const tempnew = temp.map((x) => x = false)
        tempnew[i] = true

        setPledge(tempnew)


    }

    useEffect(() => {

        if (pledge.some((x) => x === true)) {
            
            const indextrue = pledge.indexOf(true)
            document.getElementsByClassName('windowedition')[indextrue].classList.add('selected')

            const falses = pledge.map((x, i) => { if (x === false) { return i } }).filter((x) => x !== undefined)

            document.getElementsByClassName('windowedition')[falses[0]].classList.remove('selected')
            document.getElementsByClassName('windowedition')[falses[1]].classList.remove('selected')


        }

    }, [pledge])



    const radio = (
        pledge.map((item, i) =>
            <div className='parent'><input className="radioinput" type="radio" name='radio' onChange={() => handleChange(i)} value={item}></input>
            {pledge[i] && <div className='circle'></div>}
            </div>)

    )




    const handleClick = () => {

        const window = document.getElementsByClassName('windownotvisible')[0]
        window.style.display = "none"

        const wrapper = document.getElementsByClassName('wrapper')[0]

        wrapper.style.filter = "brightness(100%)"

        document.getElementsByClassName('darkbackground')[0].style.display = "none"

    }






    return (
        <>
            <section className='windownotvisible'>

                <div className='flex'>
                    <h2> Back this project</h2>
                    <img alt="close" src={closed} onClick={handleClick}></img>
                </div>

                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>


                <div className='windowedition'>
                    <div className='flex'>
                        {radio[0]                   
                        }
                        


                        <div>
                            <p className='editiontype'>Pledge with no reward</p>
                            <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                                you will be signed up to receive product updates via email.</p>
                        </div>
                    </div>
                    {pledge[0] && <div className='flex form'>
                        <p>Enter your pledge</p>
                        <form>
                            <input className="pledgeinput" placeholder="$" value={value} onChange={(e) => setValue(e.target.value)}></input>
                            <button onClick={(e) => handleSubmit(e, value)}>Continue</button></form>
                    </div>}
                </div>




                <div className='windowedition'>
                    <div className='flex'>
                        {radio[1]}

                        <div>
                            <div className='flex'>
                                <p className='editiontype'>Bamboo Stand<span className='cyan'>&nbsp;&nbsp;&nbsp;Pledge 25$ or more</span></p>
                                <div>
                                    <p className='flex'><span className='largenumber'>101</span><span>left</span></p>
                                </div>
                            </div>
                            <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                                you will be signed up to receive product updates via email.</p>
                        </div>
                    </div>
                    {pledge[1] && <div className='flex form'>
                        <p>Enter your pledge</p>
                        <form>
                            <input className="pledgeinput" placeholder="$25" value={value} onChange={(e) => setValue(e.target.value)}></input>
                            <button onClick={(e) => handleSubmit(e, value)}>Continue</button></form>
                    </div>}
                </div>



                <div className='windowedition'>
                    <div className='flex'>
                        {radio[2]}

                        <div>
                            <div className='flex'>
                                <p className='editiontype'>Black Edition Stand<span className='cyan'>&nbsp;&nbsp;&nbsp;Pledge 75$ or more</span></p>
                                <div>
                                    <p className='flex'><span className='largenumber'>64</span><span>left</span></p>
                                </div>
                            </div>
                            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                member list. Shipping is included.</p>
                        </div>
                    </div>
                    {pledge[2] && <div className='flex form'>
                        <p>Enter your pledge</p>
                        <form>
                            <input className="pledgeinput" placeholder="$75" value={value} onChange={(e) => setValue(e.target.value)}></input>
                            <button onClick={(e) => handleSubmit(e, value)}>Continue</button></form>
                    </div>}
                </div>





                <div className='windowedition'>
                    <div className='flex'>
                        <div><input className="radioinput" type="radio"></input></div>

                        <div>
                            <div className='flex'>
                                <p className='editiontype'>Mahogany Special Edition<span className='cyan'>&nbsp;&nbsp;&nbsp;Pledge $200 or more</span></p>
                                <div>
                                    <p className='flex'><span className='largenumber'>0</span><span>left</span></p>
                                </div>
                            </div>
                            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                to our Backer member list. Shipping is included.</p>
                        </div>
                    </div>
                </div>


            </section>

        </>


    )

}


export default Window;