import { ExamenBase } from "./Examen";

export class ExamenEtapa {
  EtapaExamenId: number;
  EtapaId: number;
  Examen: ExamenBase = new ExamenBase(null);
  Valor: number;
  Posicion: number;
  Estado: boolean;

  constructor(EE){
    if (EE) {
      this.EtapaExamenId = EE.EtapaExamenId;
      this.EtapaId = EE.EtapaId;
      this.Examen = new ExamenBase(EE.Examen);
      this.Valor = EE.Valor;
      this.Posicion = EE.Posicion;
      this.Estado = EE.Estado;
    }
  }
}
