import { Routes } from '@angular/router';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { IndexViewComponent } from './views/index-view/index-view.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';
import { authResolve } from './guards/resolve-auth.guard';
import { topicResolve } from './guards/resolve-topic.guard';

export const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    canActivateChild: [noAuthGuard],
    children: [
      {
        path: 'index',
        loadComponent: () => import('./views/index-view/index-view.component').then((m) => m.IndexViewComponent),
      },
      {
        path: 'create/account',
        loadComponent: () => import('./views/create-account-view/create-account-view.component').then((m) => m.CreateAccountViewComponent),
      },
      {
        path: 'login/account',
        loadComponent: () => import('./views/login-account-view/login-account-view.component').then((m) => m.LoginAccountViewComponent),
      },
      {
        path: 'recover/account',
        loadComponent: () => import('./views/recover-account-view/recover-account-view.component').then((m) => m.RecoverAccountViewComponent),
      },
      {
        path: 'reset/account/:token',
        loadComponent: () => import('./views/reset-account-view/reset-account-view.component').then((m) => m.ResetAccountViewComponent),
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivateChild: [authGuard],
    resolve: {auth: authResolve},
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./views/dashboard-view/dashboard-view.component').then((m) => m.DashboardViewComponent),
      },
      {
        path: 'notifications',
        loadComponent: () => import('./views/notifications-view/notifications-view.component').then((m) => m.NotificationsViewComponent),
      },
      {
        path: 'schedule',
        loadComponent: () => import('./views/schedule-view/schedule-view.component').then((m) => m.ScheduleViewComponent),
      },
      {
        path: 'discussions',
        loadComponent: () => import('./views/discussions-view/discussions-view.component').then((m) => m.DiscussionsViewComponent),
      },
      {
        path: 'discussions/:id',
        loadComponent: () => import('./views/discussion-view/discussion-view.component').then((m) => m.DiscussionViewComponent),
        resolve: {auth: authResolve, topic: topicResolve},
      },
      {
        path: 'settings',
        loadComponent: () => import('./views/settings-view/settings-view.component').then((m) => m.SettingsViewComponent),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

];
