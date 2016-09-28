import {ElementRef, AfterViewInit} from '@angular/core';
import {Directive} from "@angular/core/src/metadata/directives";
declare var hljs: any;

@Directive({
  selector: '[sv-highlighter]'
})
export class HighlightDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    hljs.highlightBlock(this.el.nativeElement);
  }
}
