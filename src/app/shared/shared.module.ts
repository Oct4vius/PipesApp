import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/Menu/Menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';





@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,

    PrimeNgModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
