
export abstract class ExamenRespuestaEjecucion {
  EjecucionReactivoId: number;
  ReactivosId: number;
  EsCorrecta?: boolean;
  constructor(R) {
    this.EjecucionReactivoId = R.EjecucionReactivoId;
    this.ReactivosId = R.ReactivosId;
    this.EsCorrecta = R.EsCorrecta ? R.EsCorrecta: null;
  }
}

export class ExamenReactivoRespuestaEjecucion extends ExamenRespuestaEjecucion {
  Respuesta: any; //string | boolean | number
  Retroalimentacion?: string;
  constructor(R){
    super(R);
    if(R){
      this.Respuesta = R.Respuesta;
      this.Retroalimentacion = R.Retroalimentacion ? R.Retroalimentacion : null;
    }
  }
}

export class ExamenReactivoRespuestaEjecucionRelacionar extends ExamenRespuestaEjecucion{
  ReactivoRespuestaRelacionarDerechaId: number;
  ReactivoRespuestaRelacionarIzquierdaId: number;
  constructor(R) {
    super(R);
    if(R){
      this.ReactivoRespuestaRelacionarDerechaId = R.ReactivoRespuestaRelacionarDerechaId;
      this.ReactivoRespuestaRelacionarIzquierdaId = R.ReactivoRespuestaRelacionarIzquierdaId;
    }
  }
}
