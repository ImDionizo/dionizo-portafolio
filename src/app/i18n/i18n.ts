import { Injectable, effect, signal } from '@angular/core';

export type Lang = 'es' | 'en';

// Spanish is the source language: the Spanish text is the key.
// Only English needs entries; a missing key falls back to the Spanish text.
const EN: Record<string, string> = {
  // Navbar
  Inicio: 'Home',
  Proyectos: 'Projects',
  Perfil: 'Profile',
  Laboratorio: 'Lab',
  'Cerrar menú': 'Close menu',
  'Abrir menú': 'Open menu',
  Principal: 'Main',
  Idioma: 'Language',

  // Titles
  'Proyectos · Dionizo': 'Projects · Dionizo',
  'Perfil · Dionizo': 'Profile · Dionizo',
  'Laboratorio · Dionizo': 'Lab · Dionizo',

  // Home
  'Ingeniero en computación · Frontend, Linux e infraestructura':
    'Computer engineer · Frontend, Linux & infrastructure',
  'Construyo interfaces claras y sistemas que se mantienen solos: código limpio, servidores bien configurados y redes seguras.':
    'I build clear interfaces and systems that keep themselves running: clean code, well-configured servers and secure networks.',
  Próximamente: 'Coming soon',
  'SaaS y herramientas en desarrollo': 'SaaS and tools in development',
  'Estoy preparando herramientas propias. Aquí aparecerán cuando estén listas.':
    "I'm preparing my own tools. They'll show up here once they're ready.",
  'Catálogo de trabajos por categoría.': 'Catalog of work by category.',
  'Perfil & Stack': 'Profile & Stack',
  'Capas técnicas: frontend, backend e infraestructura.':
    'Technical layers: frontend, backend and infrastructure.',
  'Pruebas de concepto y experimentos.': 'Proofs of concept and experiments.',
  Secciones: 'Sections',

  // Projects list
  Todos: 'All',
  'Filtrar por categoría': 'Filter by category',
  'SysAdmin / Redes': 'SysAdmin / Networking',
  'Stack tecnológico': 'Tech stack',
  'Ver detalle →': 'View details →',

  // Project detail
  '← Volver a proyectos': '← Back to projects',
  'Capturas y GIFs de este proyecto: próximamente.':
    'Screenshots and GIFs of this project: coming soon.',
  'Ver proyecto →': 'View project →',
  'Proyecto no encontrado.': 'Project not found.',

  // Projects data
  'Marca y portafolio personal de Dionizo, desarrollado con Angular y TypeScript.':
    'Personal brand and portfolio of Dionizo, built with Angular and TypeScript.',
  'Reverse proxy con Docker': 'Reverse proxy with Docker',
  "Servidor VPS con arquitectura contenerizada en Docker, Nginx como Reverse Proxy, certificados automatizados con Let's Encrypt y enrutamiento avanzado seguro.":
    "VPS server with a containerized architecture on Docker, Nginx as reverse proxy, automated certificates with Let's Encrypt and secure advanced routing.",
  'Prototipo de juego: Torture': 'Game prototype: Torture',
  'Videojuego de terror en primera persona desarrollado en Unity, con mecánicas de exploración y resolución de acertijos.':
    'First-person horror game developed in Unity, with exploration and puzzle-solving mechanics.',

  // Profile
  'Ingeniero en computación. Trabajo en capas: la interfaz, la lógica del servidor y la infraestructura que las sostiene.':
    'Computer engineer. I work in layers: the interface, the server logic and the infrastructure that holds them up.',
  Movil: 'Mobile',
  'Infraestructura y Redes': 'Infrastructure & Networking',
  'CSS moderno': 'Modern CSS',
  'Arquitecturas de red seguras': 'Secure network architectures',

  // Lab
  'Pruebas de concepto, herramientas y experimentos de ingeniería.':
    'Proofs of concept, tools and engineering experiments.',
  'Aún no hay experimentos publicados.': 'No experiments published yet.',
};

@Injectable({ providedIn: 'root' })
export class I18n {
  readonly lang = signal<Lang>('en');

  constructor() {
    effect(() => {
      document.documentElement.lang = this.lang();
    });
  }

  t(text: string): string {
    return this.lang() === 'en' ? (EN[text] ?? text) : text;
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }
}
