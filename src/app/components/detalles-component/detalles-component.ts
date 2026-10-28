import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles-component',
  standalone: false,
  styleUrl: './detalles-component.css',
  templateUrl: './detalles-component.html',
})
export class DetallesComponent implements OnInit{
  public departamento!: Departamento

  constructor(
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id'])
      let nombre = params['nombre']
      let localidad = params['localidad']
      this.departamento = new Departamento(id, nombre, localidad)
    })
  }
}
