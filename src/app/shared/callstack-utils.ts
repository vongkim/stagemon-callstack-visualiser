import {Injectable} from '@angular/core';

@Injectable()
export class CallstackUtil {

  constructor() {
  }

  toPercentage(netExecution: number, execution: number) {
    let percent = (netExecution / execution) * 100;
    return percent.toFixed(0) + '%';
  }

  toMillisecond(nanosec: number) {
    return (nanosec / 1000000).toFixed(2) + 'ms';
  }
}
