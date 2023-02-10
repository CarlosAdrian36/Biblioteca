
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

export class Reactivo extends Examen {
  
  private _IdReactivo: number;
  

  constructor( idReactivo : number, idExamen : number){
    super(idExamen)
    this._IdReactivo = idReactivo;
  }

}
export class Respuestas   {

  private _respuestas: string[]
  constructor( respuesta: string[] ){
    this._respuestas = respuesta
  }


}
export class Pregunta{

  

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
