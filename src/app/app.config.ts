import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GuideRepositoryStatic } from './infrastructure/persistence/GuideRepositoryStatic';
import { GuideRepository } from './domain/repositories/GuideRepository';

export const GUIDE_REPOSITORY = new InjectionToken<GuideRepository>('GuideRepository');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: GUIDE_REPOSITORY, useClass: GuideRepositoryStatic }
  ],
};
