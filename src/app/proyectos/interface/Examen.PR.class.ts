
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
    private _IdExamen ?: number;
    public Nombre: string = '';
    public PuntosRpobatorios: number = 0;
    public Reactivos: Reactivo[]=[];
  
    // constructor (IdExamen : number, Reactivos?: Reactivo[]){
    //   this._IdExamen = IdExamen;
    //   this.Reactivos = Reactivos ? Reactivos : [];
    // }
  
    constructor( idExamen?: number ){
      this._IdExamen  = idExamen;
    }
  
  
    public get getIdExamen() : number| undefined {
      return this._IdExamen;
    }
  
  
    public set setIdExamen(v : number) {
      this._IdExamen = v;
    }
  
    public get getReactivos() : Reactivo[] {
      return this.Reactivos
    }
  
  
    public set setReactivos(v : Reactivo[]) {
      this.Reactivos = v;
    }
  
  
  }
  
  export class Reactivo   {
  
    private _IdReactivo: number;
    private _Pregunta : Pregunta;
    private _Respuestas : Respuesta[];
    private _RespuestaCorrecta: Respuesta;
    private _RespuestaSeleccionada: Respuesta | null = null;
    this: any;
  
    constructor(data?: any|null) {// idReactivo : number, idExamen : number , respuestas : Respuesta[], pregunta : Pregunta, correcta: Respuesta){
      // super(idExamen)
      this._IdReactivo = data?.idReactivo;
      this._Respuestas = data?.respuestas;
      this._Pregunta = data?.pregunta;
      this._RespuestaCorrecta = data?.correcta;
      this._RespuestaSeleccionada = data?.seleccionada
    }
  
    get isContestada(): boolean {
      return this._RespuestaCorrecta ? true : false;
    }
    get isCorrecta(): boolean {
  
       return (this.getRespuestaCorrecta.getIndice === this.getRespuestaSeleccionada?.getIndice) ?  true : false
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
  
    public set setPreguntaReactivo(v : Pregunta) {
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
  
  export class Pregunta  {
  
    private _pregunta: string;
    private _idPregunta: number;
    constructor(idpregunta:number, oracion : string ){
      this._idPregunta = idpregunta;
      this._pregunta = oracion
    }
  
  
    public get getPregunta() : string {
      return this._pregunta;
    }
  
    public set setPregunta(v : string ) {
      this._pregunta = v;
    }
  
  
    public get getIdPregunta1() : number  {
      return this._idPregunta;
    }
  
  
    public set setIdPregunta(v : number) {
      this._idPregunta = v;
    }
  
  
  
  
  
  
  }
  
  export class Respuesta {
    private _indice : number;
    private _respuesta: string
    constructor( respuesta: string, indice : number ){
      this._respuesta = respuesta
      this._indice = indice
    }
  
    public get getRespuesta() : string {
      return this._respuesta
    }
  
  
    public set setRespuesta(v : string) {
      this._respuesta = v;
    }
  
  
    public get getIndice() : number {
      return this._indice
    }
  
  
    public set setIndice(v : number) {
      this._indice = v;
    }
  
  
  
  
  }
  
  
  
  