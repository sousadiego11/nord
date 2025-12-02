import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home" role="banner">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Transforme Sua <span className="highlight">Visão</span> em Realidade
                        </h1>
                        <p className="hero-description">
                            Oferecemos soluções inovadoras e personalizadas para impulsionar o crescimento
                            do seu negócio com tecnologia de ponta e design excepcional.
                        </p>
                        <div className="hero-buttons">
                            <a href="#services" className="btn btn-primary" role="button">
                                Nossos Serviços
                            </a>
                            <a href="#contact" className="btn btn-secondary" role="button">
                                Entre em Contato
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <img
                                    src="/icone.svg"
                                    alt="Hero image"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="hero-decoration" aria-hidden="true">
                <div className="decoration-circle decoration-circle--1"></div>
                <div className="decoration-circle decoration-circle--2"></div>
                <div className="decoration-circle decoration-circle--3"></div>
            </div>
        </section>
    );
};

export default Hero;
