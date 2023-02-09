import { ExamenReactivoRespuesta } from "src/app/shared/DTO/Examen";

export class ExamenReactivoRespuestaCalificacion extends ExamenReactivoRespuesta {
  Calificacion: number;
  RespuestaAbierta: any; //{EjecucionReactivoId: 0, Respuesta: null, ReactivosId: 0, Retroalimentacion: null}
  RespuestaMultiple: any[] = [];
  RespuestaOpcionMultiple: any; //{EjecucionReactivoId: 0, Respuesta: 0, ReactivosId: 0, EsCorrecta: false}
  RespuestaRelacionar: any[] = [];
  RespuestaVerdaderoFalso: any; //{EjecucionReactivoId: 0, Respuesta: true, ReactivosId: 30502, EsCorrecta: true}
  constructor(R){
    super(R);
    if(R){

    }
  }
}
