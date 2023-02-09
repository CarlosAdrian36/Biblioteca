
export class ExamenBase {
  ExamenId: number;
  Nombre: string;
  EstadoExamenId: number;
  FechaInicio: any;
  FechaFin: any;
  Estado: boolean;
  constructor(E){
    if(E){
      this.ExamenId = E.ExamenId;
      this.Nombre = E.Nombre;
      this.FechaInicio = E.FechaInicio;
      this.FechaFin = E.FechaFin;
      this.EstadoExamenId = E.EstadoExamenId;
      this.Estado = E.Estado;
    }
  }
}

export class Examen extends ExamenBase {
  CursoId: number;
  Instrucciones: string;
  Tiempo: number;
  PuntosAprobatorios: number;
  TipoRetroalimentacionAlumnoId: number;
  TipoTiempoExamenId: number;
  TipoIncisoRespuestaId: number;
  FechaCreacion: Date;
  FechaModificacion: Date;
  Navegable: boolean = false;
  OrdenReactivosAleatorio: boolean = false;
  PorBloque: boolean = false;
  HabilitarExamenIndividual: boolean = false;
  VerDetalleCalificacionPreviaFinalizacion: boolean = false;
  Reactivos? = [];
  ElementoExamen: any;
  EtapaExamen: any;
  EsVinculado: boolean;
  EsBloqueado: boolean;
  EditarFechas: boolean;

  constructor(E){
    super(E);
    if(E) {
        this.CursoId = E.CursoId;
        this.Instrucciones = E.Instrucciones;
        this.Tiempo = E.Tiempo;
        this.FechaCreacion = E.FechaCreacion;
        this.FechaModificacion = E.FechaModificacion;
        this.PuntosAprobatorios = E.PuntosAprobatorios;
        this.HabilitarExamenIndividual = E.HabilitarExamenIndividual;
        this.TipoRetroalimentacionAlumnoId = E.TipoRetroalimentacionAlumnoId;
        this.Navegable = E.Navegable;
        this.TipoTiempoExamenId = E.TipoTiempoExamenId;
        this.TipoIncisoRespuestaId = E.TipoIncisoRespuestaId;
        this.OrdenReactivosAleatorio = E.OrdenReactivosAleatorio;
        this.PorBloque = E.PorBloque;
        this.VerDetalleCalificacionPreviaFinalizacion = E.VerDetalleCalificacionPreviaFinalizacion;
        this.ElementoExamen = E.ElementoExamen;
        this.EtapaExamen = E.EtapaExamen;
        this.EsVinculado = E.EsVinculado;
        this.EsBloqueado = E.EsBloqueado;
        this.EditarFechas = (E.ElementoExamen && E.EtapaExamen) ? E.ElementoExamen.EditarFechas || E.EtapaExamen.EditarFechas : false;
    }
  }
}
