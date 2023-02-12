import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { DynamicTableComponent } from "./components/dynamic-table/dynamic-table.component";
import { DynamicTablePipe } from "./pipes/dynamic-table-value.pipe";

const PRIMENG_MODULES = [TableModule, ButtonModule];

@NgModule({
  declarations: [DynamicTableComponent, DynamicTablePipe],
  imports: [CommonModule, TooltipModule, ...PRIMENG_MODULES],
  exports: [DynamicTableComponent],
  providers: [],
})
export class DynamicTableModule {}
