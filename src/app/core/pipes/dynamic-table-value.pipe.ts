import { Pipe, PipeTransform } from "@angular/core";
import { DynamicTable } from "../dynamic-table.namespace";

@Pipe({
  name: "dynamicTableValue",
})
export class DynamicTablePipe implements PipeTransform {
  public transform(value: DynamicTable.Value, column: DynamicTable.Column): string | number {
    return column.format(value) || "-";
  }
}
