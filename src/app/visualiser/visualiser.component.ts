import {Component, OnInit} from '@angular/core';
import {VisualiserService} from "./visualiser.service";
import {Callstack} from "./callstack/callstack.model";
import any = jasmine.any;
import {CallstackUtil} from "../shared/callstack-utils";
@Component({
  selector: 'sv-visualiser',
  templateUrl: 'visualiser.component.html'
})
export class VisualiserComponent implements OnInit {
  callstack: Callstack;
  private _errorMessage: string;

  constructor(private _visualiserService: VisualiserService, public utils: CallstackUtil) {
  }

  ngOnInit() {
    this.getCallstack();
  }

  getCallstack(): void {
    this._visualiserService.getCallstackData()
      .subscribe(
        callstack => {
          this.callstack = callstack;
        },
        error => this._errorMessage = error);
  }
}
