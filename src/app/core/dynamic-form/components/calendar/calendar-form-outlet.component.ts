import { Component, HostBinding, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  template: `<app-calendar
    [id]="config.name"
    [label]="config.label || ''"
    [formControl]="control"
  ></app-calendar>`,
})
export class CalendarOutletComponent implements DynamicForm.BaseControlComponent {
  @Input()
  public config!: DynamicForm.BaseControl;

  @Input()
  public control: FormControl = new FormControl();

  @HostBinding("class")
  public get myClass(): string {
    return "w-full";
  }
}
