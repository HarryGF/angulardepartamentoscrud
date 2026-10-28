import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent {
  @ViewChild("cajaId") cajaId!: ElementRef
  @ViewChild("cajaNombre") cajaNombre!: ElementRef
  @ViewChild("cajaLocalidad") cajaLocalidad!: ElementRef
  public departamento!: Departamento

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ){}

  async ngOnInit(): Promise<void> {
    this._activeRoute.params.subscribe(async(params: Params) => {
      let id = parseInt(params['id'])
      this.departamento = await this._service.findDepartamento(id)
      this._cdr.detectChanges()
    })
  }

  async updateDepartamento(): Promise<void> {
    let id = parseInt(this.cajaId.nativeElement.value)
    let nombre = this.cajaNombre.nativeElement.value
    let localidad = this.cajaLocalidad.nativeElement.value
    
    let dept = new Departamento(id, nombre, localidad)
    let response = await this._service.updateDepartamento(dept)
    this._router.navigate(['/detalles/'+dept.numero+'/'+dept.nombre+'/'+dept.localidad])
  }
}
