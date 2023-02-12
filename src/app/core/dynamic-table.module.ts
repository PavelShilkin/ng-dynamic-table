import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { DynamicTablePipe } from "./pipes/dynamic-table-value.pipe";

const PRIMENG_MODULES = [TableModule];

@NgModule({
  declarations: [DynamicTableComponent, DynamicTablePipe],
  imports: [CommonModule, ...PRIMENG_MODULES],
  exports: [DynamicTableComponent],
  providers: [],
})
export class DynamicTableModule {}
