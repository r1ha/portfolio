import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { personalInfo, PERSONAL_INFO } from './info/personal-info';
import { timelineEntries, TIMELINE_INFO } from './info/timeline-info';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: PERSONAL_INFO, useValue: personalInfo },
    { provide: TIMELINE_INFO, useValue: timelineEntries },
  ],
};
