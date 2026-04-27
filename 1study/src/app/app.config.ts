import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideTransloco } from '@jsverse/transloco';
import { translocoConfig } from '../core/i18n/transloco.config';
import { TranslocoLoaderService } from '../core/i18n/transloco.loader.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: translocoConfig,
      loader: TranslocoLoaderService,
    }),
  ],
};

// src/core/i18n/transloco.config.ts
