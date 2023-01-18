import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styles: [`
  .example-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}`
  ]
})
export class PaginaPrincipalComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
