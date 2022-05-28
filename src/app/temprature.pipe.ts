import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature'
})
export class TempraturePipe implements PipeTransform {

  transform(value: number, unit: string): unknown {
    if(value){
      if(unit === "C"){
        var temprature = (value-32)/1.8000
        return temprature
      }
      else if(unit === "F"){
        var temprature = (value*1.8000)+32
        return temprature;
      }
    }
    return;
  }

}
