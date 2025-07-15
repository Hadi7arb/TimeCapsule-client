import React from "react";
import './Header-module.css';

const Header = () => {
    return (
            <header>
                <h1>MomentoFrame</h1>
                <nav>
                    <ul>
                        <li><a href="#">Sign-up</a></li>
                        <li><button>Sign-in</button></li>
                    </ul>
                </nav>
            </header>

    );
}

export default Header;