import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from '../../../../interfaces/alumno';
import { AlumnoService } from '../../../../services/alumno.service';


@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.scss']
})
export class CrearAlumnosComponent implements OnInit {
  tiles: any[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder, private _alumnoService: AlumnoService) {
    this.form = this.fb.group({
      nombreyapellido: ['', Validators.required],
      materia: ['', Validators.required],
      calificacion: ['', Validators.required],
      profesor: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarAlumno() {

    const alumn: Alumno = {
      nombreyapellido: this.form.value.nombreyapellido,
      materia: this.form.value.materia,
      calificacion: this.form.value.calificacion,
      profesor: this.form.value.profesor,
    }


    this._alumnoService.agregarAlumno(alumn);
  }
}
