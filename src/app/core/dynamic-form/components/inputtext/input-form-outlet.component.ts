import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-input
    [class]="config.styleClass"
    [id]="config.name"
    [label]="config.label || ''"
    [formControl]="control"
  ></app-input>`,
})
export class InputOutletComponent implements DynamicForm.BaseControlComponent {
  @Input()
  public config!: DynamicForm.BaseControl;

  @Input()
  public control: FormControl = new FormControl();
}
