import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-dynamic-table>
    <div caption>
      Hello world
    </div>
  </app-dynamic-table>
  `
})
export class AppComponent {
  title = 'ng-dynamic-table';
}
