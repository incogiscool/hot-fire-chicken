import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { uid } from 'uid';
import db from './Firebase';

const Orderform = (props) => {


    
    const [order, setOrder] = useState({
        name: "",
        item: props.orderItem,
        address: "",
        floor: "",
        apartment:""
    })

    const [submit, setSubmit] = useState("")


    async function writeToDb(inp) {

        //Writing Data to the database

        await setDoc(doc(db, 'orders', uid()), inp)
    }



    const handleSubmit = (e) => {

        //What happens when the form is submitted

        e.preventDefault()

        console.log('Order Sent!');
        console.log(order)
        writeToDb(order);
        setOrder({
            name: "",
            item: props.orderItem,
            address: "",
            floor: "",
            apartment:""
        });
        
        setSubmit("Order Submitted, redirecting you...")

        setTimeout(() => window.location.replace("/thank-you"), 1500)
    }

    return (
        <div className='orderform--container'>
            <form onSubmit={handleSubmit}>
                <h1 className='orderform-h1'>Hot Fire Chicken Ordering System</h1>

                <h2 className='orderform-submitted-notice'>{submit}</h2>


                <div className='form-container'>
                    <label htmlFor='name-input'>Name: </label>
                    <input type='text' name='name' id='name' 
                    onChange={(e) => setOrder({...order, name: e.target.value})} value={order.name} />
                </div>


                <div className='form-container'>
                    <label htmlFor='item-input'>Item: </label>
                    <input type="text"  name='item' id='item'readOnly value={props.orderItem} />
                </div>


                <div className='form-container'>
                    <label htmlFor='address-input'>Address: </label>
                    <input type='text' name='address' id='address' 
                    onChange={(e) => setOrder({...order, address: e.target.value})} value={order.address} />
                </div>


                <div className='form-container'>
                    <label htmlFor='floor-input'>Floor Level: </label>
                    <input type='text' name='floor' id='floor' 
                    onChange={(e) => setOrder({...order, floor: e.target.value})} value={order.floor} />    
                </div>

                
                <div className='form-container'>
                    <label htmlFor='apartment-input'>Apartment: </label>
                    <input type='text' name='apartment' id='apartment' 
                    onChange={(e) => setOrder({...order, apartment: e.target.value})} value={order.apartment} />
                </div>

                <br></br>

                <button className='ordersubmit-button' type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Orderform;