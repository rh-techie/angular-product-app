import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes),
];
