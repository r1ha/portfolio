import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences-section',
  template: `
    <section class="section-panel" id="experiences">
      <div class="section-kicker">Expériences</div>
      <div class="timeline">
        @for (experience of experiences; track experience.title) {
          <article class="timeline-item">
            <div class="timeline-meta">{{ experience.period }}</div>
            <div class="section-card">
              <h3>{{ experience.title }}</h3>
              <p class="section-subtitle">{{ experience.company }}</p>
              <p>{{ experience.description }}</p>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ExperiencesSection {
  protected readonly experiences = [
    {
      period: '2024 - Aujourd\'hui',
      title: 'Développeur frontend',
      company: 'Portfolio personnel',
      description:
        'Mise en place d\'une page portfolio orientée sections, avec navigation router et structure maintenable.',
    },
    {
      period: '2022 - 2024',
      title: 'Conception d\'interfaces',
      company: 'Projets web',
      description:
        'Création de pages produits, de landing pages et de prototypes à forte contrainte de lisibilité.',
    },
  ];
}
