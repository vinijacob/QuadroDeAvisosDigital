import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import AuthForm from '../components/AuthForm';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/Student2.jpg';

export default function LoginAluno() {
  const loginFields = [
    { name: 'userEmail', label: 'E-mail', type: 'email', placeholder: 'Digite seu email' },
    { name: 'userSenha', label: 'Senha', type: 'password', placeholder: 'Digite sua senha' },
  ];

  return (
    <div className="page-wrapper">
      <SideBanner height="75%" width="50%" backgroundImage={backgroundImage} />

      <div className="form-wrapper">
        <div className="form-header">
          <h1>Log In</h1>
          <p>Não possui uma conta? <Link to="/cadastro">Clique aqui</Link></p>
        </div>

        <AuthForm fields={loginFields} buttonText="Entrar" colunas={1} navigateURL="/alunoPage" />

        <footer className="form-footer">
          <Link to="/loginAdmin"><button>Entrar como Administrador?</button></Link>
        </footer>
      </div>
    </div>
  );
}
