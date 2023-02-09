import { ExamenRespuestaContestar } from "./ExamenRespuestas";

export class ExamenReactivo {
  ReactivosId: number;
  ExamenId: number;
  TipoReactivoId: number;
  Descripcion: string;
  RetroalimentacionCorrecta: string;
  RetroalimentacionIncorrecta: string;
  Respuesta: ExamenRespuestaContestar;
  Respuestas: ExamenRespuestaContestar[];
  Posicion: number;
  Valor: number;
  Tiempo: number;
  Bloque: number;
  Estado: boolean;

  constructor(ER) {
    if (ER) {
      this.ReactivosId = ER.ReactivosId;
      this.ExamenId = ER.ExamenId;
      this.TipoReactivoId = ER.TipoReactivoId;
      this.Descripcion = ER.Descripcion;
      this.RetroalimentacionCorrecta = ER.RetroalimentacionCorrecta;
      this.RetroalimentacionIncorrecta = ER.RetroalimentacionIncorrecta;
      this.Posicion = ER.Posicion;
      this.Valor = ER.Valor;
      this.Tiempo = ER.Tiempo;
      this.Bloque = ER.Bloque;
      this.Estado = ER.Estado;
      this.Respuesta = new ExamenRespuestaContestar(ER.Respuesta);
    }
  }
}
