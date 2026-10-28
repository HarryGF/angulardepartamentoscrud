import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";
import { firstValueFrom } from "rxjs";
import { identifierName } from "@angular/compiler";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http: HttpClient){}
    url = environment.urlApiDepartamentos

    async getDepartamentos(): Promise<Departamento[]> {
        let request = "api/departamentos"
        return firstValueFrom(this._http.get<Departamento[]>(this.url + request))
    }

    async createDepartamento(departamento: Departamento): Promise<any> {
        let json = JSON.stringify(departamento)
        let header = new HttpHeaders()
        header = header.set("content-type", "application/json")
        let request = "api/departamentos"
        return firstValueFrom(
            this._http.post(this.url + request, json, {headers: header})
        )
    }

    async findDepartamento(id: number): Promise<Departamento> {
        let request = "api/departamentos/" + id
        return firstValueFrom(this._http.get<Departamento>(this.url + request))
    }

    async updateDepartamento(departamento: Departamento): Promise<any> {
        let json = JSON.stringify(departamento)
        let header = new HttpHeaders().set("content-type", "application/json")
        let request = "api/departamentos"
        return firstValueFrom(
            this._http.put(this.url + request, json, {headers: header})
        )
    }

    async deleteDepartamento(id:number): Promise<any> {
        let request = "api/departamentos/" + id;
        return firstValueFrom(this._http.delete(this.url + request))
    }
}