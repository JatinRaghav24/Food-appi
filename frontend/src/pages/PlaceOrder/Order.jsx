import React, { useContext, useState } from "react";
import "./Order.css";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";
export const Order = () => {
  const { getSubTotal , token,food_list,cartItem,url} = useContext(StoreContext);
  const [data,setData] = useState({
    firstName : "",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
 const placeOrder = async (event)=>{
  event.preventDefault();
  let orderItems = [];
  food_list.map((item)=>{
    if (cartItem[item._id]>0) {
      let itemInfo = item;
      itemInfo["quantity"] = cartItem[item._id];
      orderItems.push(itemInfo)
      
    }
  })
  let orderData= {
    address:data,
    items:orderItems,
    amount:getSubTotal()+2,

  }
  let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}});
  if (response.data.success) {
    const {session_url} = response.data;
    window.location.replace(session_url);
    
  }else{
    alert("Errro");
  }
 }


  return (
    <form onSubmit={placeOrder} className="order-place">
      <div className="place-left">
        <p className="place-title">Delivery Information</p>
        <div className="multi-field">
          <input required name="firstName" onChange={onchangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input required name="lastName" onChange={onchangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
      
      <input required name="email" onChange={onchangeHandler} value={data.email} type="email" placeholder="Email Address" />
      <input required name="street" onChange={onchangeHandler} value={data.street} type="text" placeholder="Street" />

      <div className="multi-field">
        <input required name="city" onChange={onchangeHandler} value={data.city} type="text" placeholder="City" />
        <input required name="state" onChange={onchangeHandler} value={data.state} type="text" placeholder="State" />
      </div>
      <div className="multi-field">
        <input required name="zipcode" onChange={onchangeHandler} value={data.zipcode} type="text" placeholder="Zip Code" />
        <input required name="country" onChange={onchangeHandler} value={data.country} type="text" placeholder="Country" />
      </div>
      <input required name="phone" onChange={onchangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-details">
              <p>SubTotal</p>
              <p>₹{getSubTotal()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>₹{getSubTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Total</p>
              <p>₹{getSubTotal()===0?0:getSubTotal() + 2}</p>
            </div>
          </div>
          <button type="submit" >
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};
export default Order;
