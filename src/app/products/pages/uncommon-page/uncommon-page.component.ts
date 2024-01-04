import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Octavio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient(){
    this.name = 'Melissa'
    this.gender = 'female'
  }


  //i18Plural

  public clients: string [] = ['Maria' , 'Pedro', 'Ivan', 'Melvin', 'Melissa', 'Robert', 'Octavio', 'Gabriel', 'Wilfred']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  public deleteClient(): void{
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name: 'Octavio',
    age: '21',
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap: ', value))
    );

  public promiseValue = new Promise<string>( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
      this.person.name = 'Otro nombre'
    }, 3500)
  })

}
