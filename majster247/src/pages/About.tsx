import React from 'react';

const About: React.FC = () => {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: '2rem auto',
        padding: '2rem 1.5rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#111',
        color: '#eee',
        borderRadius: 12,
        boxShadow: '0 0 25px rgba(255,255,255,0.05)',
        lineHeight: 1.6,
        animation: 'fadeIn 1.2s ease forwards',
        opacity: 0,
      }}
    >
      <style>{`
        a {
          color: #61dafb;
          text-decoration: underline;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #21a1f1;
        }
        ul {
          padding-left: 1.3rem;
          margin-top: 0.5rem;
        }
        li {
          margin-bottom: 0.4rem;
          font-size: 1rem;
        }
        h2 {
          border-bottom: 2px solid #61dafb;
          padding-bottom: 0.4rem;
          margin-bottom: 1rem;
          color: #61dafb;
        }
        h3 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #aad8ff;
        }
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
      `}</style>

      <section>
        <h2>🧑‍💻 O mnie</h2>
        <p>
          Cześć! Nazywam się <strong>Hubert Topolski</strong> i jestem pasjonatem technologii, programowania i cyberbezpieczeństwa. Obecnie studiuję Elektronikę i Telekomunikację na Politechnice Gdańskiej, kontynuując swoją drogę po ukończeniu Technikum Elektronicznego nr 1 w Gdyni na kierunku Technik Programista.
        </p>
        <p>
          W trakcie edukacji zdobyłem praktyczne doświadczenie podczas staży w firmach takich jak <strong>Aplitt sp. z o.o.</strong>, gdzie pracowałem nad zapleczem aplikacji webowych w Node.js, oraz w <strong>RCI Gdynia</strong>, gdzie rozwijałem kompetencje z zakresu infrastruktury sieciowej i cyberbezpieczeństwa.
        </p>
        <p>
          Posiadam certyfikaty potwierdzające moje umiejętności programistyczne (Python, SQL, Problem Solving - Hackerrank) oraz kwalifikacje zawodowe INF-03 i INF-04, obejmujące projektowanie, tworzenie i administrowanie aplikacjami oraz bazami danych.
        </p>
        <p>
          Cenię sobie analizę, kreatywność i ciągły rozwój — to właśnie te wartości kierują mnie w pracy nad projektami i w nauce nowych technologii.
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>
          🚀 Aktualne projekty :{' '}
          <a href="/projects" style={{ fontSize: '1rem', marginLeft: 8 }}>
            zobacz więcej
          </a>
        </h2>
        <h3>🌱 Living and Working in a Sustainable World (Erasmus+)</h3>
        <p>
          Brałem udział w dwóch międzynarodowych projektach Erasmus+ w latach 2021–2022 oraz 2022–2023, pełniąc rolę lidera zespołu. Celem było stworzenie aplikacji promujących zrównoważony rozwój. Projekt wymagał współpracy międzykulturowej, zarządzania zespołem oraz pracy nad funkcjonalnością i estetyką aplikacji webowych.
        </p>
        <p>
          🔗{' '}
          <a
            href="https://sites.google.com/view/lwsw20212023/home-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strona projektu
          </a>
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>📜 Certyfikaty i osiągnięcia</h2>
        <ul>
          <li>🎖️ Problem Solving (Intermediate) – Hackerrank</li>
          <li>🎖️ Python (Basic) – Hackerrank</li>
          <li>🎖️ SQL (Advanced) – Hackerrank</li>
          <li>📘 Szkolenie „Nierelacyjne bazy danych (MongoDB)”</li>
          <li>🧰 INF-03 – Tworzenie i administrowanie aplikacjami i bazami danych</li>
          <li>🛠️ INF-04 – Projektowanie, programowanie i testowanie aplikacji</li>
          <li>🏅 Finalista Igrzysk Akademii ETI na Politechnice Gdańskiej (2024)</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
