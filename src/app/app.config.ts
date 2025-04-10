// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, withComponentInputBinding, withNavigationBehavior } from '@angular/router';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(
//       routes,
//       withComponentInputBinding(),
//       withNavigationBehavior({
//         scrollPositionRestoration: 'enabled',
//         anchorScrolling: 'enabled'
//       })
//     )
//   ]
// };


import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // or 'top' to always scroll to top
        anchorScrolling: 'enabled'
      })
    )
  ]
};
