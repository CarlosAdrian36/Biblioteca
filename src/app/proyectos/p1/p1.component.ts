import { Component } from '@angular/core';
import * as moment from 'moment';

moment.locale('es')


interface Comparacion {
  fecha1: string
  fecha2: string
  diff:string
}

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component {

  Comparativas : Comparacion[] = [

  ]


  nuevaComparativa : Comparacion = {
    fecha1: '',
    fecha2: '',
    diff: ''
  }

  datechange(event :any){
    
    console.log( event.target.value)

  }

calcular(){
  const fechaInicial = this.nuevaComparativa.fecha1
  const fechaI = moment(fechaInicial)

  const fechaFinal = this.nuevaComparativa.fecha2;
  const fechaF = moment(fechaFinal)

  let resDf = fechaF.from(fechaI)
  
  console.log( resDf)

  this.nuevaComparativa.diff = resDf;

  this.Comparativas.push(this.nuevaComparativa)
  this.nuevaComparativa ={
    fecha1: '',
    fecha2: '',
    diff: ''
  }
}

  cambiar(event: any){
    console.log( event.target.value)
  }

}
