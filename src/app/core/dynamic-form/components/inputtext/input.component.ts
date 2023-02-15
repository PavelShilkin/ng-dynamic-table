import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DynamicForm } from "../../dynamic-form.namespace";
import { Component, forwardRef, Input } from "@angular/core";

@Component({
  selector: "app-input",
  template: `
    <span class="p-float-label">
      <input
        [id]="id"
        pInputText
        type="text"
        [value]="_value"
        (input)="value = $any($event.target).value"
        [placeholder]="placeholder"
      />
      <label [for]="id">{{ label }}</label>
    </span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  public label: string = "";

  @Input()
  public id: string = "";

  @Input()
  public placeholder: string = "";

  public config!: DynamicForm.BaseControl;

  public set value(v: string) {
    this._value = v;
    this.onChange(v);
    this.onTouch();
  }

  public _value = "";

  public onChange!: (value: string) => void;

  public onTouch!: () => void;

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(value: string): void {
    this._value = value;
  }
}
