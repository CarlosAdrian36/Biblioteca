export class oracion{

    private _oracion: string[];
    private _respuestas: string[];
    private _correcta: string[];
    public seleccionada : string | null;
    public evaluacion : string;



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
