import { Routes } from '@angular/router';

import { AboutSection } from './sections/about-section';
import { ExperiencesSection } from './sections/experiences-section';
import { SkillsSection } from './sections/skills-section';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'a-propos',
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
		path: 'skills',
		component: SkillsSection,
	},
	{
		path: '**',
		redirectTo: 'a-propos',
	},
];
