import React, { useState } from 'react'
import lupa from './img/lupa.png'
const Buscador = () => {
  const[pizzas, setPizzas] = useState([{img:'l'}]);
  return (<>
    <form className='busqueda'>
      <input placeholder='Pizza de peperoni,mexicana,ha...' className='busqueda__input'></input>
      <img src={lupa} className='lupa'/>
    </form>
    <article className='cont__pizzas'>

    </article>
    </>
  )
}

export default Buscador