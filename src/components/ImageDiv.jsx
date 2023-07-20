import React from 'react'
import './Main.css'
import desktopImg from '../images/illustration-woman-online-desktop.svg'
import mobileImg from '../images/illustration-woman-online-mobile.svg'
import illustratorBox from '../images/illustration-box-desktop.svg'

const ImageDiv = () => {
  return (
    <div className='main-img'>
     <div className="img-container">
        <img 
        src={desktopImg} 
        alt="Image of women in front of computer screen" 
        className='desktop-img'
        />
        <img 
        src={mobileImg}
         alt="mobile img"
         className='mobile-img' 
         />
     </div>
     <div className="box-container">
         <img
         src={illustratorBox}
         alt="The box"
         className='box'
         />
     </div>
    </div>
  )
}

export default ImageDiv
