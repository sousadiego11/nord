import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Desenvolvimento Web',
            description: 'Criamos sites modernos e responsivos que se adaptam perfeitamente a qualquer dispositivo.',
            features: ['Design Responsivo', 'SEO Otimizado', 'Performance', 'Acessibilidade']
        },
        {
            id: 4,
            title: 'Consultoria Tech',
            description: 'Orientamos sua empresa na escolha das melhores tecnologias e estratégias digitais.',
            features: ['Arquitetura de Software', 'DevOps', 'Cloud Computing', 'Segurança']
        },
        {
            id: 6,
            title: 'Manutenção & Suporte',
            description: 'Oferecemos suporte técnico contínuo para manter seus sistemas sempre funcionando.',
            features: ['Atualizações', 'Backup & Segurança', 'Relatórios']
        }
    ];

    return (
        <section className="services" id="services" role="region" aria-labelledby="services-title">
            <div className="services-container">
                <div className="services-header">
                    <h2 id="services-title" className="services-title">
                        Nossos <span className="highlight">Serviços</span>
                    </h2>
                    <p className="services-subtitle">
                        Oferecemos soluções completas em tecnologia para impulsionar seu negócio
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="service-card"
                            role="article"
                            aria-labelledby={`service-title-${service.id}`}
                        >
                            <div className="service-icon" aria-hidden="true">
                                {service.icon}
                            </div>
                            <h3 id={`service-title-${service.id}`} className="service-title">
                                {service.title}
                            </h3>
                            <p className="service-description">
                                {service.description}
                            </p>
                            <ul className="service-features" role="list">
                                {service.features.map((feature, index) => (
                                    <li key={index} role="listitem">
                                        <span className="feature-check" aria-hidden="true">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className="service-cta"
                                aria-label={`Saiba mais sobre ${service.title}`}
                            >
                                Saiba Mais
                            </a>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <h3>Pronto para começar seu projeto?</h3>
                    <p>Entre em contato conosco e vamos transformar sua ideia em realidade</p>
                    <a href="#contact" className="btn btn-primary">
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
