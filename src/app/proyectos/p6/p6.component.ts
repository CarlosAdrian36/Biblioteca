import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ButtonsheetComponent } from '../components/buttonsheet/buttonsheet.component';
import { Examen, Reactivo, Pregunta, Respuesta } from '../interface/Examen.PR.class';

@Component({
  selector: 'app-p6',
  templateUrl: './p6.component.html',
  styleUrls: ['./p6.component.css']
})
export class P6Component {

  contenido: string = ''
  correcta = ''

  AbrirArchivo(doc: Event) {
    const loc = doc.target
    this.leerArchivo(loc)
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
  leerArchivo(value: any) {
    const leer = new FileReader();
    leer.onload = () => {
      // this.Oraciones = []
      const contenido = leer.result ;
      this.separar(contenido);
    }
    leer.readAsText(value);
  }
  
  

  separar(txt: any | null ) {
    const mensaje: string = txt
    // console.log(mensaje)

    const react = mensaje.split(/\r\n\r\n/g);
    // console.log(react);
    this.ConstrucciondelObjeto(react)
  }



  ConstrucciondelObjeto(react: string[]){
    
    for (let i = 0; i < react.length; i++) {
      const reactivo = new Reactivo();
      const element = react[i];
      const preguntalimpia = element.split(/\r\n|{.+/).filter(Boolean);
      // console.log(preguntalimpia)
      const pregunta = new Pregunta(0,'');
      pregunta.setPregunta = preguntalimpia.toString()
      pregunta.setIdPregunta = i;

      reactivo.setPreguntaReactivo = pregunta


      const respuestas = element.split(/¿\w+.+|.+¿\w+.+|\r\n|{|}|~|\s+~|\s=|=/).filter(Boolean);
      // console.log(respuestas);
      let arrRespuestas : Respuesta[]= [];
      let bandera = 0;
      let bandera2 = 0;

      for (let x = 0; x < respuestas.length; x++) {
        let respuesta = new Respuesta('',0);
        const element = respuestas[x];
        respuesta.setRespuesta = element;
        respuesta.setIndice = x;
        
        arrRespuestas.push(respuesta);
      }
      reactivo.setRespuestas = arrRespuestas;
      // console.log(reactivo);
      // console.log(element);
      for (let j = 0; j < element.length; j++) {
        const p = element[j];
        if( p === '{' ){
          bandera = j;
        }
        if(p === '}'){
          bandera2 = j;
        }
      }

      const respuestaCorrecta = new Respuesta('',0);
      const sinpregunta = element.substring(bandera+1,bandera2);
      // console.log(sinpregunta);

      const RegEx = (/ ?~\w* +\w+ +\w+|~\w+ \w+|~\w+/gm);
      const correcta = sinpregunta.split(RegEx)
      const strCorrecta = sinpregunta.split(RegEx).toString();

      let strv = strCorrecta.split(/=/).filter(Boolean).toString();
      respuestaCorrecta.setRespuesta = strv
      // console.log(strv)
      // console.log(correcta)

      for (let s = 0; s < correcta.length; s++) {
        const element = correcta[s];
        if(element.includes('=')){
          const valor = s;

          respuestaCorrecta.setIndice = s;
        }
        
      }
      reactivo.setRespuestaCorrecta = respuestaCorrecta;
      reactivo.setIdReactivo = i;
      console.log(reactivo)
      
      
    }

  }
  

}
