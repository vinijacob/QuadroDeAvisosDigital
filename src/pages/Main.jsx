import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Main.module.css';
import SideBanner from '../components/SideBanner';
import backgroundImage from '../assets/coming-of-age-feel.jpeg'; 

export default function Main() {
  return (
    <div className={styles['main-page--wrapper']}>
      <main className={styles['main-page--header']}>

        <span><SideBanner
            height="80px"
            width="80px"
            backgroundImage={backgroundImage}
        /></span>

        <h1>Seja bem-vindo ao Avisaí! </h1>
        <p>Seu Quadro de Avisos Inteligente, um espaço feito para você acompanhar tudo o que acontece na sua instituição — desde avisos importantes até novidades do dia a dia. Informação rápida, clara e sempre ao seu alcance!</p>
        <p className={styles.caption}>Apresentado por UNINORTE</p>
      </main>

      <aside className={styles['main-page--login-section']}>
        <Link to='/loginAluno'>
          <SideBanner 
            height="100%"
            width="100%"
            backgroundImage={backgroundImage}
          />
          <button>Fazer Login como Aluno</button>
        </Link>
        <Link to='/loginAdmin'>
          <SideBanner 
            height="100%"
            width="100%"
            backgroundImage={backgroundImage}
          />
          <button>Fazer Login como Administrador</button>
        </Link>
      </aside>
    </div>
  );
}
