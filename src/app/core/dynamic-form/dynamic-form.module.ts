import { InputTextModule } from "primeng/inputtext";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DynamicFormComponent } from "./dynamic-form.component";
import { DynamicFormDirective } from "./dynamic-form.directive";
import { InputComponent } from "./components/inputtext/input.component";
import { InputOutletComponent } from "./components/inputtext/input-form-outlet.component";
import { ButtonModule } from "primeng/button";
import { BoxComponent } from "./components/box/box.component";
import { CalendarModule } from "primeng/calendar";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { CalendarOutletComponent } from "./components/calendar/calendar-form-outlet.component";
import { InputNumberComponent } from "./components/inputnumber/inputnumber.component";
import { InputNumberOutletComponent } from "./components/inputnumber/inputnumber-form-outlet.component";
import { InputNumberModule } from "primeng/inputnumber";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
  ],
  exports: [DynamicFormComponent, CalendarComponent],
  declarations: [
    DynamicFormComponent,
    InputComponent,
    DynamicFormDirective,
    InputOutletComponent,
    BoxComponent,
    CalendarComponent,
    CalendarOutletComponent,
    InputNumberComponent,
    InputNumberOutletComponent,
  ],
})
export class DynamicFormModule {}
