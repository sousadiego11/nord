import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" role="banner">
            <div className="header-container">
                <div className="logo">
                    <a href="#home" aria-label="Ir para o início">
                        <img
                            src="/Logo completo colorido.svg"
                            alt="Hero image"
                            width={240}
                            height={240}
                        />
                    </a>
                </div>

                <nav className="nav" role="navigation" aria-label="Menu principal">
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="main-menu"
                        aria-label="Abrir menu de navegação"
                    >
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </button>

                    <ul
                        id="main-menu"
                        className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}
                        role="menubar"
                    >
                        <li role="none">
                            <a href="#home" role="menuitem" onClick={() => setIsMenuOpen(false)}>
                                Início
                            </a>
                        </li>
                        <li role="none">
                            <a href="#services" role="menuitem" onClick={() => setIsMenuOpen(false)}>
                                Serviços
                            </a>
                        </li>
                        <li role="none">
                            <a href="#about" role="menuitem" onClick={() => setIsMenuOpen(false)}>
                                Sobre
                            </a>
                        </li>
                        <li role="none">
                            <a href="#contact" role="menuitem" onClick={() => setIsMenuOpen(false)}>
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
