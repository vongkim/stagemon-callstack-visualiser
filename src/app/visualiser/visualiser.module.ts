import {NgModule} from '@angular/core';
import {VisualiserComponent} from "./visualiser.component";
import {VisualiserService} from "./visualiser.service";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  exports: [VisualiserComponent],
  declarations: [VisualiserComponent],
  providers: [VisualiserService],
})
export class VisualiserModule {
}
