import React from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Orderform from '../../../components/Orderform'

function index() {
  return (
    <div>
        <Navbar />
        <Orderform orderItem='The Sa7 Meal' />
        <Footer />
    </div>
  )
}

export default index