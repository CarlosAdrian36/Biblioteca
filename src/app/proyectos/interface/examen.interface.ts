
export class parrafo {

  private _pregunta: string;
  private _correcta: number;
  private _respuestas: string[];
  constructor(pregunta: string, correcta: number, respuestas: string[]) {

    this._pregunta = pregunta
    this._correcta = correcta
    this._respuestas = respuestas
  }
  public get respuestas() : string[] {
    return this._respuestas;
  }
  public set respuestas(v: string[]) {
    this._respuestas = v;
  }
  public get correcta(): number {
    return this._correcta
  }
  public set correcta(v: number) {
    this._correcta = v;
  }
  public get verpregunta(): string {
    return this._pregunta;
  }
  public set pregunta(v: string) {
    this._pregunta = v;
  }
}
export class oracion{

  private _oracion: string[];
  private _respuestas: string[];
  private _correcta: string;

  constructor(oracion :  string [], respuesta: string[], correcta:string ){
    this._oracion = oracion;
    this._respuestas = respuesta;
    this._correcta = correcta;
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
  
  public get getCorrecta () : string {
    return this._correcta
  }
  
  public set setCorrecta(v : string) {
    this._correcta = v;
  }
  
  
  
  
  
  



}




