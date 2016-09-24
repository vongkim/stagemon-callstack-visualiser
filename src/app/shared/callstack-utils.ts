import {Injectable} from '@angular/core';

@Injectable()
export class CallstackUtil {

  constructor() {
  }

  toPercentage(netExecution: number, execution: number) {
    let percent = (netExecution / execution) * 100;
    return percent.toFixed(2) + '%';
  }

  toSeconds(nanosec: number) {
    return nanosec / 1000000000;
  }
}
