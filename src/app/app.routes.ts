import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { I18n } from './i18n/i18n';

// Titles resolve on navigation, so a language switch applies from the next page.
const translatedTitle = (text: string) => () => inject(I18n).t(text);

export const routes: Routes = [
  { path: '', component: Home, title: 'Dionizo' },
  {
    path: 'proyectos',
    title: translatedTitle('Proyectos · Dionizo'),
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'proyectos/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'perfil',
    title: translatedTitle('Perfil · Dionizo'),
    loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'laboratorio',
    title: translatedTitle('Laboratorio · Dionizo'),
    loadComponent: () => import('./pages/lab/lab').then((m) => m.Lab),
  },
  { path: '**', redirectTo: '' },
];
