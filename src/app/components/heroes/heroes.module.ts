import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { AdminHeroesComponent } from './admin-heroes/admin-heroes.component';
import { DetailHeroesComponent } from './detail-heroes/detail-heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import {HeroesService} from '../../services/heroes.service';



@NgModule({
  declarations: [
    HeroesComponent,
    ListHeroesComponent,
    AdminHeroesComponent,
    DetailHeroesComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    HeroesService,
  ]
})
export class HeroesModule { }
