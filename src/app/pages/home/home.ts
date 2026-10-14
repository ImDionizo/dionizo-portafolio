import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly i18n = inject(I18n);

  protected readonly shortcuts = [
    { path: '/proyectos', label: 'Proyectos', desc: 'Catálogo de trabajos por categoría.' },
    { path: '/perfil', label: 'Perfil & Stack', desc: 'Capas técnicas: frontend, backend e infraestructura.' },
    { path: '/laboratorio', label: 'Laboratorio', desc: 'Pruebas de concepto y experimentos.' },
  ];
}
