import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, forwardRef, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  template: `
    <span class="p-float-label">
      <p-dropdown
        [id]="id"
        [ngModel]="_value"
        [options]="options"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [showClear]="true"
        [autoDisplayFirst]="false"
        (onChange)="value = $event.value"
      ></p-dropdown>
      <label [for]="id">{{ label }}</label>
    </span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent<T, Y> implements ControlValueAccessor {
  @Input()
  public label: string = "";

  @Input()
  public id: string = "";

  @Input()
  public placeholder: string = "";

  @Input()
  public optionLabel = "label";

  @Input()
  public optionValue = "value";

  @Input()
  public options: Y[] = [];

  public set value(v: T) {
    this._value = v;
    this.onChange(v);
    this.onTouch();
  }

  public _value?: T;

  public onChange!: (value: T) => void;

  public onTouch!: () => void;

  public registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(value: T): void {
    this._value = value;
  }
}
