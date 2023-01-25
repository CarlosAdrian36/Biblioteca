import { Component } from '@angular/core';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component {
  contenido: string = ''

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
  
  construir(linea: string[]){

    for (let i = 0; i < linea.length; i++) {
      const lineas = linea[i].split(this.expReg);
      for (let j = 0; j < lineas.length; j++) {
        const element = lineas[j];
        
      }
      const respuestas = linea[i].match(this.expReg);
      console.log(lineas);
      console.log(respuestas);
    }
    



    


  }




}
