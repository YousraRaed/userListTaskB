import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HttpClientModule } from '@angular/common/http';

import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { REST_CLIENT_SERVICES } from '../app/shared/outbound/rest-client-services';
import { UsersEffects } from '../app/shared/store/effects/users.effects';
import { AuthEffects } from '../app/shared/store/effects/auth.effects';

import { reducers } from '../app/shared/store/reducers/app.reducer';
import { I18NextModule } from 'angular-i18next';
import { I18N_PROVIDERS } from '../app/shared/internationalization/i18next-configuration';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      HttpClientModule,
      EffectsModule.forRoot([UsersEffects, AuthEffects]),
      StoreModule.forRoot(reducers, {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
        },
      }),
      I18NextModule.forRoot()
    ),
    ...REST_CLIENT_SERVICES,
    ...I18N_PROVIDERS,

    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
};
