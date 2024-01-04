import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {

  public nameLower: string = 'octavio'
  public nameUpper: string = 'OCTAVIO'
  public fullName: string = 'oCtaViO lUpeRÓn'

  public date: Date = new Date();


}
