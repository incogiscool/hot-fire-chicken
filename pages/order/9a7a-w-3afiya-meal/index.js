import React from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Orderform from '../../../components/Orderform'

function index() {
  return (
    <div>
        <Navbar />
        <Orderform orderItem='The 9a7a w 3afiya Meal' />
        <Footer />
    </div>
  )
}

export default index