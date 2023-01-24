import { Component } from '@angular/core';
import { parrafo } from '../interface/examen.interface';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})
export class P3Component {
  // @Output() texto = new EventEmitter<string>();
  letras : Array< string > = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]

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
  examen : parrafo[] = [];
  pregunta : number = 0

  construir (linea : string []){
    for( let i : number = 0; i < linea.length; i++){
      if(linea[i].startsWith('¿')){
        this.pregunta = i
      }
      if(linea[i].startsWith('ANSWER')){
        const miParrafo = new parrafo("",0,[]);
        const arr : Array<string> = [];
        let y : number;
        for(y = i; y >= this.pregunta  ; y-- ){
          if(linea[y].startsWith('¿') ){

            miParrafo.pregunta = linea[y];
          }else{
            if(linea[y].startsWith('ANSWER')){
              const str = linea[y];
              const newstr = str.slice(8);
              for(let l: number = 0; l < this.letras.length; l++ ){

                if (newstr === this.letras[l]){
                  miParrafo.correcta = l
                }
              }
            }else{

              const str1 = linea[y];
              const newstr1 = str1.slice(3);
              arr.push(newstr1)
            }

          }
        }
        arr.filter(Boolean)
        miParrafo.respuestas = arr.reverse();
        console.log( miParrafo );
        this.examen.push(miParrafo);


      }
    }
    console.log(this.examen)
  }


  cambio($event: MouseEvent){
    console.log( "e")
  }


}
