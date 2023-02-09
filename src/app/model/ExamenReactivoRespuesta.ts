import { ExamenReactivo } from "./ExamenReactivo";

export abstract class ExamenReactivoRespuestaBase {
  ReactivosId: number;
  Estado: boolean;
  Posicion: number;
  EsCorrecta: boolean;
  constructor(ER){
    if(ER){
      this.ReactivosId = ER.ReactivosId;
      this.Posicion = ER.Posicion;
      this.EsCorrecta = ER.EsCorrecta;
      this.Estado = ER.Estado;
    }
  }
}
export class ExamenReactivoRespuesta {
  Reactivo: ExamenReactivo = new ExamenReactivo(null);
  ReactivoRespuestaVerdaderoFalso?: ExamenReactivoRespuestaVerdaderoFalso;
  ReactivoRespuestaOpcionMultiple? = [];
  ReactivoRespuestaMultiple? = [];
  ReactivoRespuestaRelacionarDerecha? = [];
  ReactivoRespuestaRelacionarIzquierda? = [];

  constructor(R){
    if(R){
      this.Reactivo = new ExamenReactivo(R.Reactivo);
      switch(R.Reactivo.TipoReactivoId){
      //Verdadero/Falso
      case 1: this.ReactivoRespuestaVerdaderoFalso = new ExamenReactivoRespuestaVerdaderoFalso(R.ReactivoRespuestaVerdaderoFalso[0] || R.ReactivoRespuestaVerdaderoFalso); break;
      //Opcion Multiple
      case 2: this.ReactivoRespuestaOpcionMultiple = R.ReactivoRespuestaOpcionMultiple.map(R => new ExamenReactivoRespuestaOpcionMultiple(R)); break;
      //Respuesta Multiple
      case 3: this.ReactivoRespuestaMultiple = R.ReactivoRespuestaMultiple.map(R => new ExamenReactivoRespuestaRespuestaMultiple(R)); break;
      //Relacionar
      case 4: this.ReactivoRespuestaRelacionarDerecha   = R.ReactivoRespuestaRelacionarDerecha.map(R => new ExamenReactivoRespuestaRelacionarDerecha(R));
              this.ReactivoRespuestaRelacionarIzquierda = R.ReactivoRespuestaRelacionarIzquierda.map(R => new ExamenReactivoRespuestaRelacionarIzquierda(R));
              break;
      }
    }
  }
}
export class ExamenReactivoRespuestaVerdaderoFalso extends ExamenReactivoRespuestaBase {
  ReactivoRespuestaVerdaderoFalsoId: number;
  Respuesta: boolean;
  TipoRespuestaVerdaderoFalsoId: number;
  constructor(R){
    if(R){
      super(R);
      this.ReactivoRespuestaVerdaderoFalsoId = R.ReactivoRespuestaVerdaderoFalsoId;
      this.Respuesta = R.Respuesta;
      this.TipoRespuestaVerdaderoFalsoId = R.TipoRespuestaVerdaderoFalsoId;
    }
  }
}
export class ExamenReactivoRespuestaOpcionMultiple extends ExamenReactivoRespuestaBase {
  ReactivoRespuestaOpcionMultipleId;
  Respuesta: string;
  constructor(R){
    if(R){
      super(R);
      this.ReactivoRespuestaOpcionMultipleId = R.ReactivoRespuestaOpcionMultipleId;
      this.Respuesta = R.Respuesta;
      // this.Respuesta =  new TextEditor().CleanFroalaEditor(R_OM.Respuesta);
    }
  }
}
export class ExamenReactivoRespuestaRespuestaMultiple extends ExamenReactivoRespuestaBase {
  ReactivoRespuestaMultipleId: number;
  Respuesta: string;
  constructor(R){
    if(R){
      super(R);
      this.ReactivoRespuestaMultipleId = R.ReactivoRespuestaMultipleId;
      this.Respuesta = R.Respuesta;
      // this.Respuesta = new TextEditor().CleanFroalaEditor(R.Respuesta);
    }
  }
}
export class ExamenReactivoRespuestaRelacionarIzquierda extends ExamenReactivoRespuestaBase {
  ReactivoRespuestaRelacionarIzquierdaId: number;
  ReactivoRespuestaRelacionarDerechaId: number;
  Izquierda: string;
  Respuesta: string;
  constructor(R){
    if(R){
      super(R);
      this.ReactivoRespuestaRelacionarIzquierdaId = R.ReactivoRespuestaRelacionarIzquierdaId;
      this.ReactivoRespuestaRelacionarDerechaId = R.ReactivoRespuestaRelacionarDerechaId;
      this.Izquierda = R.Izquierda;
      this.Respuesta = R.Izquierda;
      //this.Izquierda = new TextEditor().CleanFroalaEditor(R.Izquierda);
    }
  }
}
export class ExamenReactivoRespuestaRelacionarDerecha extends ExamenReactivoRespuestaBase {
  ReactivoRespuestaRelacionarDerechaId: number;
  Derecha: string;
  Respuesta: string;
  constructor(R){
    if(R){
      super(R);
      this.ReactivoRespuestaRelacionarDerechaId = R.ReactivoRespuestaRelacionarDerechaId;
      this.Derecha = R.Derecha;
      this.Respuesta = R.Derecha;
      // this.Derecha = new TextEditor().CleanFroalaEditor(R.Derecha);
    }
  }
}
