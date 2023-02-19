import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-dropdown
    [id]="config.name"
    [label]="config.label || ''"
    [formControl]="control"
    [optionLabel]="config.optionLabel || ''"
    [optionValue]="config.optionValue || ''"
    [options]="config.options"
  ></app-dropdown>`,
})
export class DropdownFormOutletComponent implements DynamicForm.SelectionControlComponent {
  @Input()
  public config!: DynamicForm.SelectionControl;

  @Input()
  public control: FormControl = new FormControl();
}
