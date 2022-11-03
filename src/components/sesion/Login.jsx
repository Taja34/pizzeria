import React from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './login.scss'
import icon from '../../assets/pizza-icon.png'
import "bootstrap-icons/font/bootstrap-icons.css";



// import { useNavigate } from ''

const Login = () => {
  // const navigate = useNavigate();

  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className='container-fluid d-flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center px-5'>
          <img src={icon} alt='pizza icon' />
          <h1 className='mb-5'>PISassScript</h1>
          <h2>Inicia sesión en tu cuenta</h2>
          <p className='align-items-center mb-4'>Disfruta de la mejor Pizza creada para las personas amantes del código</p>

          <label className='col-12 col-sm-6 mb-4 input-group'>
              <span class="input-group-text text-light">
              <i class="bi bi-person"></i>
              </span>
              <input 
              type="email" 
              class="form-control" 
              placeholder="Usuario"/>
          </label>
          
          <label className='col-12 col-sm-6 mb-4 input-group'>
              <span class="input-group-text text-light">
              <i class="bi bi-lock"></i>
              </span>
              <input 
              type="text" 
              class="form-control" 
              placeholder="Contraseña"/>
          </label>
          <div className='d-grid col-12 col-sm-6'>
            <button className='btn btn-light mb-3 py-3 fw-semibold' type='submit'>Iniciar sesión</button>
          </div>

          <h6 className='mb-5'>Restablecer contraseña</h6>
          <p className='mb-0 cuenta'>¿No tienes una cuenta?</p>
          <h6>Regístrate aquí</h6>
        </form>
      </div>
    </>
  )
}

export default Login