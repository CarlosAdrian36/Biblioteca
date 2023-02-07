import { Component } from '@angular/core';
import { oracion } from '../interface/oracion.class';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ButtonsheetComponent } from '../components/buttonsheet/buttonsheet.component';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.css']
})
export class P5Component {
  contenido: string = ''
  correcta = ''

  AbrirArchivo(doc: Event) {
    const loc = doc.target
    this.leerArchivo(loc)
  }
  leerArchivo(value: any) {
    //const file: File = value.files[0];
    const leer = new FileReader();
    leer.onload = () => {
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
      const ob = new oracion ([],[],[],'','');

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
      respuestas2 = respuestas.split(/{|}|~|\s+~|\s=|=/);
      respuestaslimpias = respuestas2.filter(Boolean);
      ob.setRespuestas = respuestaslimpias;
      correctas = respuestas.split(/{| ?~\w+| =|=/);
      correctasLimpias = correctas.filter(Boolean);
      ob.setCorrecta = correctasLimpias;
    }
    console.log(this.Oraciones);

  }
  seleccionado(oracion: oracion, res: string, event: any){
    // console.log(event +"Eso es el evento");
    //this.txt = res
    oracion.seleccionada = event.selected ? res : null
    // console.log(oracion)
  }
  constructor(private bottomSheet : MatBottomSheet){}

  open(){
    this.bottomSheet.open(ButtonsheetComponent).afterDismissed().subscribe(
    result => {
      // console.log(result);
      if(result) {
        this.leerArchivo(result);
      }
    });

    
  }
  condicion : number = 0
  evaluar(oraciones: oracion[]){
    oraciones.forEach(element => {
      // console.log(element.seleccionada)
      // console.log(element.getCorrecta)
      let r1 : string | null;
      let r2 : string;
      r1 = element.seleccionada;
      r2 = element.getCorrecta.toString();

      console.log(r1,r2)

      r1 === r2  ? element.evaluacion = 'true' : element.evaluacion = 'false'


      
      
      
    });
    console.log(oraciones)

  }

}
