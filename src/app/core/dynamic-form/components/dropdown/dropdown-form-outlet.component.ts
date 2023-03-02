import { Component, HostBinding, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-dropdown
    [class]="config.styleClass"
    [id]="config.name"
    [label]="config.label || ''"
    [formControl]="control"
    [optionLabel]="config.optionLabel || 'label'"
    [optionValue]="config.optionValue || 'value'"
    [options]="config.options"
    [hasRequiredVF]="control | validatorRequired"
  ></app-dropdown>`,
})
export class DropdownFormOutletComponent implements DynamicForm.SelectionControlComponent {
  @Input()
  public config!: DynamicForm.SelectionControl;

  @Input()
  public control: FormControl = new FormControl();

  @HostBinding("class")
  public get myClass(): string {
    return "w-full";
  }
}
