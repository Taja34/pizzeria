import React, { useContext, useEffect } from 'react'
import { AppContext } from '../routes/Router'
import { getPizzas } from './service/pizzas'

const Home = () => {
  const{pizzas, setPizzas} = useContext(AppContext);
  let  cupones = [
    {name:'Cupones para Frontends',
descuento:'45% OFF'
  },
  {name:'Cupon Pizza CSS',
  descuento:'25% OFF'
    }
  ]
  useEffect(() => {
searchPizzas()
    
   }, [])
 const searchPizzas= async()=>{
let infopizzas =await getPizzas()
await setPizzas(infopizzas)
console.log(pizzas)
 }
  return (
    <aside className='body'>
      <article className='body__header'>
    <div className='body__title'> <b>Pizzas disponibles </b></div>
   <p className='body__subtitle'> <b>Ver todas </b> </p></article>
   <div className='prueba'>
   <article className='body__contcupon'>
  
   {
    cupones.map((element, index)=>(
      <div className='body__cupon' key={index}>
      <p>{element.name}</p>
      <p className='body__cupon__descuento'>{element.descuento}</p>
    </div>
    ))

   }
   </article>
   </div>

   <article>
    <section>


        <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
     
      
    </section>
   </article>
    </aside>
  )
}

export default Home