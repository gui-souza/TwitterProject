import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo.png'

export default function Login() {
    return (
      <>
        <div className='controller'>
          <div className='login'>
            <div className='logotext'>
              <img className='logo' src='/images/logo.png'/>
              <h2 className='text'><span>Entrar no Twitter</span></h2>
            </div>
            <form className='form'>
              <input id='input1' className='input' type='text' placeholder='Celular, e-mail ou nome de usuário'/>
              <input className='input' type='text' placeholder='Senha'/>
            </form>
            <button className='botao'><span>Entrar</span></button>
            <div className='footer'>
              <a className='password' href='https://twitter.com/account/begin_password_reset'>Esqueceu sua senha?</a>
              <p className='space'>.</p>
              <a className='signup' href='https://twitter.com/i/flow/signup'>Inscrever-se no Twitter</a>
            </div>
          </div>
        </div>
      </>
    )
  }