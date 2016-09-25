import {NgModule} from '@angular/core';
import {VisualiserComponent} from "./visualiser.component";
import {VisualiserService} from "./visualiser.service";
import {BrowserModule} from "@angular/platform-browser";
import {CallstackTreeComponent} from "./callstack/callstack.component";
import {CallstackUtil} from "../shared/callstack-utils";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {AceEditorDirective} from "ng2-ace-editor/src";


@NgModule({
  imports: [
    BrowserModule,
    Ng2BootstrapModule
  ],
  exports: [VisualiserComponent],
  declarations: [VisualiserComponent, CallstackTreeComponent, AceEditorDirective],
  providers: [VisualiserService, CallstackUtil],
})
export class VisualiserModule {
}
