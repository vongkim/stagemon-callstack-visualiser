import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Callstack} from "./callstack/callstack.model";

@Injectable()
export class VisualiserService {
  private _jsonLocation = 'assets/data/q1.json';

  constructor(private _http:Http) {
  }

  getCallstackData():Observable<Callstack> {
    return this._http.get(this._jsonLocation)
      .map(VisualiserService._extractData)
      .catch(VisualiserService._handleError);
  }

  private static _extractData(res:Response) {
    let body = res.json();
    return body.data || body || {};
  }

  private static _handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
