import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
    <aside className='footer'>
    <div>Home</div>
    <div>tienda</div>
    <Link to='/buscar'>Buscar</Link>
    </aside>
    </footer>
    <Outlet/>
    </>
  )
}

export default Footer