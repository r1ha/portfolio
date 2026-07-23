import { Routes } from '@angular/router';

import { AboutSection } from './sections/about-section/about-section';
import { ExperiencesSection } from './sections/experiences-section/experiences-section';
import { ContactSection } from './sections/contact-section/contact-section';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'home',
		component: AboutSection,
	},
	{
		path: 'experiences',
		component: ExperiencesSection,
	},
	{
		path: 'contact',
		component: ContactSection,
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];
