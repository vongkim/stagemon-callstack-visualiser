import {NgModule} from '@angular/core';
import {VisualiserComponent} from "./visualiser.component";
import {VisualiserService} from "./visualiser.service";
import {BrowserModule} from "@angular/platform-browser";
import {CallstackTreeComponent} from "./callstack/callstack.component";
import {CallstackUtil} from "../shared/callstack-utils";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {HighlightDirective} from "../shared/highlight.directive";


@NgModule({
  imports: [
    BrowserModule,
    Ng2BootstrapModule
  ],
  exports: [VisualiserComponent],
  declarations: [VisualiserComponent, CallstackTreeComponent, HighlightDirective],
  providers: [VisualiserService, CallstackUtil],
})
export class VisualiserModule {
}
