import { InjectionToken } from '@angular/core';

export interface TimelineSection {
  year: string;
  title: string;
  summary: string;
  logo?: string;
  logoAlt?: string;
  logoClass?: string;
}

export const timelineSections: TimelineSection[] = [
  {
    year: '2026',
    title: "Diplôme d'Ingénieur en Informatique\net Ingénierie Mathématique",
    summary: 'Polytech Paris-Saclay',
    logo: 'assets/organizations/polytech_white.svg',
    logoAlt: 'Polytech Paris-Saclay',
    logoClass: 'w-1/2',
  },
  {
    year: '2026',
    title: 'Consultant fullstack',
    summary: `Takima (ESN)\nStage de fin d'études (6 mois) en développement logiciel\n\nDurant mon stage de fin d'études, j'ai travaillé sur le projet de refonte du site web de l'entreprise. J'ai participé à la conception et au développement de nouvelles fonctionnalités, ainsi qu'à l'amélioration de l'expérience utilisateur. J'ai également collaboré avec l'équipe marketing pour optimiser le référencement du site et augmenter sa visibilité en ligne.`,
    logo: 'assets/organizations/takima_white.svg',
    logoAlt: 'Takima',
    logoClass: 'w-1/3 p-5',
  },
  {
    year: '2025',
    title: "Semestre d'échange Erasmus",
    summary: `Sapienza Università di Roma - Computer Science Master\nEnseignements suivis et validés: Advanced Machine Learning, Quantum Computing, Biometric Systems, Automatic Verification of Intelligent Systems (Reinforcement Learning), Statistics`,
    logo: 'assets/organizations/sapienza_white.svg',
    logoAlt: 'Sapienza Università di Roma',
    logoClass: 'w-1/2 p-5',
  },
  {
    year: '2025',
    title: 'Ingénieur recherche en IHM',
    summary: `Stage de recherche (5 mois) en visualisation de données\n\n- Traitement du signal (FFT) pour calculer le niveau sonore à partir d'un microphone analogique\n- Conception d'un algorithme de TDoA pour estimer la direction du son dans l'espace\n- Simulation 3D et implémentation de visualisations des données\n- Communication en équipe exclusivement en anglais dans un setting international`,
    logo: 'assets/organizations/inria_white.svg',
    logoAlt: 'Inria',
    logoClass: 'w-1/3 p-5',
  }
];

export const TIMELINE_SECTIONS = new InjectionToken<TimelineSection[]>('TIMELINE_SECTIONS');
