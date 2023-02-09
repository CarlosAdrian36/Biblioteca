export class ExamenResultado {
  ExamenId: number;
  CalificacionObtenida: number;
  CalificacionOtorgada: number;
  constructor(E){
    if(E){
      this.ExamenId  = E.ExamenId;
      this.CalificacionObtenida = E.CalificacionObtenida;
      this.CalificacionOtorgada = E.CalificacionOtorgada;
    }
  }
}
