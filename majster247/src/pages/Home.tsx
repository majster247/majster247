import React from 'react';
import { Link } from 'react-router-dom';

const GITHUB_USERNAME = 'majster247'; // Twoja nazwa użytkownika na GitHub

const Home: React.FC = () => {
  return (
    <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Powitanie */}
      <section
        style={{
          marginBottom: '3rem',
          textAlign: 'center',
          animation: 'fadeIn 1.2s ease forwards',
          opacity: 0,
          color: '#fff',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '0.3rem' }}>
          Witaj na mojej stronie!
        </h1>
        <p style={{ fontSize: '1.25rem' }}>
          Pasjonuję się programowaniem, cyberbezpieczeństwem oraz tworzeniem innowacyjnych projektów.
        </p>
      </section>

      {/* Sekcja O mnie z obrazkiem */}
      <section
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          animation: 'fadeIn 1.5s ease forwards',
          opacity: 0,
          color: '#ddd',
          backgroundColor: '#111',
          padding: '1.5rem 2rem',
          borderRadius: 12,
          boxShadow: '0 0 15px rgba(255,255,255,0.05)',
        }}
      >
        {/* Obrazek z GitHub */}
        <div
          style={{
            flex: '1 1 250px',
            minWidth: 250,
            height: 250,
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
            backgroundColor: '#222',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          aria-label="Zdjęcie Huberta Topolskiego"
        >
          <img
            src={`https://github.com/${GITHUB_USERNAME}.png?size=400`}
            alt="Hubert Topolski"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            loading="lazy"
          />
        </div>

        {/* Tekst i link do About */}
        <div style={{ flex: '2 1 400px', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>🧑‍💻 O mnie</h2>
          <p>
            Cześć! Jestem Hubert Topolski, pasjonat programowania i cyberbezpieczeństwa, student Elektroniki i Telekomunikacji.
            Staże, certyfikaty i własne projekty pozwalają mi rozwijać się i realizować ciekawe pomysły.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <Link
              to="/about"
              style={{
                color: '#61dafb',
                textDecoration: 'underline',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Czytaj więcej o mnie &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Kafelki nawigacyjne */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeIn 1.8s ease forwards',
          opacity: 0,
        }}
      >
        {/* Kafelek Projekty */}
        <Link
          to="/projects"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: '#222',
            color: '#61dafb',
            borderRadius: 12,
            textDecoration: 'none',
            boxShadow: '0 0 15px rgba(97, 218, 251, 0.3)',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          aria-label="Przejdź do projektów"
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.transform = 'scale(1.05)';
            el.style.boxShadow = '0 0 25px rgba(97, 218, 251, 0.6)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.transform = 'scale(1)';
            el.style.boxShadow = '0 0 15px rgba(97, 218, 251, 0.3)';
          }}
        >
          📁 Projekty
          <span style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#999' }}>
            Sprawdź moje repozytoria
          </span>
        </Link>

        {/* Kafelek Blog */}
        <Link
          to="/blog"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            backgroundColor: '#222',
            color: '#61dafb',
            borderRadius: 12,
            textDecoration: 'none',
            boxShadow: '0 0 15px rgba(97, 218, 251, 0.3)',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          aria-label="Przejdź do bloga"
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.transform = 'scale(1.05)';
            el.style.boxShadow = '0 0 25px rgba(97, 218, 251, 0.6)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.transform = 'scale(1)';
            el.style.boxShadow = '0 0 15px rgba(97, 218, 251, 0.3)';
          }}
        >
          📝 Blog
          <span style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#999' }}>
            Artykuły i przemyślenia
          </span>
        </Link>
      </section>

      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </main>
  );
};

export default Home;
