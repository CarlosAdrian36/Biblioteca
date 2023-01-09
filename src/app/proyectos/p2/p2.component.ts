import { Component } from '@angular/core';

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
      
    }
    mat-gird-list{
      background: 0000;
    }
    `
  ]
})

export class P2Component {


  AbrirArchivo(event: Event){
    const archivo = event.target;
    this.leerArchivo(archivo);
  }
  leerArchivo(doctxt: any){
    const file = doctxt.files[0];
    const lector = new FileReader();
    lector.onload = function(e){
      var texto = lector.result;
      console.log(texto);
      
      return texto;
    }
    lector.readAsText(file)

  }
  
  // leerArchivo($event: any){
  //   this.readThis($event.target)
    
  // }
  // readThis(inputValue: any){
  //   var file:File = inputValue.files[0];
  //   var myReader: FileReader = new FileReader();
  //   myReader.onloadend = function(e){
  //     const contenido =  myReader.result;
  //     console.log( contenido )
  //   }
  //   console.log( file)
  //   myReader.readAsText(file)
  // }





}