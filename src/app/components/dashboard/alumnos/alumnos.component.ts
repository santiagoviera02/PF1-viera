import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../../../interfaces/alumno';
import { AlumnoService } from '../../../services/alumno.service';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  listAlumnos: Alumno[] = [];

  displayedColumns: string[] = ['nombreyapellido', 'materia', 'calificacion', 'profesor', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _alumnoService: AlumnoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.listAlumnos = this._alumnoService.getAlumno();
    this.dataSource = new MatTableDataSource(this.listAlumnos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarAlumno(index: number) {
    console.log(index);

    this._alumnoService.eliminarAlumno(index);
    this.cargarAlumnos();

    this._snackBar.open('Se elimino un alumno', '', {
      duration: 1200,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
