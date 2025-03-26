import { useForm } from 'react-hook-form'
import './Form.css'
import Button from '../../components/landingPage/button/Button'
import emailjs from '@emailjs/browser'
// const privateKey = import.meta.env.VITE_PRIVATE_KEY_EMAILJS

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit'
  })

  const onSubmit = (data) => {
    console.log('formulario enviado con:', data)

    emailjs
      .send('service_bez4nb5', 'template_bx4th1k', data, 'R_NaqqG5cxzALAkBE')
      .then(() => {
        console.log('Email enviadoooooo')
        alert('Mensaje enviado')
        reset()
      })
      .catch((error) => {
        console.error('error enviando :(', error)
        alert('Error al enviar el mensaje')
      })
    console.log(data)
  }

  const onSubmitFailure = (errors) => {
    console.log('formulario no enviado con:', errors)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onSubmitFailure)}
      className='form_styles'
    >
      <div className='form_info'>
        <label htmlFor='name' className='label_styles_form'>
          Nombre
        </label>
        <input
          id='name'
          type='text'
          {...register('name', { required: 'Nombre requerido' })}
          className='input_styles'
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className='form_info_container'>
        <div className='form_info_container_labels'>
          <label htmlFor='email' className='label_styles_form'>
            Correo electronico
          </label>
          <input
            id='email'
            type='email'
            {...register('email', {
              required: 'Correo requerido',
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: 'El formato del correo no es valido'
              }
            })}
            className='input_styles'
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className='form_info_container_labels'>
          <label htmlFor='phone' className='label_styles_form'>
            Telefono
          </label>
          <input
            id='phone'
            type='tel'
            {...register('phone', {
              required: 'Telefono requerido',
              pattern: {
                // value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: 'El formato del movil no es valido'
              }
            })}
            className='input_styles'
          />
        </div>
      </div>
      <div className='form_info_message'>
        <label htmlFor='message' className='label_styles_form'>
          Mensaje
        </label>
        <textarea
          id='message'
          style={{
            width: '70%',
            height: '5rem',
            border: '1px solid #000',
            borderRadius: '5px'
          }}
          {...register('message', {
            required: 'Mensaje requerido',
            minLength: { value: 10, message: 'Minimo 10 caracteres' }
          })}
          // className='input_styles'
        />
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <div className='form_button_container'>
        <Button className='button_inverted' w='15rem' h='3.5rem' type='submit'>
          Enviar
        </Button>
        {/* <button type='submit' id='submit'>
          ENVIAAAAAAAAAAAAAAAAAAAAR
        </button> */}
      </div>
    </form>
  )
}

export default Form
