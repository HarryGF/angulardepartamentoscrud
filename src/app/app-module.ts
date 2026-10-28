import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';
import { CreateComponent } from './components/create-component/create-component';
import { DetallesComponent } from './components/detalles-component/detalles-component';
import { UpdateComponent } from './components/update-component/update-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    CreateComponent,
    DetallesComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
