import React, { useState } from 'react';
import styles from '../styles/AdminPage.module.css';
import SideBanner from '../components/SideBanner';
import adminBackground from '../assets/Admin1.jpg';

export default function AdminPage() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleCreateEvent = () => {
    if (!eventName || !eventDate) {
      alert('Preencha todos os campos!');
      return;
    }
    alert(`Evento "${eventName}" criado para ${eventDate}`);
    setEventName('');
    setEventDate('');
  };

  return (
    <div className={styles['page-container']}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h2>Meu Sistema</h2>
      </nav>

      {/* Faixa de opções */}
      <div className={styles['navbar-options']}>
        <button>Home</button>
        <button>Admin</button>
        <button>Configurações</button>
      </div>

      {/* Conteúdo principal */}
      <div className={styles['page-wrapper']}>
        {/* SideBanner */}
        <SideBanner
          height="75%"
          width="50%"
          backgroundImage={adminBackground}
          style={{
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        />

        <div className={styles['content-wrapper']}>
          <h1>Bem-vindo, Administrador!</h1>
          <p>Gerencie usuários, visualize relatórios e configure o sistema.</p>

          {/* Ações principais */}
          <div className={styles.actions}>
            <button>Gerenciar Usuários</button>
            <button>Visualizar Relatórios</button>
            <button>Configurações do Sistema</button>
          </div>

          {/* Seção de criação de eventos */}
          <div className={styles['create-event']}>
            <h2>Criar Novo Evento</h2>
            <input
              type="text"
              placeholder="Nome do evento"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <button onClick={handleCreateEvent}>Criar Evento</button>
          </div>
        </div>
      </div>
    </div>
  );
}
