import {Component, OnInit} from '@angular/core';
import {VisualiserService} from "./visualiser.service";
import {Callstack} from "./callstack/callstack.model";
import {CallstackUtil} from "../shared/callstack-utils";
import Timer = NodeJS.Timer;

@Component({
  selector: 'sv-visualiser',
  templateUrl: 'visualiser.component.html'
})
export class VisualiserComponent implements OnInit {
  minMilliseconds:number;
  callstackIndex: number;
  callstackHits: Callstack[];
  callstack: Callstack;
  intervalId: Timer;
  private _errorMessage: string;

  constructor(private _visualiserService: VisualiserService, public utils: CallstackUtil) {
    this.minMilliseconds = 100;
    this.callstackIndex = 0;
    this.callstackHits = [];
  }

  ngOnInit() {
    this.getCallstack();
  }

  getCallstack(): void {
    this._visualiserService.search()
      .subscribe(
        result => {
          result.hits.hits.forEach((val, index) => {
            this.callstackHits[index] = JSON.parse(val.fields.callStackJson[0]);
          });

          // We get the data from elastic search in descending order.
          this.callstackHits.reverse();
          this.callstackIndex = this.callstackHits.length - 1;
          this.callstack = this.callstackHits[this.callstackIndex];
        },
        error => this._errorMessage = error);
  }

  previous(): void {
    this.callstack = this.callstackHits[--this.callstackIndex];
  }

  next(): void {
    this.callstack = this.callstackHits[++this.callstackIndex];
  }

  refresh(): void {
    if (this.callstackHits) {
      this.getCallstack();
    }
  }

  toggleRefresh(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else {
      this.intervalId = setInterval(()=> {
        this.refresh()
      }, 5000);
    }
  }

  isAutoRefresh(): string {
    return this.intervalId ? 'On' : 'Off';
  }

  isExceededMinMillisecond(executionTime):boolean {
    return executionTime / 1000000 > this.minMilliseconds;
  }

}
