import React from 'react';
import Navbar from '../../components/Navbar';
import Ordertemplate from '../../components/Ordertemplate';

const Orderpage = () => {
    return (
        <div className='orderpage--container'>
            <Navbar />
            <Ordertemplate title="The MFC Meal" orderLink='/order/mfc-meal' 
            description="The MFC (Mohamed Fried Chicken) Meal includes:"
            listItemOne="3pc Fried Chicken"
            listItemTwo="Medium Fries"
            listItemThree="Medium Drink"
            price="24" />
            <Ordertemplate title="The Sa7 Meal"  orderLink='/order/sa7-meal'
            description="The Sa7 Meal includes:"
            listItemOne="Chicken Sandwich"
            listItemTwo="Large Spicy Fries"
            listItemThree="Large Drink"
            price="32" />
            <Ordertemplate title="The 9a7a w 3afiya Meal" orderLink='/order/9a7a-w-3afiya-meal' 
            description="The 9a7a w 3afiya Meal includes:" 
            listItemOne="10pc Bucket"
            listItemTwo="3 Chicken Sandwiches"
            listItemThree="Two Family Fries"
            price="87" />
        </div>
    )
}

export default Orderpage;