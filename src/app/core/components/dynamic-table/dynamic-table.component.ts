import { Component, Input } from "@angular/core";
import { DynamicTable } from "../../dynamic-table.namespace";

@Component({
  selector: "app-dynamic-table[value][columns]",
  templateUrl: "dynamic-table.component.html",
})
export class DynamicTableComponent {
  @Input()
  public value: DynamicTable.Value[] = [];

  @Input()
  public columns: DynamicTable.Column[] = [];

  @Input()
  public title: string = "";
}
