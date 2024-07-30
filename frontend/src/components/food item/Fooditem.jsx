import React, { useContext,  } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Storecontext";

const Fooditem = ({ id, name, price, description, image }) => {

  const{cartItem,addTocart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div  className="food-item-img">
        <img className="item-img" src={url+"/images/"+image} alt="" />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addTocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="item-info">
        <div className="food-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="item-desc">{description}</p>
        <div className="cart-btn">
        <p className="item-price">${price}</p>
        <button onClick={() => addTocart(id)}>Add To Cart</button>
        </div>
        
      </div>
    </div>
  );
};

export default Fooditem;
