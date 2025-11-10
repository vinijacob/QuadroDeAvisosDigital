import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css'
import AuthForm from '../components/AuthForm';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/coming-of-age-feel.jpeg';

export default function Cadastro() {
  const loginFields = [
    {
      name: 'userName',
      label: 'Nome Completo',
      type: 'text',
      placeholder: 'Digite seu nome'
    },
    {
      name: 'userMatricula',
      label: 'Matrícula',
      type: 'number',
      placeholder: 'Digite sua matrícula'
    },
    {
      name: 'userEmail',
      label: 'E-mail',
      type: 'text',
      placeholder: 'Digite seu e-mail'
    },
    {
      name: 'userSenha',
      label: 'Senha',
      type: 'text',
      placeholder: 'Digite sua senha'
    },
    {
      name: 'userCurso',
      label: 'Curso',
      type: 'select',
      placeholder: 'Selecione seu Curso',
      options: ['Ciência da Computação', 'Engenharia', 'Matemática', 'Administração', 'Design Gráfico', 'Psicologia', 'Medicina', 'Análise de Sistemas'],
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

      {/* FORMULÁRIO */}
      <div className="form-wrapper">
        <div className="form--header">
          <h1>Cadastro</h1>
          <p>
            Já possui cadastro? <Link to="/loginAluno">Log in</Link>
          </p>
        </div>

        {/* FORMULÁRIO */}
        <AuthForm
        fields={loginFields}
        buttonText="Cadastrar"
        colunas={2} />

        <footer className="form--footer">
          <Link to='/loginAdmin'><button>Já é Administrador?</button></Link>
        </footer>
      </div>
    </div>
  );
}
