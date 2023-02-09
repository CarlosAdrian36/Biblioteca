export class ExamenCalificacion {
  CalificacionObtenida: boolean;
  ValorCalificacionObtenida: number;
  CalificacionOtorgada: boolean;
  ValorCalificacionOtorgada: number;
  Estado: boolean;

  constructor(E) {
    if (E) {
      this.CalificacionObtenida = E.CalificacionObtenida;
      this.ValorCalificacionObtenida = E.ValorCalificacionObtenida;
      this.CalificacionOtorgada = E.CalificacionOtorgada;
      this.ValorCalificacionOtorgada = E.ValorCalificacionOtorgada;
      this.Estado = E.Estado;
    }
  }
}
