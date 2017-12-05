/**
 * Main entry point for the app.
 * Compiles the application and bootstraps the application's root module (AppModule) to run in the browser.
 */
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/root/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const promise = platformBrowserDynamic().bootstrapModule(AppModule);
