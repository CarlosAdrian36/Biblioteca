
/*
export class Examen(Conjunto de Reactivo)
export class Reactivo(Pregunta y Resupetsas)
export class Respuesta<Type>

Opcional
export class Pregunta



Examen<Examen> {
 -  Reactivos<Reactivo[]>: [
    <Reactivo>{
      - RespuestaSeleccionada<Respuesta>
      - RespuestaCorrecta<Respuesta>
      - Pregunta<Pregunta>
      - Respuestas<Respuesta[]>: [
        <Respuesta>{

        },
        <Respuesta>{

        }
        <Respuesta>{

        }
      ]
    },
    <Reactivo>{
      -
      - Pregunta<Pregunta>
      - Respuestas<Respuesta[]>: [
        <Respuesta>{

        }
      ]
    },
    <Reactivo>{
      -
      - Pregunta<Pregunta>
      - Respuestas<Respuesta[]>: [
        <Respuesta>{

        }
      ]
    }
  ]
}
*/


export class Examen  {
  private _IdExamen : number;
  public Nombre: string = '';
  public PuntosRpobatorios: number = 0;
  public Reactivos: Reactivo[] = [];

  constructor (IdExamen : number, Reactivos?: Reactivo[]){
    this._IdExamen = IdExamen;
    this.Reactivos = Reactivos ? Reactivos : [];
  }

  
  public get getIdExamen() : number {
    return this._IdExamen;
  }

  
  public set setIdExamen(v : number) {
    this._IdExamen = v;
  }

}

export class Reactivo   {

  private _IdReactivo: number;
  private _Pregunta : Pregunta;
  private _Respuestas : Respuesta[];
  private _RespuestaSeleccionada: Respuesta | null = null;
  private _RespuestaCorrecta: Respuesta;

  constructor(data?: any|null) {// idReactivo : number, idExamen : number , respuestas : Respuesta[], pregunta : Pregunta, correcta: Respuesta){
    // super(idExamen)
    this._IdReactivo = data?.idReactivo;
    this._Respuestas = data?.respuestas;
    this._Pregunta = data?.pregunta;
    this._RespuestaCorrecta = data?.correcta;
  }

  get isContestada(): boolean {
    return this._RespuestaCorrecta ? true : false;
  }
  get isCorrecta(): boolean {
    return true;
  }
  
  public get getIdReactivo() : number {
    return this._IdReactivo
  }
  public set setIdReactivo(v : number) {
    this._IdReactivo = v;
  }
  
  public get getPregunta() : Pregunta {
    return this._Pregunta
  }
  
  public set setPregunta(v : Pregunta) {
    this._Pregunta = v;
  }

  
  public get getRespuestas() : Respuesta[] {
    return this._Respuestas;
  }
  
  public set setRespuestas(v : Respuesta[]) {
    this._Respuestas = v;
  }
  
  public get getRespuestaSeleccionada() : Respuesta | null {
    return this._RespuestaSeleccionada;
  }

  
  public set setRespuestaSeleccionada(v : Respuesta | null) {
    this._RespuestaSeleccionada = v;
  }
  
  
  public get getRespuestaCorrecta() : Respuesta {
    return this._RespuestaCorrecta;
  }

  public set setRespuestaCorrecta(v : Respuesta) {
    this._RespuestaCorrecta = v;
  }
}

class Pregunta  {

  private _oracion: string[];
  private _idPregunta : number;
  constructor(idpregunta: number, oracion: string [] ){
    this._idPregunta = idpregunta;
    this._oracion = oracion
  }

  
  public get getOracion() : string[] {
    return this._oracion;
  }
  
  public set setOracion(v : string[]) {
    this._oracion = v;
  }

  
  public get getIdPregunta() : number {
    return this._idPregunta;
  }

  
  public set setIdPregunta(v : number) {
    this._idPregunta = v;
  }
  
  
  
  


}

 class Respuesta {

  private _respuesta: string[]
  constructor( respuesta: string[] ){
    this._respuesta = respuesta

  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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





