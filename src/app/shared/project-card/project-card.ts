import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../i18n/i18n';
import { CATEGORY_LABELS, Project } from '../../data/projects';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  protected readonly i18n = inject(I18n);
  readonly project = input.required<Project>();
  protected readonly categoryLabels = CATEGORY_LABELS;
}
