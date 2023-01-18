import { Component, EventEmitter, Output } from '@angular/core';
import { startWith } from 'rxjs';
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
    // const sentencias = mensaje.split(/\r\n|\r /) 
    const lineas = mensaje.split(/\r\n|\r /);
    console.log(lineas)
    this.construir(lineas)
    
    // this.construirLista(sentencias)
  }

  construir( linea: string[] ){

    for( let i : number = 0; i < linea.length; i++ ){
      console.log( i + " --> " + linea[i])

      if(linea[i] === ""){
        const miParrafo = new parrafo("","",[] );
        console.log("****************************" + i)
        let y: number 
        for( y = i  ; y>= i - 6; y--  ){
          if( linea[y] === ""){
            console.log("No hice nada")
          }else{

            if(linea[y].startsWith('¿')){
              miParrafo.spregunta = linea[y]
            }else{
              if(linea[y].startsWith('ANSWER')){
                const str = linea[y]
                const newstr = str.slice(8)
                miParrafo.value = newstr
              }else{
                const arr : Array<string> = []

                 arr.push(linea[i]);
                console.log(arr)

              }
            }

          }
        
        }
        console.log(miParrafo)
        console.log( "Fin del for")
        
        
        
      }
      
    }
    
    
    
  }
}

