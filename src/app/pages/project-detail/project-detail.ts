import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../i18n/i18n';
import { CATEGORY_LABELS, PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  // Bound from the :slug route param (withComponentInputBinding).
  readonly slug = input.required<string>();
  protected readonly i18n = inject(I18n);
  protected readonly project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));
  protected readonly categoryLabels = CATEGORY_LABELS;
}
