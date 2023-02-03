import { Component, ViewChild } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { Event } from '@angular/router';

@Component({
  selector: 'app-buttonsheet',
  templateUrl: './buttonsheet.component.html',
  styleUrls: ['./buttonsheet.component.css']
})
export class ButtonsheetComponent {
  @ViewChild('fileInput') xx : any;
  constructor(private _bottomSheetRef: MatBottomSheetRef<MatBottomSheet>) {}
doc : any;



  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    console.log(event)
  }


  AbrirArchivo(doc: Event ){
    
    console.log(doc)

  }
  

}
