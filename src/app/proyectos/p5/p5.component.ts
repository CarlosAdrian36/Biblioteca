import { Component } from '@angular/core';
import { oracion } from '../interface/oracion.class';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.css']
})
export class P5Component {
  contenido: string = ''
  correcta = ''
  txt = ''

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

  Oraciones : oracion[]= [];
  construir(oracionCompleta: string[]){
    
    
    let bandera = 0;
    let bandera2 = 0;
    let respuestas : string;
    let respuestas2 : string[];
    let respuestaslimpias : string[];
    let correctas : string[];
    let correctasLimpias : string[];
    for (let i = 0; i < oracionCompleta.length; i++) {
      const lineaindividual = oracionCompleta[i];
      let arrOraciones = lineaindividual.split(/{.+}/);
      const ob = new oracion ([],[],[],'');
      
      ob.setOracion = arrOraciones;
      this.Oraciones.push(ob);

      for (let x = 0; x < lineaindividual.length; x++) {
        const element = lineaindividual[x];
        if(element === '{'){
          bandera = x 
          // console.log(bandera);
        }
        if(element === '}'){
          bandera2 = x 
        }
      }
      respuestas = lineaindividual.substring(bandera,bandera2);
      respuestas2 = respuestas.split(/{|}|~|\s=|=/);
      respuestaslimpias = respuestas2.filter(Boolean);
      ob.setRespuestas = respuestaslimpias;
      correctas = respuestas.split(/{| ?~\w+| =|=/);
      correctasLimpias = correctas.filter(Boolean);
      ob.setCorrecta = correctasLimpias; 
    }
    console.log(this.Oraciones);

  }
  seleccionado( res: string , i : number){
    this.txt = res
  }
  

}