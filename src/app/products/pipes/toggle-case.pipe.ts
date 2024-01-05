import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false ): string {


    return toUpper ? value.toUpperCase() : value.toLowerCase()

    // return value.toUpperCase() === value ? value.toLowerCase() : value.toUpperCase()
  
  }
}
