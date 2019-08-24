import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdvertCreateComponent } from './components/advert-create/advert-create.component';
import { UploadComponent } from './components/upload/upload.component';
import { NgxDropzoneModule } from "ngx-dropzone";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { UploadService } from './services/upload.service';
import { AdvertService } from './services/advert.service';
import { ClientRegisterComponent } from './components/client-register/client-register.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AdvertCreateComponent,
    UploadComponent,
    ClientRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdvertService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
