import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import AuthForm from '../components/AuthForm';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/Admin2.jpg';

export default function Cadastro() {
  const cadastroFields = [
    { name: 'userName', label: 'Nome Completo', type: 'text', placeholder: 'Digite seu nome' },
    { name: 'userMatricula', label: 'Matrícula', type: 'number', placeholder: 'Digite sua matrícula' },
    { name: 'userEmail', label: 'E-mail', type: 'text', placeholder: 'Digite seu e-mail' },
    { name: 'userSenha', label: 'Senha', type: 'password', placeholder: 'Digite sua senha' },
    { name: 'userCurso', label: 'Curso', type: 'select', placeholder: 'Selecione seu Curso',
      options: ['Ciência da Computação', 'Engenharia', 'Matemática', 'Administração', 'Design Gráfico', 'Psicologia', 'Medicina', 'Análise de Sistemas'] },
  ];

  return (
    <div className="page-wrapper">
      <SideBanner height="75%" width="50%" backgroundImage={backgroundImage} />

      <div className="form-wrapper">
        <div className="form-header">
          <h1>Cadastro</h1>
          <p>Já possui cadastro? <Link to="/loginAluno">Log in</Link></p>
        </div>

        <AuthForm fields={cadastroFields} buttonText="Cadastrar" colunas={2} navigateURL="/alunoPage" />

        <footer className="form-footer">
          <Link to='/loginAdmin'><button>Já é Administrador?</button></Link>
        </footer>
      </div>
    </div>
  );
}
