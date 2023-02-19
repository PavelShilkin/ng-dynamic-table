import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, forwardRef, Input } from "@angular/core";

@Component({
  selector: "app-calendar",
  template: `
    <span class="p-float-label">
      <p-calendar
        styleClass="w-full"
        [id]="id"
        [ngModel]="_value"
        [placeholder]="placeholder"
        (onSelect)="value = $event"
      ></p-calendar>
      <label [for]="id">{{ label }}</label>
    </span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true,
    },
  ],
})
export class CalendarComponent implements ControlValueAccessor {
  @Input()
  public label: string = "";

  @Input()
  public id: string = "";

  @Input()
  public placeholder: string = "";

  public set value(v: Date) {
    this._value = v;
    this.onChange(v);
    this.onTouch();
  }

  public _value: Date | null = null;

  public onChange!: (value: Date) => void;

  public onTouch!: () => void;

  public registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(value: Date): void {
    this._value = value;
  }
}
