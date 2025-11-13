import React, { useState } from 'react';
import styles from '../styles/UserPage.module.css';
import SideBanner from '../components/SideBanner';
import userBackground from '../assets/Student1.jpg';

export default function UserPage() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Workshop de React', date: '2025-11-20', attended: false },
    { id: 2, name: 'Palestra de UX Design', date: '2025-11-25', attended: false },
    { id: 3, name: 'Hackathon 2025', date: '2025-12-05', attended: false },
  ]);

  const handleAttendance = (id) => {
    setEvents(events.map(ev => ev.id === id ? { ...ev, attended: !ev.attended } : ev));
  };

  return (
    <div className={styles['page-container']}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h2>Meu Sistema</h2>
        <h2><a href="/" className={styles['page-link']}>UNINORTE</a></h2>
      </nav>

      {/* Faixa de opções */}
      <div className={styles['navbar-options']}>
        <button>Home</button>
        <button>Perfil</button>
        <button>Configurações</button>
      </div>

      {/* Conteúdo principal */}
      <div className={styles['page-wrapper']}>
        <SideBanner
          height="75%"
          width="50%"
          backgroundImage={userBackground}
          style={{
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        />

        <div className={styles['content-wrapper']}>
          <h1>Bem-vindo, Usuário!</h1>
          <p>Esta é sua página principal. Aqui você pode acessar suas informações e configurações.</p>

          {/* Ações principais */}
          <div className={styles.actions}>
            <button>Editar Perfil</button>
            <button>Minhas Configurações</button>
          </div>

          {/* Seção de eventos */}
          <div className={styles['user-events']}>
            <h2>Eventos</h2>
            {events.length === 0 ? (
              <p>Nenhum evento disponível.</p>
            ) : (
              events.map(ev => (
                <div key={ev.id} className={styles['event-item']}>
                  <div>
                    <strong>{ev.name}</strong> - 
                    (<small>{ev.date}</small>)
                  </div>
                  <button
                    className={ev.attended ? styles.attended : ''}
                    onClick={() => handleAttendance(ev.id)}
                  >
                    {ev.attended ? 'Presença Confirmada' : 'Marcar Presença'}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
