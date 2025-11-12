import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Main.module.css';
import SideBanner from '../components/SideBanner';
import StudentImg from '../assets/Student1.jpg';
import AdminImg from '../assets/Admin1.jpg'; 

export default function Main() {
  return (
    <div className={styles['main-wrapper']}>
      <main className={styles['main-hero']}>
        <h1>Seja bem-vindo ao <span>Avisaí!</span></h1>
        <p>
          Seu Quadro de Avisos Inteligente — acompanhe tudo o que acontece na sua instituição, 
          desde comunicados importantes até novidades do dia a dia. 
          Informação rápida, clara e sempre ao seu alcance!
        </p>
        <p className={styles.caption}>Apresentado por UNINORTE</p>
      </main>

      <aside className={styles['login-section']}>
        <Link to='/loginAluno' className={styles.card}>
          <SideBanner height="100%" width="100%" backgroundImage={StudentImg} />
          <div className={styles.overlay}>
            <button>Login como Aluno</button>
          </div>
        </Link>

        <Link to='/loginAdmin' className={styles.card}>
          <SideBanner height="100%" width="100%" backgroundImage={AdminImg} />
          <div className={styles.overlay}>
            <button>Login como Administrador</button>
          </div>
        </Link>
      </aside>
    </div>
  );
}
