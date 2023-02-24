import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ButtonsheetComponent } from '../components/buttonsheet/buttonsheet.component';

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
    // const lineas = mensaje.split(/.\r\n/gi);
    // console.log(mensaje)
    this.construir(mensaje)
  }

  construir(mensaje : string){
    const preguntas = mensaje.split(/\s+{.+}\s+/);
    console.log(preguntas);
    const respuestas = mensaje.split(/¿\w+.+|.+¿\w+.+/);
    console.log(respuestas)
    
  }


}
