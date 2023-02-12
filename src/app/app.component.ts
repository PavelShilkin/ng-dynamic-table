import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
  <app-dynamic-table 
    title="Человеки"
    [value]="$any(appService.data$ | async)" 
    [columns]="$any(appService.columns$ | async)">
    <div caption [style.background]="'grey'">
      ng-content
    </div>
  </app-dynamic-table>
  `
})
export class AppComponent {
  constructor(public readonly appService: AppService) {}
}
