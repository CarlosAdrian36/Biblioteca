import { Estudiante } from "../Persona/Estudiante";
import { Examen } from "./Examen";

export class ExamenEstudiante extends Examen {
  EstudianteExamenId: number;
  CuentaId: number;
  GrupoId: number;
  Estudiante: Estudiante;
  Habilitado: boolean;
  ExamenId: number;
  FechaInicio: Date;
  FechaFin: Date;
  FechaInicioExamen: Date;
  FechaFinExamen: Date;
  CalificacionObtenida: number;
  CalificacionOtorgada: number;
  MotivoCambioCalificacion: string;
  NombreGrupo: string;
  Tiempo: number;
  TipoReactivacionId: number;
  TipoTerminacionId: number;
  ElementoExamen: any;
  EtapaExamen: any;
  Estado: boolean;
  constructor(EE){
    super(EE);
    if(EE){
      this.EstudianteExamenId = EE.EstudianteExamenId;
      this.CuentaId = EE.CuentaId;
      this.GrupoId = EE.GrupoId;
      this.Habilitado = EE.Habilitado;
      this.ExamenId = EE.ExamenId;
      this.FechaInicio = EE.FechaInicio ? new Date(EE.FechaInicio) : null;
      this.FechaFin = EE.FechaFin ? new Date(EE.FechaFin) : null;
      this.FechaInicioExamen = new Date(EE.FechaInicioExamen);
      this.FechaFinExamen = new Date(EE.FechaFinExamen);
      this.CalificacionObtenida = EE.CalificacionObtenida;
      this.CalificacionOtorgada = EE.CalificacionOtorgada;
      this.MotivoCambioCalificacion = EE.MotivoCambioCalificacion;
      this.NombreGrupo = EE.NombreGrupo;
      this.Tiempo = EE.Tiempo;
      this.TipoReactivacionId = EE.TipoReactivacionId;
      this.TipoTerminacionId = EE.TipoTerminacionId;
      this.Estado = EE.Estado;
      this.Estudiante = EE.Estudiante ? new Estudiante(EE.Estudiante) : null;
      this.ElementoExamen = EE.ElementoExamen;
      this.EtapaExamen = EE.EtapaExamen;
    }
  }
}
