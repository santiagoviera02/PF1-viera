import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listaAlumnos: Alumno[] = [
    { nombreyapellido: 'Juan Rodriguez', materia: 'Filosofia', calificacion: '5', profesor: 'P. Rodriguez' },
    { nombreyapellido: 'Santiago Viera', materia: 'Historia', calificacion: '9', profesor: 'R. Lopez' },
    { nombreyapellido: 'Marcela Quiñoa', materia: 'Filosofia', calificacion: '7', profesor: 'P. Rodriguez' },
    { nombreyapellido: 'Martina Gimenez', materia: 'Matematica', calificacion: '2', profesor: 'M. Bulne' },
    { nombreyapellido: 'Roberto Gonzales', materia: 'Matematica', calificacion: '9', profesor: 'M. Bulne' },
  ]


  constructor() { }

  getAlumno() {
    this.listaAlumnos.slice();
  }
}
