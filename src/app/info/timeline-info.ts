import { InjectionToken } from '@angular/core';

export interface TimelineEntry {
  logo?: string;
  year: string;
  title: string;
  summary: string;
  side: 'start' | 'end';
}

export const timelineEntries: TimelineEntry[] = [
  {
    logo: 'assets/organizations/polytech_white.svg',
    year: '2026',
    title: `Diplôme d'Ingénieur en Informatique
et Ingénierie Mathématique`,
    summary: 'Polytech Paris-Saclay',
    side: 'start',
  },
  {
    logo: 'assets/organizations/takima_white.svg',
    year: '2026',
    title: 'Consultant fullstack',
    summary: `Takima (ESN)
Stage de fin d'études (6 mois) en développement logiciel
Durant mon stage de fin d'études, j'ai travaillé sur le projet de refonte du site web de l'entreprise. J'ai participé à la conception et au développement de nouvelles fonctionnalités, ainsi qu'à l'amélioration de l'expérience utilisateur. J'ai également collaboré avec l'équipe marketing pour optimiser le référencement du site et augmenter sa visibilité en ligne.`,
    side: 'end',
  },
  {
    logo: 'assets/organizations/sapienza_white.svg',
    year: '2025',
    title: "Semestre d'échange Erasmus",
    summary: `Sapienza Università di Roma - Computer Science Master
Enseignements suivis et validés: Advanced Machine Learning, Quantum Computing, Biometric Systems, Automatic Verification of Intelligent Systems (Reinforcement Learning), Statistics`,
    side: 'start',
  },
  {
    logo: 'assets/organizations/inria_white.svg',
    year: '2025',
    title: 'Ingénieur recherche en IHM',
    summary: `Stage de recherche (5 mois) en visualisation de données
- Traitement du signal (FFT) pour calculer le niveau sonore à partir d'un microphone analogique
- Conception d'un algorithme de TDoA pour estimer la direction du son dans l'espace
- Simulation 3D et implémentation de visualisations des données
- Communication en équipe exclusivement en anglais dans un setting international`,
    side: 'end',
  },
  {
    year: '2015',
    title: 'Apple Watch',
    summary: 'The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services',
    side: 'start',
  },
];

export const TIMELINE_INFO = new InjectionToken<TimelineEntry[]>('TIMELINE_INFO');
