import { FormControl, FormGroupDirective } from "@angular/forms";
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
} from "@angular/core";
import { DynamicForm } from "./dynamic-form.namespace";
import { DynamicFormUtils } from "./dynamic-form.utils";
import { DF_OUTLET_COMPONENTS } from "./dynamic-form.const";

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
      const factory = this.cfr.resolveComponentFactory(DF_OUTLET_COMPONENTS[control.type]);
      const componentRef = this.vcr.createComponent(factory);

      componentRef.instance.config = control;

      if (DynamicFormUtils.isComponentWithControl(componentRef.instance)) {
        componentRef.instance.control = this.fgDir.form.get(control.name) as FormControl;
      }
    });
  }
}
