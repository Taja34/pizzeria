import React from 'react'
import { Outlet } from 'react-router-dom'
import '../style/style.scss'
const Header = () => {
  return (
  <>
    <header className='header'>
    <div >
        <p className='header__title'><b> Home </b></p>
        <p className='header__subtitle'>¡Que bueno verte Cris!</p>
    </div>
    <div ><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='header__img'/></div>
    </header>
 
    <Outlet/>
    </>
  
  )
}

export default Header