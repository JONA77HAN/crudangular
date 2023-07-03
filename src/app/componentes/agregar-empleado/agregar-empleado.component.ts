import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
formularioDeEmpleados:FormGroup;

constructor( 
  public formulario:FormBuilder, 
  private crudService: CrudService
  ) {

this.formularioDeEmpleados= this.formulario.group({
nombre: [''],
correo: ['']
});

}
ngOnInit(): void {
    
}

enviarDatos(): any {
  console.log ("me presionaste");
  console.log (this.formularioDeEmpleados.value);

  this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe();
}

}
