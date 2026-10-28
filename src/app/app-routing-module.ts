import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetallesComponent } from './components/detalles-component/detalles-component';
import { UpdateComponent } from './components/update-component/update-component';

const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"create", component: CreateComponent},
    {path:"detalles/:id/:nombre/:localidad", component: DetallesComponent},
    {path:"update/:id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
