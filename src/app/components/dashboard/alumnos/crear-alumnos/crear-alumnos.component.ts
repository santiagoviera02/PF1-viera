import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from '../../../../interfaces/alumno';
import { AlumnoService } from '../../../../services/alumno.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.scss']
})
export class CrearAlumnosComponent implements OnInit {
  tiles: any[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _alumnoService: AlumnoService,
    private router: Router,
    private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      nombreyapellido: ['', Validators.required],
      materia: ['', Validators.required],
      calificacion: ['', Validators.required],
      profesor: ['', Validators.required],
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
    this.router.navigate(['/dashboard/alumnos']);

    this._snackBar.open('Se agrego un alumno con exito', '', {
      duration: 1200,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}

