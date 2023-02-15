import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-input
    [id]="config.id"
    [label]="config.label"
    [formControl]="control"
  ></app-input>`,
})
export class InputOutletComponent implements DynamicForm.BaseComponent {
  @Input()
  public config!: DynamicForm.BaseControlWithLabel;

  @Input()
  public control!: FormControl;
}
