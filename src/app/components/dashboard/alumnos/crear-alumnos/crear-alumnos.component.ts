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
  private _alumnoService: any;

  constructor(private fb: FormBuilder, private AlumnoService: AlumnoService) {
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
    console.log(this.agregarAlumno)

    const user: Alumno = {
      nombreyapellido: this.form.value.alumno,
      materia: this.form.value.alumno,
      calificacion: this.form.value.alumno,
      profesor: this.form.value.alumno,
    }


    this._alumnoService.agregarAlumno(user);
  }
}
