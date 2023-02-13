import { DynamicTableModule } from "./../core/dynamic-table.module";
import { ButtonModule } from "primeng/button";
import { TableColumnsConstructor } from "./components/table-columns-constructor.component/table-columns-constructor.component";
import { NgModule } from "@angular/core";

import { TableConstructorComponent } from "./table-constructor.component";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DynamicTableModule,
  ],
  exports: [TableConstructorComponent],
  declarations: [TableConstructorComponent, TableColumnsConstructor],
  providers: [],
})
export class TableConstructorModule {}
