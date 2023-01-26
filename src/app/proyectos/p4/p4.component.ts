import { Component } from '@angular/core';
import { oracion } from '../interface/oracion.class';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component {
  contenido: string = ''
  correcta = ''
  AbrirArchivo(doc: Event) {
    const loc = doc.target
    this.leerArchivo(loc)
  }
  leerArchivo(value: any) {
    const file: File = value.files[0];
    const leer = new FileReader();
    leer.onload = () => {
      const contenido = leer.result;
      this.mostrar(contenido);
      this.separar(contenido);
    }
    leer.readAsText(file);
  }

  mostrar(txt: any) {
    this.contenido = txt;
  }
  
  separar(txt: any) {
    const mensaje: string = txt;
    const lineas = mensaje.split(/.\r\n/gi);
    // console.log(lineas)
    this.construir(lineas)
  }
  expReg = new RegExp(/{.*}+/gi)
  expRegL = new RegExp(/~|{|}/)
  expRegR = new RegExp(/~|=|{|}/)
  Oraciones : oracion[]= [];
  construir(linea: string[]){

    for (let i = 0; i < linea.length; i++) {
      const lineaOracion = new oracion([],[],[]);
      const arrOracion : Array<string> = [];
      const arrRespuestas : Array<string> = [];
      const lineas = linea[i].split(this.expReg);
      for (let j = 0; j < lineas.length; j++) {
        arrOracion.push(lineas[j]);
      }
      lineaOracion.setOracion = arrOracion
      const respuestas = linea[i].match(this.expReg);
      for (let x = 0; x < respuestas!.length; x++) {
        const sinparentesis = respuestas![x].split(this.expRegL);
        const sinparentesis1 = respuestas![x].split(this.expRegR);
        for (let t = 0; t < sinparentesis.length; t++) {
          
          if(sinparentesis[t].startsWith('=')){
            const resp = sinparentesis[t].split(this.expRegR);
            const clear1 = resp.filter(Boolean);
            lineaOracion.setCorrecta =  clear1
            
          }
          
        }
        const clean = sinparentesis1.filter(Boolean);
        
        for (let l = 0; l < clean.length; l++) {
          arrRespuestas.push( clean[l]);
          
        }
        lineaOracion.setRespuestas = arrRespuestas;
      }
    
      // lineaOracion.setRespuestas = arrRespuestas
      
      this.Oraciones.push(lineaOracion);
    }
    console.log(this.Oraciones);
    
    
    
    
    
    
    
    
  }
  

}
