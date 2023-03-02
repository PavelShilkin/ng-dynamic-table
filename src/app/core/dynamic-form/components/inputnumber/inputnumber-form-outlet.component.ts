import { Component, HostBinding, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-inputnumber
    [class]="config.styleClass"
    [id]="config.name"
    [label]="config.label || ''"
    [formControl]="control"
    [hasRequiredVF]="control | validatorRequired"
  ></app-inputnumber>`,
})
export class InputNumberOutletComponent implements DynamicForm.BaseControlComponent {
  @Input()
  public config!: DynamicForm.BaseControl;

  @Input()
  public control: FormControl = new FormControl();

  @HostBinding("class")
  public get myClass(): string {
    return "w-full";
  }
}
