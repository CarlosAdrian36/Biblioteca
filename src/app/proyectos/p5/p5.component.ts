import { Component } from '@angular/core';
import { oracion, Reactivo, Examen, Respuesta, Pregunta } from '../interface/oracion.class';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ButtonsheetComponent } from '../components/buttonsheet/buttonsheet.component';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.css']
})
export class P5Component {
  contenido: string = ''
  correcta = ''

  AbrirArchivo(doc: Event) {
    const loc = doc.target
    this.leerArchivo(loc)
  }
  leerArchivo(value: any) {
    const leer = new FileReader();
    leer.onload = () => {
      this.Oraciones = []
      const contenido = leer.result;
      this.mostrar(contenido);
      this.separar(contenido);
    }
    leer.readAsText(value);
  }

  mostrar(txt: any) {
    this.contenido = txt;
  }

  separar(txt: any) {
    const mensaje: string = txt;
    const lineas = mensaje.split(/.\r\n/gi);
    this.construir(lineas)
  }

  Oraciones : oracion[]= [];

  Examen !: Examen[] ;
  examen = new Examen();

  construir(oracionCompleta: string[]){


    let bandera = 0;
    let bandera2 = 0;
    let indexx : number = 0
    let respuestas : string;
    let respuestas2 : string[];
    let respuestaslimpias : string[];
    let correctas : string[];
    let correctasLimpias : string[];
    let arrdeactivos : Reactivo[] = [];
    for (let i = 0; i < oracionCompleta.length; i++) {
      const reactivo = new Reactivo ([]); //Instanciando la clase Reactivo por cada pregunta

      const lineaindividual = oracionCompleta[i];
      let arrOraciones = lineaindividual.split(/{.+}/);

      const pregunta = new Pregunta( 0,[]); // Instanciando la clase Pregunta

      pregunta.setIdPregunta = i;
      pregunta.setOracion = arrOraciones;
      reactivo.setPregunta = pregunta; //Metemos la clase Pregunta al parametro reactivo.setPregunta



      const ob = new oracion ([],[],[],'','');
      ob.setOracion = arrOraciones;
      this.Oraciones.push(ob);

      for (let x = 0; x < lineaindividual.length; x++) {
        const element = lineaindividual[x];
        if(element === '{'){
          bandera = x
        }
        if(element === '}'){
          bandera2 = x
        }
      }
      reactivo.setIdReactivo = i

      respuestas = lineaindividual.substring(bandera+1,bandera2);
      respuestas2 = respuestas.split(/{|}|~|\s+~|\s=|=/);
      respuestaslimpias = respuestas2.filter(Boolean);

      ob.setRespuestas = respuestaslimpias;

      let arrrespuesta: Respuesta[] = [];

      for (let j = 0; j < respuestaslimpias.length; j++) {
        let lasRespuestas = new Respuesta('',0)
        const element = respuestaslimpias[j];
        lasRespuestas.setRespuesta = element;
        lasRespuestas.setIndice = j

        arrrespuesta.push(lasRespuestas)

      }
      reactivo.setRespuestas =arrrespuesta



      correctas = respuestas.split(/{| ?~\w+| =|=/);
      correctasLimpias = correctas.filter(Boolean);
      ob.setCorrecta = correctasLimpias;

      const respuestaCorrecta = new Respuesta('',0);

      let arr = respuestas.split(/~\w+| ~\w+\S/)
      let am = arr.filter(Boolean).toString();
      let strvalue = am.split(/=/).filter(Boolean).toString();

      respuestaCorrecta.setRespuesta = strvalue

      let valor!:number;
      const caracter = '='

      let con = respuestas.split(/~| \s{2}/)
      console.log(arr);
      for (let j = 0; j < con.length; j++) {

        const element = arr[j];


        if(element.includes(caracter)){
          valor = j

          respuestaCorrecta.setIndice = valor

        }

      }

      reactivo.setRespuestaCorrecta = respuestaCorrecta
      // console.log(reactivo)
      arrdeactivos.push(reactivo)
      // console.log(arrdeactivos)

    }
    this.examen.Nombre = 'Este es el primer nomber';
    this.examen.setIdExamen = 1;
    this.examen.PuntosRpobatorios = 70;
    this.examen.setReactivos = arrdeactivos
    console.log(this.examen)

  }

  seleccionado(oracion: oracion, res: string, event: any){
    oracion.seleccionada = event.selected ? res : null
  }
  seleccionada(Respuesta: Reactivo, res: Respuesta, event: any){
     Respuesta.setRespuestaSeleccionada = event.selected ? res : null
     console.log(Respuesta)
  }
  constructor(private bottomSheet : MatBottomSheet){}

  open(){
    this.bottomSheet.open(ButtonsheetComponent).afterDismissed().subscribe(
    result => {
      if(result) {

        this.leerArchivo(result);
      }
    });

  }
  // deshabilitar : boolean = false
  condicion : number = 0
  evaluar(oraciones: oracion[]){
    this.deshabilitar = true
    oraciones.forEach(element => {

      let r1 : string | null;
      let r2 : string;
      r1 = element.seleccionada;
      r2 = element.getCorrecta.toString();


      r1 === r2  ? element.evaluacion = 'true' : element.evaluacion = 'false'
    });
    // console.log(oraciones)

  }
  deshabilitar : boolean = false

  evaluacion(Examen : Examen){
    this.deshabilitar = true


  }




  opcion: boolean | null = null
  resetear(){
    // this.opcion = true
    this.opcion = null
    // console.log(this.opcion);
    this.deshabilitar = false;
    this.Oraciones.forEach(element => {
      element.seleccionada = null;
      element.evaluacion = null;
    });
    // console.log(this.opcion);


  }

}
