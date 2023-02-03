import { Component, ViewChild } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';

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


  AbrirArchivo(doc: any){

    console.log(doc.target.files[0]);
    this._bottomSheetRef.dismiss(doc.target.files[0]);

  }


}
