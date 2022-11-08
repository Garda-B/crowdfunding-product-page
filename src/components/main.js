import logomain from '../images/logo-mastercraft.svg'
import bookmarklogo from '../images/icon-bookmark.svg'

import { useEffect, useState } from "react"



function Main({data, count}) {

    const [rangeWidth, setRangeWidth] = useState(89.914)
    const [toggleBookmark, setToggleBookmark] = useState(false)

    useEffect(() => {
        setRangeWidth(89.914 + data/1000)

    }, [data])
   
    const handleClick = () => {

        const window = document.getElementsByClassName('windownotvisible')[0]
            window.style.display = "block"

            const wrapper = document.getElementsByClassName('wrapper')[0]
           
            wrapper.style.filter="brightness(30%)"

            
            document.getElementsByClassName('darkbackground')[0].style.display = "block"

    }    

    const handleBookmark = () => {
       
        setToggleBookmark(!toggleBookmark) 
        console.log(toggleBookmark)       
    }


   
    return (

        <>

            <div className='main'>
                <img className="mainlogo" alt="logo" src={logomain}></img>

                <section className='sectionone'>
                    <h1>Mastercarft Bamboo Monitor Riser</h1>
                    <p> A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className='flex sectiononebuttons'>
                        <button onClick={handleClick} className='button'>Back this project</button>
                        
                        <button onClick={handleBookmark} style={{color: toggleBookmark && 'hsl(176, 72%, 28%)', fontWeight: toggleBookmark && 700}} className='bookmark'>{toggleBookmark ? 'Bookmarked' : 'Bookmark'}
                            <img className="bookmarklogo" alt="bookmark" style={{filter: toggleBookmark && 'invert(36%) sepia(84%) saturate(418%) hue-rotate(127deg) brightness(90%) contrast(91%)'}} src={bookmarklogo}></img>
                        </button>
                        <img className="bookmarklogomobile" alt="logo" src={bookmarklogo}></img>
                    </div>
                </section>


                <section className='sectiontwo'>
                    <div className='flex'>
                        <div>
                            <p className='largenumber'>${(89914 + data).toString().charAt(0) + (89914 + data).toString().charAt(1) + ',' + (89914 + data).toString().slice(2)}</p>
                            <p>of $100,000 backed</p>
                        </div>
                        <div>
                            <p className='largenumber'>{count.toString().charAt(0) + ',' + count.toString().slice(1)}</p>
                            <p>total backers</p>
                        </div>
                        <div>
                            <p className='largenumber'>56</p>
                            <p>days left</p>
                        </div>


                    </div>
                    <div className='range'>
                        <div className='part1' style={{width: `${rangeWidth}%`}}></div>
                    </div>

                </section>


                <section className='sectionthree'>


                    <h2>About this project</h2>

                    <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

                    <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                        to allow notepads, pens, and USB sticks to be stored under the stand.</p>

                    <div className='edition'>
                        <div className='flex'>
                            <p className='editiontype'>Bamboo Stand</p>
                            <p>Pledge $25 or more</p>
                        </div>
                        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.</p>
                        <div className='flex'>
                            <p><span className='figure'>101</span> left</p>
                            <button onClick={handleClick}>Select Reward</button>
                        </div>
                    </div>

                    <div className='edition'>
                        <div className='flex'>
                            <p className='editiontype'> Black Edition Stand</p>
                            <p> Pledge $75 or more</p>
                        </div>
                        <p> You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.</p>
                        <div className='flex'>
                            <p><span className='figure'>64</span> left</p>
                            <button onClick={handleClick}>Select Reward</button>
                        </div>
                    </div>

                    <div className='edition'>
                        <div className='flex'>
                            <p className='editiontype'>Mahogany Special Edition</p>
                            <p>Pledge $200 or more</p>
                        </div>
                        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.</p>
                        <div className='flex'>
                            <p><span className='figure'>0</span> left</p>
                            <button style={{ backgroundColor: 'gray' }}>Out of stock</button>
                        </div>
                    </div>


                </section>

            </div>



        </>
    )
}

export default Main;