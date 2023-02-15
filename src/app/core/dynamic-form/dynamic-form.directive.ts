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

const OUTLET_COMPONENTS: { [key in DynamicForm.Components]: Type<DynamicForm.BaseComponent> } = {
  [DynamicForm.Components.Input]: InputOutletComponent,
};

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
    this.controls.forEach((control) => {
      const componentFactory = this.cfr.resolveComponentFactory(OUTLET_COMPONENTS[control.type]);
      const componentRef = this.vcr.createComponent(componentFactory);
      componentRef.instance.config = control;
      componentRef.instance.control = this.fgDir.form.get(control.name) as FormControl;
    });
  }
}
