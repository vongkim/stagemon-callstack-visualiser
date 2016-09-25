import {Component, OnInit} from '@angular/core';
import {VisualiserService} from "./visualiser.service";
import {Callstack} from "./callstack/callstack.model";
import {CallstackUtil} from "../shared/callstack-utils";

@Component({
  selector: 'sv-visualiser',
  templateUrl: 'visualiser.component.html'
})
export class VisualiserComponent implements OnInit {
  callstack: Callstack;
  callstackString: string;
  options: any = {printMargin: false};
  private _errorMessage: string;

  constructor(private _visualiserService: VisualiserService, public utils: CallstackUtil) {
  }

  ngOnInit() {
    this.callstack = new Callstack();
    this.callstackString = "{}";
  }

  getCallstack(): void {
    this._visualiserService.getCallstackData()
      .subscribe(
        callstack => {
          this.callstack = callstack;
          this.callstackString = JSON.stringify(this.callstack, null, 2);
        },
        error => this._errorMessage = error);
  }

  onChange(code) {
    console.log('change detected');
    try {
      if (code.trim()) {
        this.callstack = JSON.parse(code.trim());
        console.log('updated callstack');
      }
      console.log('empty callstack');
    }
    catch (error) {
      console.log('Could not parse JSON', error);
    }
  }
}
