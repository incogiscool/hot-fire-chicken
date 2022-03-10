import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {

  return (
    <div className='index--container'>
      <Navbar />
      <center>
        <div className='productimgs-index'>
          <img src='https://drive.google.com/uc?export=view&id=1rDp8sl7cRjEFzSQFVv__QQq1lZrIVq-B'
          width='400px' height='300px'/>
          <img className='main_chickenburger-img' src='https://drive.google.com/uc?export=view&id=1fwbJKwE0MNn-CbTDC0YBau84_YqgPISw'
          width='500px' height='300px' />
          <img src='https://drive.google.com/uc?export=view&id=1fp7KB3xjfCBT9nSLgEWs4ExHgt1Bx_sR' 
          width='400px' height='300px'/>
        </div>
        <div className='producttitle-h1'>
          <h1> <span style={{color: "#006C84"}}>.</span>أفضل دجاج مقلي في المنطقة، <span style={{color: "#006C84"}}>في متناول يدك</span></h1>
          <h1>The best fried chicken, <span  style={{color: "#006C84"}}>right at your fingertips.</span></h1>
        </div>
        <p className='producttext-p'>We here at <span>Hot Fire Chicken</span>, have cultivated a secret recipe that has put us at the top of the fried chicken game.  Our three founders, <span >Mohammed</span>, <span>Haidra</span>, <span>Saif</span>, have fought through fried chicken wars to deliver the most delicous and juciest fried chicken in the world.</p>
        <h2 className='instagramplug-h3'>Check out our <span><a href='https://www.instagram.com/chicken.hot_fire/' rel="noreferrer" target="_blank" >Instagram.</a></span></h2>
        <Footer />
      </center>
    </div>
  )
}
