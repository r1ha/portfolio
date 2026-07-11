import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  template: `
    <section class="section-panel" id="competences">
      <div class="section-kicker">Compétences</div>
      <div class="skills-grid">
        @for (skill of skills; track skill) {
          <div class="skill-pill">{{ skill }}</div>
        }
      </div>
    </section>
  `,
})
export class SkillsSection {
  protected readonly skills = [
    'Angular',
    'TypeScript',
    'Architecture composant',
    'Accessibilité',
    'Responsive design',
    'Navigation par routes',
  ];
}
