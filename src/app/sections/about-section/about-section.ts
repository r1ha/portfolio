import { Component, inject } from '@angular/core';
import { PersonalCard } from '../../components/personal-card/personal-card';
import { Timeline } from '../../components/timeline/timeline';
import { PERSONAL_INFO } from '../../info/personal-info';
import { IconSet } from "../../components/icon-set/icon-set";

@Component({
  selector: 'app-about-section',
  imports: [PersonalCard, Timeline, IconSet],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
    protected readonly focusPoints = [
    'Navigation simple et directe',
    'Contenus clairs et hiérarchisés',
    'Base Angular facile à faire évoluer',
  ];

  protected readonly personalInfo = inject(PERSONAL_INFO);
}
