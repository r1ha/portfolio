import { Component, inject } from '@angular/core';
import { PersonalCard } from '../personal-card/personal-card';
import { Timeline } from '../timeline/timeline';
import { PERSONAL_INFO } from '../info/personal-info';
import { IconSet } from "../icon-set/icon-set";

@Component({
  selector: 'app-about-section',
  imports: [PersonalCard, Timeline, IconSet],
  template: `
    <div class="flex flex-col items-center gap-5">
      <app-personal-card></app-personal-card>

      <div class="flex flex-col">
        <h2>Construire des expériences web lisibles, rapides et utiles.</h2>
        <p>
          {{ personalInfo.bio }}
        </p>
      </div>

      <app-icon-set></app-icon-set>

      <app-timeline></app-timeline>
    </div>
  `,
})
export class AboutSection {
  protected readonly focusPoints = [
    'Navigation simple et directe',
    'Contenus clairs et hiérarchisés',
    'Base Angular facile à faire évoluer',
  ];

  protected readonly personalInfo = inject(PERSONAL_INFO);
}
