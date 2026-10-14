import { Component, computed, inject, signal } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { CATEGORY_LABELS, Category, PROJECTS } from '../../data/projects';
import { ProjectCard } from '../../shared/project-card/project-card';

type Filter = Category | 'all';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly i18n = inject(I18n);

  protected readonly filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'web', label: CATEGORY_LABELS.web },
    { value: 'sysadmin', label: CATEGORY_LABELS.sysadmin },
    { value: 'gamedev', label: CATEGORY_LABELS.gamedev },
  ];

  protected readonly active = signal<Filter>('all');
  protected readonly visible = computed(() => {
    const filter = this.active();
    return filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  });
}
