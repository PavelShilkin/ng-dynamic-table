import { InputTextModule } from "primeng/inputtext";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DynamicFormComponent } from "./dynamic-form.component";
import { DynamicFormDirective } from "./dynamic-form.directive";
import { InputComponent } from "./components/inputtext/input.component";
import { InputOutletComponent } from "./components/inputtext/input-form-outlet.component";
import { ButtonModule } from "primeng/button";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  exports: [DynamicFormComponent],
  declarations: [DynamicFormComponent, InputComponent, DynamicFormDirective, InputOutletComponent],
  providers: [],
})
export class DynamicFormModule {}
