import React from 'react'
import './Logo.css'

export default function Logo(){
    return(
        <div id="Logo">
          <div className="logo-p">
              p 
          </div>
          <span style={{color: '#FF0000', fontWeight:'bold', fontSize:'20px', marginLeft:'18px'}}>
              PaSE Covid-19 Tracker
          </span>  
        </div>
    )
}