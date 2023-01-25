
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





