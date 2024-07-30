import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1><span>Explore Our </span>Menu</h1>
        <p className='menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde omnis nam eum, iusto nesciunt excepturi architecto corporis soluta repellat ab, molestias maiores atque neque amet a natus deleniti at!</p>
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