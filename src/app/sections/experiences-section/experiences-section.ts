import { Component } from '@angular/core';
import { SkillIcon, SkillLevel } from '../../components/skill-icon/skill-icon';

@Component({
  selector: 'app-experiences-section',
  imports: [SkillIcon],
  templateUrl: './experiences-section.html',
  styleUrl: './experiences-section.css',
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

  protected readonly skills: { name: string; image: string; level: SkillLevel }[] = [
    { name: 'Angular',    image: 'assets/skill_icons/angular.svg',    level: 'Avancé' },
    { name: 'React',      image: 'assets/skill_icons/react.svg',      level: 'Maîtrise' },
    { name: 'Python',     image: 'assets/skill_icons/python.svg',     level: 'Avancé' },
    { name: 'TypeScript', image: 'assets/skill_icons/javascript.svg', level: 'Maîtrise' },
    { name: 'Java',       image: 'assets/skill_icons/java.svg',       level: 'Maîtrise' },
    { name: 'C++',        image: 'assets/skill_icons/cpp.svg',        level: 'Maîtrise' },
    { name: 'Kafka',      image: 'assets/skill_icons/kafka.svg',      level: 'Intermédiaire' },
    { name: 'Kubernetes', image: 'assets/skill_icons/k8s.svg',        level: 'Intermédiaire' },
    { name: 'Temporal',   image: 'assets/skill_icons/temporal.svg',   level: 'Intermédiaire' },
    { name: 'SQL',        image: 'assets/skill_icons/sql.svg',        level: 'Intermédiaire' },
    { name: 'GitLab CI/CD', image: 'assets/skill_icons/gitlab.svg',   level: 'Avancé' },
    { name: 'Arduino',    image: 'assets/skill_icons/arduino.svg',    level: 'Intermédiaire' },
  ];
}
