import { InjectionToken } from '@angular/core';

export interface NavSection {
  label: string;
  path: string;
}

export const navSections: NavSection[] = [
  { label: 'À propos', path: '/home' },
  { label: 'Expérience', path: '/experiences' },
  { label: 'Contact', path: '/contact' },
];

export const NAV_SECTIONS = new InjectionToken<NavSection[]>('NAV_SECTIONS');
