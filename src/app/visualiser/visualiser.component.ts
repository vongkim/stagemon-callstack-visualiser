import {Component, OnInit} from '@angular/core';
import {VisualiserService} from "./visualiser.service";
import {Callstack} from "./callstack/callstack.model";

@Component({
  selector: 'sv-visualiser',
  templateUrl: 'visualiser.component.html'
})
export class VisualiserComponent implements OnInit {
  callstack:Callstack;
  private _errorMessage:string;

  constructor(private _visualiserService:VisualiserService) {
  }

  ngOnInit() {
    this.getCallstack();
  }

  getCallstack():void {
    this._visualiserService.getCallstackData()
      .subscribe(
        callstack => {
          this.callstack = callstack;
        },
        error => this._errorMessage = error);
  }
}
