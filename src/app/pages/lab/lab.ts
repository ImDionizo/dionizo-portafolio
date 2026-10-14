import { Component, inject } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.html',
  styleUrl: './lab.css',
})
export class Lab {
  protected readonly i18n = inject(I18n);
}
