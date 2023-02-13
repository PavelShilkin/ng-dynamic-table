import { Component, Input } from "@angular/core";
import { DynamicTable } from "src/app/core/dynamic-table.namespace";

@Component({
  selector: "app-table-columns-constructor",
  template: `
    <button pButton label="Add column" (click)="addColumn()"></button>
    <ul>
      <li class="flex p-2 gap-1" *ngFor="let column of columns">
        <span class="p-float-label">
          <input id="colHeader" pInputText type="text" [(ngModel)]="column.header" />
          <label for="colHeader">Header</label>
        </span>
        <span class="p-float-label">
          <input id="colFormat" pInputText type="text" [(ngModel)]="column.format" />
          <label for="colFormat">Format</label>
        </span>
        <span class="p-float-label">
          <input id="colField" pInputText type="text" [(ngModel)]="column.field" />
          <label for="colField">Field</label>
        </span>
      </li>
    </ul>
  `,
})
export class TableColumnsConstructor {
  @Input()
  public columns: DynamicTable.Column[] = [];

  public addColumn(): void {
    this.columns.push({ header: "", format: () => "", field: "" });
  }
}
