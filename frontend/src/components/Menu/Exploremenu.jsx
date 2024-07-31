import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1><span>Explore Our </span>Menu</h1>
        <p className='menu-text'>Tasty meals daily along with the guidance of a qualified personal nutritionist. Rich Protein Food: Nourish yourself with our flavorful protein choices. Nutritious Food. View Menu Details. Balanced Meals. Fat Loss. Doorstep Delivery.</p>
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="item-list">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
                )
                
            }
            )}
        </div>
        <hr />

    </div>
  )
}

export default Exploremenu