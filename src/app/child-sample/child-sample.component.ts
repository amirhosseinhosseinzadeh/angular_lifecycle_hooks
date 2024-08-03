import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-sample',
  template: `
    <h2>
        Child is here
    </h2>
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class ChildSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
