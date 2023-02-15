import { Pipe, PipeTransform } from "@angular/core";
import { DynamicTable } from "../dynamic-table.namespace";

@Pipe({
  name: "dynamicTableValue",
  pure: false,
})
export class DynamicTablePipe implements PipeTransform {
  public transform(value: DynamicTable.Value, column: DynamicTable.Column): string | number {
    const fn = eval(`(function(value) { return ${column.pathToValue}})`);
    return fn(value) || "-";
  }
}
