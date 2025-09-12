import { ApplicationConfig, importProvidersFrom, isDevMode, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]

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
    provideClientHydration(),
    //proveedor prime ng 
    //providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } }})
  ],




};
