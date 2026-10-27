import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  public departamentos!: Array<Departamento>
  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos
  ){}

  async ngOnInit(): Promise<void> {
    this.departamentos = await this._service.getDepartamentos()
    this._cdr.detectChanges()
  }
}
