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
      const contenido = leer.result;
      this.mostrar(contenido);
      this.separar(contenido);
    }
    leer.readAsText(value);
  }

  mostrar(txt: any) {
    this.contenido = txt;
  }

  separar(txt: any ) {
    
    const mensaje= txt.split(/\r\n/).filter(Boolean);
    // console.log(mensaje)
    this.construir(mensaje)

  }

examen = new Examen();

construir(mensaje : string[]){
  // const linea = mensaje.split(/\r\n/).filter(Boolean);
  let contador: number = 0
  
  for (let i = 0; i < mensaje.length; i++) {
    
    const element = mensaje[i];
    
    let reactivo  = new Reactivo ();
    
    if(i % 2 === 0 ){
        const pregunta = new Pregunta (0,'');
        pregunta.setIdPregunta = contador;
        pregunta.setOracion = element
        contador++
      }else{
        // const respuesat = new Respuesta
      }
    }



































    

  //   const preguntas = mensaje.split(/\s+{.+}\s+/).filter(Boolean);
  //   console.log(preguntas);
  //   const respuestas = mensaje.split(/¿\w+.+|.+¿\w+.+/);
  //   // console.log(respuestas)
    
  }


}
