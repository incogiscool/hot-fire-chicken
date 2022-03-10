import React from 'react'
import db from './Firebase';
import { collection, getDocs } from "firebase/firestore";


/*

This is the template for the orders: 

address: ""
apartment: ""
floor: ""
item: ""
name: ""

*/

let orderList = [];


async function getOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  querySnapshot.forEach((doc) => {
    orderList.push(doc.data());    
  });
}

// const AllOrders = orderList.map(
//   (order) => {
//     return (
//       <tr>
//         <td>Name: {order.name}</td>
//         <td>Item: {order.item}</td>
//         <td>Address: {order.address}</td>
//         <td>Apartment: {order.apartment}</td>
//         <td>Floor: {order.floor}</td>
//       </tr>
//     )
//   }
// )

function Adminorders(props) {
  getOrders()
  console.log(orderList)


  return (
    <div className='admin-logtext'>
      Hey, please go into inspect element and click console to access the orders.
      <br></br>
      If you log out, please refresh your page before logging back in to see the orders.

    </div>
  )
}

export default Adminorders;