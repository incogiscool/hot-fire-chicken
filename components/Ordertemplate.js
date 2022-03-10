import React from 'react';
import Link from 'next/link';

const Ordertemplate = (props) => {
    return (
        <div className='ordertemplate--container'>
            <h1 className='ordertemplate-title'>{props.title}</h1>
            <p className='ordertemplate-desc'>{props.description}</p>
            <ul className='ordertemplate-list'>
                <li>{props.listItemOne}</li>
                <li>{props.listItemTwo}</li>
                <li>{props.listItemThree}</li>
            </ul>
            <h3 className='ordertemplate-price'>Price: {props.price} AED</h3>
            <Link href={props.orderLink}><button className='order-button'><a>Order</a></button></Link>
        </div>
    )
}

export default Ordertemplate;