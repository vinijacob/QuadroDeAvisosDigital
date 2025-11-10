import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/AdminPage.module.css'

// IMPORT ICON IMAGES
import calendarIcon from '../assets/icons/calendar.png';
import dashboardIcon from '../assets/icons/dashboard.png';
import userListIcon from '../assets/icons/group.png';
import profileIcon from '../assets/icons/profile.png';

export default function AdminPage() {

  const listField = [
    {
      name: "Dashboard",
      url: "/cadastro",
      icon: calendarIcon,
    },
    {
      name: "Meu Perfil",
      url: "/loginAluno",
      icon: dashboardIcon,
    },
    {
      name: "Eventos",
      url: "/loginAluno",
      icon: userListIcon,
    },
    {
      name: "Usuário",
      url: "/loginAluno",
      icon: profileIcon,
    },
  ]


  return (
    <div className={styles['admin-page--main']}>
      <Navbar fields={listField} />
      <header>
        <h1>Bem vindo de volta!</h1>
      </header>
    </div>
  )
}
