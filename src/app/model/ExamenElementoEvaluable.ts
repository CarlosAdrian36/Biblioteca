import { ExamenBase } from "./Examen";

export class ExamenElementoEvaluable{
  ElementoId?: number;
  EvidenciaExamenId?: number;
  ActividadExamenId?: number;
  Examen: ExamenBase = new ExamenBase(null);
  Estado?: boolean;

  constructor(EE){
    if (EE) {
      this.ElementoId = EE.ElementoId;
      this.EvidenciaExamenId = EE.EvidenciaExamenId ? EE.EvidenciaExamenId : null;
      this.ActividadExamenId = EE.ActividadExamenId ? EE.ActividadExamenId : null;
      this.Examen = new ExamenBase(EE.Examen);
      this.Estado = EE.Estado;
    }
  }
}
