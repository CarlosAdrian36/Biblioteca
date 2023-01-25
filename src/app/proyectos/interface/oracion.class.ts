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