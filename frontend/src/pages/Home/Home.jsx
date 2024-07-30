import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/Menu/Exploremenu';
import Fooddisplay from '../../components/food display/Fooddisplay';
import Appdownload from '../../components/Appdownload';

export const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}
export default Home;
