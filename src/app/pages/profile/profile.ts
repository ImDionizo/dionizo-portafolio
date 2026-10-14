import { Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  protected readonly i18n = inject(I18n);


  // Placeholder content: confirm the backend items before publishing.
  protected readonly layers = [
    {
      title: 'Frontend',
      items: ['AngularJs/Angular', 'Javascript/TypeScript', 'CSS moderno'],
      highlight: false,
    },
    { title: 'Backend', items: ['Go', 'Java', 'Spring Boot'], highlight: false },
    { title: 'Movil', items: ['Kotlin', 'Flutter', 'Android'], highlight: false },
    {
      title: 'Infraestructura y Redes',
      items: ['Linux', 'Nginx', 'Docker', 'Arquitecturas de red seguras'],
      highlight: true,
    },
  ];
}
