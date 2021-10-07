import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./components/heroes/heroes.module')
      .then(m => m.HeroesModule),
  },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
