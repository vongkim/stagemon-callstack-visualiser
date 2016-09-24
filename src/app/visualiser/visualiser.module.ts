import {NgModule} from '@angular/core';
import {VisualiserComponent} from "./visualiser.component";
import {VisualiserService} from "./visualiser.service";
import {BrowserModule} from "@angular/platform-browser";
import {CallstackTreeComponent} from "./callstack/callstack.component";
import {CallstackUtil} from "../shared/callstack-utils";

@NgModule({
  imports: [BrowserModule],
  exports: [VisualiserComponent],
  declarations: [VisualiserComponent,CallstackTreeComponent],
  providers: [VisualiserService, CallstackUtil],
})
export class VisualiserModule {
}
