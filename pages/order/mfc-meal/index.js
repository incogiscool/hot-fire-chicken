import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Orderform from '../../../components/Orderform';

const Mfcorder = () => {
    return (
        <div>
            <Navbar />
            <Orderform orderItem='The MFC Meal' />
            <Footer />
        </div>
    )
}

export default Mfcorder;