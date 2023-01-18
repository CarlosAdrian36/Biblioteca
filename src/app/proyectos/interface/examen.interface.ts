
export class parrafo {

  private _pregunta: string;
  private _correcta: string;
  private _respuestas: string[];
  constructor(pregunta: string, correcta: string, respuestas: string[]) {

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





  public get value(): string {
    return this._correcta
  }


  public set value(v: string) {
    this._correcta = v;
  }



  public get pregunta(): string {
    return this._pregunta;
  }
  public set spregunta(v: string) {
    this._pregunta = v;
  }

}


