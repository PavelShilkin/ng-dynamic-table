import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  template: `
    <app-dynamic-table
      [value]="$any(appService.data$ | async)"
      [columns]="$any(appService.columns$ | async)"
    >
      <div caption>Всего записей: {{ $any(appService.data$ | async).length }}</div>
    </app-dynamic-table>
  `,
})
export class AppComponent {
  constructor(public readonly appService: AppService) {}
}
