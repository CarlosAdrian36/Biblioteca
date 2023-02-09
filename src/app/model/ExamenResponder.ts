import { ExamenRespuestas } from "./ExamenRespuestas";
import { ExamenReactivoRespuesta } from "./ExamenReactivoRespuesta";

export class ExamenResponder {
  Reactivos: ExamenReactivoRespuesta[] = [];
  ReactivosBloquesFaltantes: number;
  ReactivosBloquesTotales: number;
  RespuestasEstudiante: ExamenRespuestas;
  TiempoRestante: number;

  constructor(REE){
    if(REE){
      this.Reactivos = REE.Reactivos.map(R => new ExamenReactivoRespuesta(R));
      this.ReactivosBloquesFaltantes = REE.ReactivosBloquesFaltantes;
      this.ReactivosBloquesTotales = REE.ReactivosBloquesTotales;
      this.TiempoRestante = REE.TiempoRestante;
      this.RespuestasEstudiante = new ExamenRespuestas(REE.RespuestasEstudiante);
    }
  }
}
