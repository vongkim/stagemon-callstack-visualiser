import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Callstack} from "./callstack/callstack.model";

@Injectable()
export class VisualiserService {
  private _jsonLocation = 'http://localhost:9200/stagemonitor-requests-*/requests/_search?pretty=true';

  constructor(private _http: Http) {
  }

  search(): Observable<any> {
    return this._http.post(this._jsonLocation,
      JSON.parse('{"query":{"term":{"method":"POST"}},"_source":false,"fields":["_id","_source","application","@timestamp","callStackJson"],"sort":[{"@timestamp":{"order":"desc"}}]}'))
      .map(VisualiserService._extractData)
      .catch(VisualiserService._handleError);
  }

  private static _extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private static _handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
