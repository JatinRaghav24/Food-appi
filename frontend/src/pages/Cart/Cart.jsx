import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/Storecontext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItem, food_list, removeFromCart,getSubTotal,url } = useContext(StoreContext);
const navigate = useNavigate();

  return (
    <div className="cart">
      <div   className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-title cart-it-it">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If You Have a Promo Code. Enter it here</p>
            <div className="promo-input">
              <input type="text" placeholder="Promo Code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
