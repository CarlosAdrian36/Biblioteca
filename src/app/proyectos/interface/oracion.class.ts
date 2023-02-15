
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
}

export class Reactivo   {

  private _IdReactivo: number;
  private _Pregunta : Pregunta;
  private _Respuestas : Respuesta[];
  private _Respuesta: Respuesta | null = null;
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
}
class Pregunta  {

private oracion: string[] = [];
private _idPregunta : number;
constructor(idpregunta: number){
  this._idPregunta = idpregunta;
}

}

 class Respuesta {

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
