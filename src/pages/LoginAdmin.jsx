import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import AuthForm from '../components/AuthForm';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/coming-of-age-feel.jpeg';

export default function LoginAdmin() {
  const loginFields = [
    {
      name: 'adminEmail',
      label: 'E-mail',
      type: 'email',
      placeholder: 'Digite seu email de administrador',
    },
    {
      name: 'adminSenha',
      label: 'Senha',
      type: 'password',
      placeholder: 'Digite sua senha',
    },
    {
      name: 'adminToken',
      label: 'Token',
      type: 'password',
      placeholder: 'Digite seu token de administrador',
    },
  ];

  return (
    <div className="page-wrapper">
      {/* BANNER FIXO */}
      <SideBanner
        height="100vh"
        width="50vw"
        backgroundImage={backgroundImage}
        borderRadius="0"
      />

      {/* CORPO DO FORMULÁRIO */}
      <div className="form-wrapper">
        <div className="form--header">
          <h1 style={{ textAlign: 'center' }}>Log In de Administrador</h1>
          <p style={{ width: '75%', textAlign: 'center' }}>
            Voltar para o login de aluno? <Link to="/loginAluno">Clique aqui</Link>
          </p>
        </div>

        {/* FORMULÁRIO */}
        <AuthForm
          fields={loginFields}
          buttonText="Entrar como Admin"
          colunas={2}
          navigateURL="/adminPage"
        />

        {/* FOOTER */}
        <footer className="form--footer">
          <Link to='/cadastro'><button>Não possui conta? Cadastre-se</button></Link>
        </footer>
      </div>
    </div>
  );
}
