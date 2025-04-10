// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// export const routes: Routes = [
//     {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full',
//     },
//     {
//         path: 'home',
//         component: HomeComponent
//     },
//     {
//         path: 'howItWorks',
//         component: HomeComponent
//     },
//     {
//         path: 'whyUs',
//         component: HomeComponent
//     },
//     {
//         path: 'reviews',
//         component: HomeComponent
//     },
//     {
//         path: 'pricing',
//         component: HomeComponent
//     },
//     {
//         path: 'dashboard',
//         component: DashboardComponent
//     },
//     {
//         path: '**',
//         component: NotFoundComponent
//     }

// ];


import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'howItWorks', component: HomeComponent },
      { path: 'whyUs', component: HomeComponent },
      { path: 'reviews', component: HomeComponent },
      { path: 'pricing', component: HomeComponent },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
      // You can add nested routes like:
      // { path: 'settings', component: SettingsComponent }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
