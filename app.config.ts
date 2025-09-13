import { ApplicationConfig, provideExperimentalZonelessChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './src/app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    //PWA 
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    //animaciones
    provideAnimationsAsync(),
    //routes
    provideRouter(routes, withViewTransitions({ skipInitialTransition: true, onViewTransitionCreated(transitionInfo) { }, })),
    //browsermodules
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, ReactiveFormsModule),
    // cliente Http
    provideHttpClient(withFetch()),
    provideClientHydration()
    //proveedor prime ng 
    // providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } }
  
  ],
};
