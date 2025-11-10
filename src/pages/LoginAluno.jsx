import React from 'react';
import { Form, Link } from 'react-router-dom';
import '../styles/Global.css';
import AuthForm from '../components/AuthForm';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/coming-of-age-feel.jpeg';

export default function LoginAluno() {
  const loginFields = [
    {
      name: 'userEmail',
      label: 'E-mail',
      type: 'email',
      placeholder: 'Digite seu email',
    },
    {
      name: 'userSenha',
      label: 'Senha',
      type: 'password',
      placeholder: 'Digite sua senha',
    },
  ];

  return (
    <div className="page-wrapper">
      {/* IMAGEM LATERAL */}
      <SideBanner
        height="75%"
        width="50%"
        backgroundImage={backgroundImage}
      />

      {/* BLOCO FORMULÁRIO */}
      <div className="form-wrapper">
        <div className="form--header">
          <h1>Log In</h1>
          <p
          style={{width:'75%'}}>
            Não possui uma conta? <Link to="/cadastro">Clique aqui para se cadastrar.</Link>
          </p>
        </div>

        {/* FORMULÁRIO */}
        <AuthForm
          fields={loginFields}
          buttonText="Entrar"
          colunas={1}
        />

        <footer className="form--footer">
          <Link to='/loginAdmin'><button>Entrar como Administrador?</button></Link>
        </footer>
      </div>
    </div>
  );
}
