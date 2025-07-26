import React, { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
  language: string;
  license?: string;
  updated?: string;
  url?: string;
}

interface GithubRepoInfo {
  pushed_at: string;
}

const projects: Project[] = [
  {
    name: 'i686-kernel',
    description: 'Template kernel repo for future projects',
    language: 'C',
    license: 'GNU GPL v3.0',
    updated: '2 days ago',
  },
  {
    name: 'i686-tetris',
    description: 'Just simple tetris game on 80x25 with basic stuff🙄🙄🙄',
    language: 'C',
    license: 'GNU GPL v3.0',
    updated: '2 days ago',
  },
  {
    name: 'AMS',
    description: 'AMS OS is a simple and minimalistic self-writed OS for own research purposes.',
    language: 'C++',
    updated: 'Aug 18, 2024',
  },
  {
    name: 'let-him-cook--kernel-',
    description: 'Super Ultra Sigma Gigachad OSDev Repo: collection of books, notes and insights on embedded and non-embedded systems.',
    language: 'TypeScript',
    updated: 'Oct 18, 2024',
  },
  {
    name: 'SpacePlanner',
    description: 'Tool for generating city maps with roads, forests, buildings, infrastructure, sidewalks, and more.',
    language: 'C++',
    updated: 'Jul 2, 2024',
  },
  {
    name: 'SoftSimulate',
    description: 'Simple code for simulating soft bodies using Verlet integration.',
    language: 'JavaScript',
    updated: 'Jun 14, 2024',
  },
  {
    name: 'OwnLFS',
    description: 'My own LFS automated and partly-automated scripts for install LFS and tools for x64 and arm64',
    language: 'Shell',
    license: 'GNU GPL v3.0',
    updated: 'Feb 22, 2024',
  },
  {
    name: 'LFS-Creator',
    description: 'React Typescript for creating makefile to create own Linux LFS',
    language: 'TypeScript',
    license: 'MIT',
    updated: 'Feb 11, 2024',
  },
  {
    name: 'colorscheme',
    description: 'Simple bash script to print table of colors in terminal',
    language: 'bash',
    updated: '',
  },
];

const fetchLastUpdate = async (repoUrl: string): Promise<string | null> => {
  try {
    const parts = repoUrl.replace('https://github.com/', '').split('/');
    const owner = parts[0];
    const repo = parts[1];

    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!res.ok) return null;

    const data: GithubRepoInfo = await res.json();
    return data.pushed_at;
  } catch {
    return null;
  }
};

const Projects: React.FC = () => {
  const [updates, setUpdates] = useState<Record<string, string>>({});

  useEffect(() => {
    projects.forEach(async ({ name, url }) => {
      const repoUrl = url || `https://github.com/majster247/${name}`;
      const lastUpdate = await fetchLastUpdate(repoUrl);
      if (lastUpdate) {
        setUpdates((prev) => ({ ...prev, [name]: new Date(lastUpdate).toLocaleDateString() }));
      }
    });
  }, []);

  return (
    <main
      style={{
        maxWidth: 900,
        margin: '2rem auto',
        padding: '2rem 2rem 3rem 2rem', // padding-bottom 3rem, by więcej miejsca u dołu
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#111',
        color: '#eee',
        borderRadius: 12,
        boxShadow: '0 0 25px rgba(255,255,255,0.05)',
        animation: 'fadeIn 1s ease forwards',
        opacity: 0,
      }}
    >
      <style>{`
        a {
          color: #61dafb;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #21a1f1;
          text-decoration: underline;
        }
        h2 {
          color: #61dafb;
          border-bottom: 2px solid #61dafb;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem; /* zwiększony odstęp */
        }
        .card {
          background: #222;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.6);
          padding: 1.25rem 1.5rem 2rem 1.5rem; /* większy padding-bottom */
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(33, 161, 241, 0.6);
        }
        .card h3 {
          margin: 0 0 0.6rem 0;
          color: #61dafb;
          font-weight: 600;
          font-size: 1.2rem;
        }
        .card h3 small {
          font-weight: normal;
          color: #888;
          margin-left: 0.5rem;
          font-size: 0.9rem;
        }
        .description {
          flex-grow: 1;
          margin: 0 0 1rem 0;
          font-size: 1rem;
          color: #ccc;
          line-height: 1.4;
        }
        .meta {
          font-size: 0.85rem;
          color: #777;
          margin-bottom: 1rem;
        }
        .btn-github {
          align-self: flex-start;
          background-color: #24292f;
          color: #61dafb;
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(33, 161, 241, 0.3);
          transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
        }
        .btn-github:hover {
          background-color: #61dafb;
          color: #111;
          box-shadow: 0 6px 20px rgba(33, 161, 241, 0.6);
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

      <h2>🚧 Projekty</h2>
      <div className="grid">
        {projects.map(({ name, description, language, license, url }, i) => {
          const githubUrl = url || `https://github.com/majster247/${name}`;
          const updated = updates[name] || 'Ładuję...';

          return (
            <article key={i} className="card" tabIndex={0} aria-label={`Projekt ${name}`}>
              <h3>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                  {name}
                </a>
                <small>({language})</small>
              </h3>
              <p className="description">{description}</p>
              <p className="meta">
                {license && <span>Licencja: {license} | </span>}
                <span>Aktualizacja: {updated}</span>
              </p>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
                aria-label={`Zobacz projekt ${name} na GitHub`}
              >
                Zobacz na GitHub
              </a>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
