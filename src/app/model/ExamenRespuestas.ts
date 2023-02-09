export class ExamenRespuestas {
  ExamenId: number;
  RespuestaVerdaderoFalso: ExamenRespuestaContestar[] = [];
  RespuestaOpcionMultiple: ExamenRespuestaContestar[] = [];
  RespuestaMultiple: ExamenRespuestaContestar[] = [];
  RespuestaAbierta: ExamenRespuestaContestar[] = [];
  RespuestaRelacionar: ExamenRespuestaContestar[] = [];

  constructor(EC){
    this.ExamenId = this.ExamenId ? EC.ExamenId : null;
    this.RespuestaVerdaderoFalso = EC.RespuestaVerdaderoFalso ? EC.RespuestaVerdaderoFalso.map(R => new ExamenRespuestaContestar(R)) : [];
    this.RespuestaOpcionMultiple = EC.RespuestaOpcionMultiple ? EC.RespuestaOpcionMultiple.map(R => new ExamenRespuestaContestar(R)) : [];
    this.RespuestaMultiple = EC.RespuestaMultiple ? EC.RespuestaMultiple.map(R => new ExamenRespuestaContestar(R)) : [];
    this.RespuestaAbierta = EC.RespuestaAbierta ? EC.RespuestaAbierta.map(R => new ExamenRespuestaContestar(R)) : [];
    this.RespuestaRelacionar = EC.RespuestaRelacionar ? EC.RespuestaRelacionar.map(R => new ExamenRespuestaContestar(R)) : [];
  }
}

export class ExamenRespuestaContestar{
  ReactivosId: number;
  Respuesta: any;
  ReactivoRespuestaRelacionarIzquierdaId?: number;
  ReactivoRespuestaRelacionarDerechaId?: number;

  constructor(ERC){
    if(ERC){
      this.ReactivosId = ERC.ReactivosId;
      this.Respuesta = ERC.Respuesta;
      this.ReactivoRespuestaRelacionarIzquierdaId = ERC.ReactivoRespuestaRelacionarIzquierdaId;
      this.ReactivoRespuestaRelacionarDerechaId = ERC.ReactivoRespuestaRelacionarDerechaId;
    }
  }
}
