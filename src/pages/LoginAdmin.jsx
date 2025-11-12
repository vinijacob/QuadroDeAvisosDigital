import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import AuthForm from '../components/AuthForm';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/Admin3.jpg';

export default function LoginAdmin() {
  const loginFields = [
    { name: 'adminEmail', label: 'E-mail', type: 'email', placeholder: 'Digite seu email de administrador' },
    { name: 'adminSenha', label: 'Senha', type: 'password', placeholder: 'Digite sua senha' },
    { name: 'adminToken', label: 'Token', type: 'password', placeholder: 'Digite seu token de administrador' },
  ];

  return (
    <div className="page-wrapper">
      <SideBanner height="75%" width="50%" backgroundImage={backgroundImage} />

      <div className="form-wrapper">
        <div className="form-header">
          <h1>Log In de Administrador</h1>
          <p>Voltar para o login de aluno? <Link to="/loginAluno">Clique aqui</Link></p>
        </div>

        <AuthForm fields={loginFields} buttonText="Entrar como Admin" colunas={2} navigateURL="/adminPage" />

        <footer className="form-footer">
          <Link to='/cadastro'><button>Não possui conta? Cadastre-se</button></Link>
        </footer>
      </div>
    </div>
  );
}
