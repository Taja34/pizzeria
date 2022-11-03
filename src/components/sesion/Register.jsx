import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './login.scss'
import icon from '../../assets/pizza-icon.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';
import Swal from "sweetalert2";

// const URL_API = 

const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    console.log(data)
    const urlUser = `${URL_API}?email=${data.email}&password=${data.password}&name=${data.name}`;
    const login = await axios.get(urlUser);
    const loginValidation = login.data;

    if (loginValidation != '') {
      Swal.fire (
        'El usuario ya existe'
      )
    } else {
      await axios.post(urlUser, data);
      navigate('login');
    }
  }

  return (
    <>
      <div className='container-fluid d-flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center px-5'>
          <img src={icon} alt='pizza icon' />
          <h1 className='mb-5'>PISassScript</h1>
          <h2>Regístrate</h2>
          <p className='align-items-center mb-4'>Disfruta de la mejor Pizza creada para las personas amantes del código</p>
          <label className='mb-4 input-group'>
          <span class="input-group-text text-light">
            <i class="bi bi-person"></i>
            
          </span>
          <input
            type="text"
            placeholder="Nombre"
            {...register('name', {
              required: true
            })}
            className={errors.name ? 'form-control input--error' : 'form-control'}
          />
          {errors.name && <p>Este campo es obligatorio</p>}
        </label>
            <label className='mb-4 input-group'>
              <span class="input-group-text text-light">
              <i class="bi bi-envelope"></i>                
              </span>
              <input
                type="email"
                placeholder="Correo"
                {...register('user', {
                  required: true
                })}
                className={errors.user ? 'form-control input--error' : 'form-control'}
              />
              {errors.user && <p>Este campo es obligatorio</p>}
            </label>

            <label className='mb-4 input-group '>
              <span class="input-group-text text-light">
                <i class="bi bi-lock"></i>
              </span>
              <input
                type="text"
                placeholder="Contraseña"
                {...register('password', {
                  required: true
                })}
                className={errors.password ? 'form-control input--error' : 'form-control'}
              />
              {errors.password && <p>Este campo es obligatorio</p>}
            </label>
          <div className='d-grid col-12'>
            <button className='btn btn-light mb-3 py-3 fw-semibold' type='submit'>Registrarse</button>
          </div>
          <p className='mt-3 mb-0 cuenta'>¿Ya tienes cuenta?</p>
          <h6>Inicia sesión</h6>
        </form>
      </div>
    </>
  )
}

export default Register