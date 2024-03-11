import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import {
  defaultInterpolationFormat,
  I18NextModule,
  I18NEXT_SERVICE,
  ITranslationService,
} from 'angular-i18next';

import i18nextLanguageDetector from 'i18next-browser-languagedetector';
import { enError } from './error/en.error';
import { enTranslation } from './translation/en.translation';
import { arError } from './error/ar.error';
import { arTranslation } from './translation/ar.translation';

const I18NEXT_RESOURCES = {
  en: {
    error: enError,
    translation: enTranslation,
  },
  ar: {
    error: arError,
    translation: arTranslation,
  },
};

export function appInit(i18next: ITranslationService) {
  return () =>
    i18next
      .use(i18nextLanguageDetector)
      .init({
        supportedLngs: ['en', 'ar'],
        fallbackLng: 'en',
        debug: true,
        returnEmptyString: true,
        ns: ['translation', 'error'],
        resources: I18NEXT_RESOURCES,
        cleanCode: true,
        interpolation: {
          format: I18NextModule.interpolationFormat(defaultInterpolationFormat),
          escapeValue: false,
        },
        detection: {
          order: ['querystring', 'localStorage'],
          lookupLocalStorage: 'i18nextLanguage',
          lookupQuerystring: 'lang',
        },
      })
      .then(() => {
        console.log('Detected language:', i18next.language);
        console.log('Loaded resources:', i18next.services.resourceStore.data);
      })
      .catch((error) => {
        console.error('Error occurred during initialization:', error);
      });
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];