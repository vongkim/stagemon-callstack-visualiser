import {Component, Input} from '@angular/core';
import {Callstack} from "./callstack.model";
import {CallstackUtil} from "../../shared/callstack-utils";

@Component({
  selector: 'sv-callstack-tree',
  templateUrl: 'callstack.component.html',
  styleUrls: ['callstack.component.css']
})
export class CallstackTreeComponent {

  @Input() children: Array<Callstack>;
  @Input() parent: Callstack;
  @Input() root: Callstack;

  constructor(public util: CallstackUtil) {
  }

}
