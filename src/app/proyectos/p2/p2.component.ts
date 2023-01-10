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
  styleUrls: ['./p2.component.css']
})

export class P2Component {
  
  @Output() texto = new EventEmitter<string>();
  contenido = '';
  Pregunta : string[] = [];
  Respuestas : string[] = [];
  Respuesta : string[] = [];

  
  
  AbrirArchivo(doc : Event){
    const loc =  doc.target
    this.leerArchivo( loc )

  }
  leerArchivo( value : any ){
    const file : File = value.files[0];
    const leer = new FileReader();
    leer.onload = () => {
      const contenido = leer.result
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
    for( let line: number = 0; line < sentencias.length - 1; line++){
      console.log(line + "-->" + sentencias[line]);

      if( sentencias[line].startsWith('¿')){
        this.Pregunta.push(sentencias[line])
      }else if( sentencias[line].startsWith('A.')){
        this.Respuestas.push(sentencias[line])
      }else if( sentencias[line].startsWith('B.')){
        this.Respuestas.push(sentencias[line])
      }else if( sentencias[line].startsWith('C.')){
        this.Respuestas.push(sentencias[line])
      }else if(sentencias[line].startsWith('D.')){
        this.Respuestas.push(sentencias[line])
      }else if(sentencias[line].startsWith('ANSWER')){
        this.Respuesta.push(sentencias[line])
      }
    }
    console.log('*******PREGUTNAS*******');
    console.log(this.Pregunta);
    console.log('*******RESPUESTAS*******');
    console.log( this.Respuestas);
    console.log('*******RESPUESTA*******')
    console.log(this.Respuesta)
  }
}