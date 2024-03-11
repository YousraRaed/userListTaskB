import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: MainPageComponent, canActivate: [AuthGuard] },

  {
    path: '**',
    redirectTo: 'users',
  },
];
