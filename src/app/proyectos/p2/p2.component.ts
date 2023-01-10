import { Component, EventEmitter, Output } from '@angular/core';
import { setLines } from '@angular/material/core';
interface examen{
  Pregunta: string,
  Respuestas: string,
  RespuestaCorrecta: string,
}

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styles: [
    `
    .card {
      max-width: 400px;
      margin-top: 20px;
      margin: 30px;
      width: 100%;
      
    }
    .card-content{
      max-width: 400px;
      margin-top: 20px;
      margin: 30px;
      width: 100%;
      
    }
    mat-gird-list{
      background: 0000;
    }
    `
  ]
})

export class P2Component {
  
  @Output() texto = new EventEmitter<string>();
  contenido = '';
  
  
  AbrirArchivo(doc : Event){
    const loc =  doc.target
    // console.log( loc );
    this.leerArchivo( loc )

  }
  leerArchivo( value : any ){
    const file : File = value.files[0];
    // console.log( file )
    const leer = new FileReader();
    leer.onload = () => {
      const contenido = leer.result
      // console.log( contenido  );
      this.mostrar( contenido );
      this.separar( contenido );
    }
    leer.readAsText( file );
    
  }
  mostrar( txt: any){
    this.contenido =  txt;
  }

  separar( txt : any){
    const mensaje : string = txt;
    const sentencias = mensaje.split(/\r\n|\n/);
    for( let line = 0; line < sentencias.length - 1; line++){
      console.log(line + "-->" + sentencias[line])
    }
  }
}