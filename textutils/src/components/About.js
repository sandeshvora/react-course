import React, { useState } from 'react'

export default function About() {

    const [myText,setMyText] = useState({
        color: 'black',
        backgroundColor : 'white',
        border : '2px solid white'
    })
    const [btnText,myBtnText]=useState('Enable Dark Mode')

    const togglestyle = ()=>{
        if(myText.color === 'black')
        {
            setMyText(
                {color: 'white',
            backgroundColor : 'black'}
            )

            myBtnText("Enable Light Mode")
        }
        else{
            setMyText({color: 'black',
            backgroundColor : 'white'})
            myBtnText("Enable Dark Mode")
        }
    }
  return (
      
   <>
        <div className="container" style={myText}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion my-3" id="accordionPanelsStayOpenExample" >
            <div className="accordion-item" style={myText}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myText} data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myText}>
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" style={myText} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" style={myText}>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myText}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" style={myText}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"  aria-labelledby="panelsStayOpen-headingThree" style={myText}>
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>

                </div>
        </div>
        </div>
            
        </div>
        <div className='container mx-8'>
        <button className="btn btn-primary my-3 mx-8" type="button" onClick={togglestyle}>
                {btnText}
        </button>
        </div>
        
            
   </>
  )
  }
