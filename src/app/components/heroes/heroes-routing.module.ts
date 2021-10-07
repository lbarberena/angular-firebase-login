import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { AdminHeroesComponent } from './admin-heroes/admin-heroes.component';
import { DetailHeroesComponent } from './detail-heroes/detail-heroes.component';

const routes: Routes = [{
  path: '',
  component: HeroesComponent,
  children: [
    {
      path: 'list-heroes',
      component: ListHeroesComponent,
    },
    {
      path: 'new-hero',
      component: AdminHeroesComponent,
    },
    {
      path: 'edit-hero/:heroId',
      component: AdminHeroesComponent,
    },
    {
      path: 'view-hero/:heroId',
      component: DetailHeroesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {
}
