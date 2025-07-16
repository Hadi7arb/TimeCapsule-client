import React from "react";
import './Header2.module.css';
import menuIcon from '../../assets/menu.svg';

const Header2 = () => {
    return (
            <header className={styles.header}>
                <img src={menuIcon} alt="Menu" className="menu-icon" />
                <h1 className=".h1">MomentoFrame</h1>
                
            </header>

    );
}

export default Header2;