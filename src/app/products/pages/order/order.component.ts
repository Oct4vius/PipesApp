
import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.type';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent { 

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ]

  public toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder( value: keyof Hero ) {
    this.orderBy = value
  }

}
