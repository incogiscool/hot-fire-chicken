import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contactpage = () => {
    return (
      <div className='contactpage--container'>
          <Navbar />
        <center>
          <h1>Methods of Contact</h1>
        </center>
          <ol style={{'text-align': 'center'}}>
            <li>Through our <span><a href='https://www.instagram.com/chicken.hot_fire/'>Instagram</a></span></li>
            <li>Our email: hotfirechicken@gmail.com</li>
            <li>Message us on whatsapp - 971-12-345-6789</li>
          </ol>
      <center><Link href='/'><h3 style={{color:'#00a1c5', cursor:'pointer'}}><a>Go back to home</a></h3></Link></center>
      </div>
    )
  }
  
  export default Contactpage;