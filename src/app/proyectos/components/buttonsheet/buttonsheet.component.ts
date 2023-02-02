import { Component } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-buttonsheet',
  templateUrl: './buttonsheet.component.html',
  styles: [
  ]
})
export class ButtonsheetComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<MatBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
