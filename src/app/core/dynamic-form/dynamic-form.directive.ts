import { BoxComponent } from "./components/box/box.component";
import { FormControl, FormGroupDirective } from "@angular/forms";
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  Type,
  ViewContainerRef,
} from "@angular/core";
import { InputOutletComponent } from "./components/inputtext/input-form-outlet.component";
import { DynamicForm } from "./dynamic-form.namespace";
import { CalendarOutletComponent } from "./components/calendar/calendar-form-outlet.component";
import { InputNumberOutletComponent } from "./components/inputnumber/inputnumber-form-outlet.component";

const OUTLET_COMPONENTS: { [key in DynamicForm.Components]: Type<DynamicForm.Component> } = {
  [DynamicForm.Components.InputText]: InputOutletComponent,
  [DynamicForm.Components.Box]: BoxComponent,
  [DynamicForm.Components.Calendar]: CalendarOutletComponent,
  [DynamicForm.Components.InputNumber]: InputNumberOutletComponent,
};

function isComponentWithControl(
  cmpInstance: DynamicForm.Component
): cmpInstance is DynamicForm.BaseControlComponent {
  return "control" in cmpInstance;
}

@Directive({ selector: "[dynamicForm]" })
export class DynamicFormDirective implements OnChanges {
  @Input("dynamicForm")
  public controls: DynamicForm.Control[] = [];

  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly cfr: ComponentFactoryResolver,
    private readonly fgDir: FormGroupDirective
  ) {}

  ngOnChanges(): void {
    this.controls.forEach((control: DynamicForm.Control) => {
      const factory = this.cfr.resolveComponentFactory(OUTLET_COMPONENTS[control.type]);
      const componentRef = this.vcr.createComponent(factory);

      componentRef.instance.config = control;

      if (isComponentWithControl(componentRef.instance)) {
        componentRef.instance.control = this.fgDir.form.get(control.name) as FormControl;
      }
    });
  }
}
