import { Component, EventEmitter, Output } from '@angular/core';
import { parrafo } from '../interface/examen.interface';


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})

export class P2Component {

  @Output() texto = new EventEmitter<string>();


  contenido = '';

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
    const lineas = mensaje.split(/\r\n|\r /);
    console.log(lineas)
    this.construir(lineas)
    
  }
  examen : parrafo[] = []

  construir( linea: string[] ){

    for( let i : number = 0; i < linea.length; i++ ){
      if(linea[i] === ""){
        const miParrafo = new parrafo("","",[] );
        const arr : Array<string> = [];
        let y: number;
        for( y = i  ; y>= i - 6; y--  ){
          if( linea[y] === ""){
          }else{
            if(linea[y].startsWith('¿')){
              miParrafo.spregunta = linea[y];
            }else{
              if(linea[y].startsWith('ANSWER')){
                const str = linea[y];
                const newstr = str.slice(8);
                miParrafo.value = newstr;
              }else{
                const str1 = linea[y];
                const newstr1 = str1.slice(3);
                const reverse = arr.push(newstr1)
                
              }
            }
          }
        }
        miParrafo.respuestas = arr.reverse()
        console.log(miParrafo)
        this.examen.push(miParrafo)
      }
    }
    console.log(this.examen)
  }

  
}

