import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
  const [image,setImage] = useState(false);

  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"

  })
    const onChangehandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }
    
    const onSubmithandler= async(event)=>{
      event.preventDefault();
      const formData = new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)
      const response = await axios.post(`${url}/api/food/add`,formData);
      if(response.data.success){
        setData({
          name:"",
          description:"",
          price:"",
          category:"Salad"
      
        })
        setImage(false)
        toast.success(response.data.message)
      }else{
        
        toast.error(response.data.message)
      }



    }


  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmithandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id='image' hidden required/>
            </div>
            <div className="p-name flex-col">
              <p>Product name</p>
              <input onChange={onChangehandler} value={data.name} type="text" name="name" placeholder='Type here' />
            </div>
            <div className="p-desc flex-col">
              <p>Product description</p>
              <textarea onChange={onChangehandler} value={data.description} name="description" rows='6' placeholder='Write text here' required ></textarea>
            </div>
            <div className="category-price">
              <div className="add-cat flex-col">
                <p>Product Category</p>
                <select onChange={onChangehandler} name="category" >
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Desert">Desert</option>
                  <option value="Breed">Breed</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Nodels">Nodels</option>
                </select>
              </div>
              <div className="add-price flex-col">
                <p>Product Price</p>
                <input onChange={onChangehandler} value={data.price} type="Number" name='price' placeholder='$20' />
              </div>
            </div>
              <button className='add-btn' type='submit'>Add</button>
        </form>
        
    </div>
  )
}

export default Add