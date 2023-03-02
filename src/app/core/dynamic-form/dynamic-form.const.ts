import { Type } from "@angular/core";
import { BoxComponent } from "./components/box/box.component";
import { CalendarOutletComponent } from "./components/calendar/calendar-form-outlet.component";
import { DropdownFormOutletComponent } from "./components/dropdown/dropdown-form-outlet.component";
import { InputNumberOutletComponent } from "./components/inputnumber/inputnumber-form-outlet.component";
import { InputOutletComponent } from "./components/inputtext/input-form-outlet.component";
import { DynamicForm } from "./dynamic-form.namespace";

export const DF_OUTLET_COMPONENTS: {
  [key in DynamicForm.Components]: Type<DynamicForm.Component>;
} = {
  [DynamicForm.Components.InputText]: InputOutletComponent,
  [DynamicForm.Components.Box]: BoxComponent,
  [DynamicForm.Components.Calendar]: CalendarOutletComponent,
  [DynamicForm.Components.InputNumber]: InputNumberOutletComponent,
  [DynamicForm.Components.Dropdown]: DropdownFormOutletComponent,
};
