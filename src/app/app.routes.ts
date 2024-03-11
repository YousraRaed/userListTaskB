import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'users', component: MainPageComponent },
  // { path: 'user/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  // Add more routes as needed
  {
    path: '**',
    redirectTo: 'users',
  },
];
