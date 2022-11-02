import React, { useContext, useEffect } from 'react'
import { AppContext } from '../routes/Router'
import Footer from './footer/Footer';
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
  let pizita =[
    {
      id: 1,
        name: "Pizza-HAWAINA",
        precio: 10000,
        img: "https://t1.rg.ltmcdn.com/es/posts/1/2/6/original_pizza_hawaiana_50621_600.jpg",
        img2: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg",
        img3: "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg"
    },
    {
      id: 2,
      name: "Pizza-POLLO",
      "precio": 15000,
      img: "https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg",
      "img2": "http://assets.kraftfoods.com/recipe_images/opendeploy/136150_640x428.jpg",
      "img3": "https://images.hola.com/imagenes/cocina/recetas/20200123158802/receta-pizza-pollo-barbacoa/0-772-922/pizza-pollo-adobe-m.jpg"
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
    <>
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
{
  pizita.map((element,index)=>(
    <>
    <div className='d'>
    <div className='slider-title'>
      <p>{element.name}</p>
      <p>${element.precio} COP</p>
    
    </div>
    </div>
    <div className='slider-container' key={index}>
    <div className='backgraund'></div>
    <div className='backgraund1'></div>
    <div className='backgraund2'></div>
    <img src={element.img} /> 
 
    <img src={element.img2} /> 
    <img src={element.img3} /> 
   
    </div>
  
    </>
  ))
  
}
  
      
    </section>
   </article>
    </aside>
    <Footer/>
    </>
  )
}

export default Home