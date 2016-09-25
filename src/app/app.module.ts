import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {VisualiserModule} from "./visualiser/visualiser.module";
import {Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    VisualiserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
