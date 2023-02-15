
/*
export class Examen(Conjunto de Reactivo)
export class Reactivo(Pregunta y Resupetsas)
export class Respuesta<Type>

Opcional
export class Pregunta

*/


export class Examen  {
  private _IdExamen : number;

  constructor (IdExamen : number){
    this._IdExamen = IdExamen;
  }
}

export class Reactivo   {
  
  private _IdReactivo: number;
  private _Pregunta : Pregunta;
  private _Respuesta : Respuestas[];

  constructor( idReactivo : number, idExamen : number , respuesta : Respuestas[], pregunta : Pregunta){
    // super(idExamen)
    this._IdReactivo = idReactivo;
    this._Respuesta = respuesta;
    this._Pregunta = pregunta;
  }
}
class Pregunta  {

private _idPregunta : number;
constructor(idpregunta: number){
  this._idPregunta = idpregunta;
}

}

 class Respuestas {

  private _respuestas: string[]
  constructor( respuesta: string[] ){
    this._respuestas = respuesta

  }
}











interface Reactivo1 extends Pregunta1{
  idReactivo : number;

}

interface Pregunta1 extends Respuestas1{
  idPregunta : number;
}
interface Respuestas1 extends Correcta1 {
  idRespuestas : number;
}

interface Correcta1{
  idCorrecta: number
}


class generic extends Reactivo{
 
  

}

























export class oracion{

    private _oracion: string[];
    private _respuestas: string[];
    private _correcta: string[];
    public seleccionada : string | null;
    public evaluacion : string | null;

    constructor(oracion :  string [], respuesta: string[], correcta:string[], seleccionada: string, evaluacion : string ){
      this._oracion = oracion;
      this._respuestas = respuesta;
      this._correcta = correcta;
      this.seleccionada = seleccionada;
      this.evaluacion = evaluacion;
    }

    public get getOracion() : string[] {
      return this._oracion;
    }

    public set setOracion(v : string[]) {
      this._oracion = v;
    }

    public get getRespuestas() : string[] {
      return this._respuestas
    }

    public set setRespuestas(v : string[]) {
      this._respuestas = v;
    }

    public get getCorrecta () : string[] {
      return this._correcta
    }

    public set setCorrecta(v : string[]) {
      this._correcta = v;
    }

  }
