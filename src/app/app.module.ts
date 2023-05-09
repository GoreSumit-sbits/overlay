import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleInterceptorInterceptor } from './example-interceptor.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { ButtonComponent } from './button/button.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';


// Create a new AuthServiceConfig object to set up OAuth2
// Use your Client ID in the GoogleLoginProvider()



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ButtonComponent,
    C1Component,
    C2Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule, 
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass:ExampleInterceptorInterceptor
      , 
      multi:true
    },
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
