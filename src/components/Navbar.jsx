import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
import SideBanner from '../components/SideBanner';

export default function Navbar({ fields }) {
    return (
        <nav className={styles['navbar-wrapper']}>
            {fields.map((field, index) => {
                return (
                    // TODO: add ICON
                    <Link  key={index} to={field.url}>
                        {/* ICON IMAGES */}
                        <SideBanner
                            height="50px"
                            width="50px"
                            borderRadius="5px"
                            backgroundImage={field.icon}
                        />

                        <li>{field.name}</li>
                    </Link>
                )
            })}
        </nav>
    )

}