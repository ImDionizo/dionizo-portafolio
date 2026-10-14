import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18n, Lang } from '../../i18n/i18n';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly i18n = inject(I18n);

  protected readonly links = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/proyectos', label: 'Proyectos', exact: false },
    { path: '/perfil', label: 'Perfil', exact: false },
    { path: '/laboratorio', label: 'Laboratorio', exact: false },
  ];

  // Names stay in their own language so each option is recognizable.
  protected readonly langs: { code: Lang; name: string; flag: string }[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  // Only used below 640px, where the links collapse behind the hamburger button.
  protected readonly open = signal(false);

  protected close(): void {
    this.open.set(false);
  }
}
