export type Category = 'web' | 'sysadmin' | 'gamedev';

export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  stack: string[];
  url?: string;
  details?: string[];
  media?: ProjectMedia[];
}

export const CATEGORY_LABELS: Record<Category, string> = {
  web: 'Web',
  sysadmin: 'SysAdmin / Redes',
  gamedev: 'Gamedev / Unity',
};

// Placeholder data: replace with real projects.
export const PROJECTS: Project[] = [
  {
    slug: 'dionizo',
    title: 'Dionizo',
    summary: 'Marca y portafolio personal de Dionizo, desarrollado con Angular y TypeScript.',
    category: 'web',
    stack: ['Angular', 'TypeScript', 'CSS'],
  },
  {
    slug: 'reverse-proxy-docker',
    title: 'Reverse proxy con Docker',
    summary: `Servidor VPS con arquitectura contenerizada en Docker, Nginx como Reverse Proxy, certificados automatizados con Let's Encrypt y enrutamiento avanzado seguro.`,
    category: 'sysadmin',
    stack: ['Linux', 'Nginx', 'Docker', 'Security', 'Networking', 'VPS'],
  },
  {
    slug: 'torture',
    title: 'Prototipo de juego: Torture',
    summary:
      'Videojuego de terror en primera persona desarrollado en Unity, con mecánicas de exploración y resolución de acertijos.',
    category: 'gamedev',
    stack: ['Unity', 'C#', 'Pixel Art', 'Aseprite', 'Animation'],
  },
];
