import React from 'react'
import './Appdownload.css'
import { assets } from '../assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience <span>Download <br />Food18 App</span></p>
        <div className="app-img">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload