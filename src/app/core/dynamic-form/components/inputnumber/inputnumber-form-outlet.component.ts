import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-inputnumber
    [id]="config.name"
    [label]="config.label || ''"
    [formControl]="control"
  ></app-inputnumber>`,
})
export class InputNumberOutletComponent implements DynamicForm.BaseControlComponent {
  @Input()
  public config!: DynamicForm.BaseControl;

  @Input()
  public control: FormControl = new FormControl();
}
