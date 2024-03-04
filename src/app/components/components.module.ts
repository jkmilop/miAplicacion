import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroeComponent
  ],
  exports: [
    HeroesComponent,
    HeroeComponent

  ],
  imports: [
    CommonModule,
    IonicModule

  ]
})
export class ComponentsModule { }
