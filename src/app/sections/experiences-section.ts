import { Component } from '@angular/core';
import { SkillIcon } from '../skill-icon/skill-icon';

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

   protected readonly skills = [
    { name: 'Angular', image: 'assets/skill_icons/angular.svg', xp: 80, x: 2, y: 5, rotation: -4 },
    { name: 'React', image: 'assets/skill_icons/react.svg', xp: 70, x: 16, y: 28, rotation: 7 },
    { name: 'Python', image: 'assets/skill_icons/python.svg', xp: 85, x: 30, y: 2, rotation: -9 },
    { name: 'TypeScript', image: 'assets/skill_icons/javascript.svg', xp: 78, x: 44, y: 22, rotation: 5 },
    { name: 'Java', image: 'assets/skill_icons/java.svg', xp: 70, x: 58, y: 35, rotation: -6 },
    { name: 'C++', image: 'assets/skill_icons/cpp.svg', xp: 65, x: 72, y: 3, rotation: 10 },
    { name: 'Kafka', image: 'assets/skill_icons/kafka.svg', xp: 55, x: 86, y: 30, rotation: -7 },
    { name: 'Kubernetes', image: 'assets/skill_icons/k8s.svg', xp: 60, x: 5, y: 55, rotation: 8 },
    { name: 'Temporal', image: 'assets/skill_icons/temporal.svg', xp: 50, x: 20, y: 52, rotation: -5 },
    { name: 'SQL', image: 'assets/skill_icons/sql.svg', xp: 60, x: 38, y: 58, rotation: 12 },
    { name: 'GitLab CI/CD', image: 'assets/skill_icons/gitlab.svg', xp: 80, x: 55, y: 65, rotation: -3 },
    { name: 'Arduino', image: 'assets/skill_icons/arduino.svg', xp: 50, x: 72, y: 55, rotation: 4 },
  ];
}
