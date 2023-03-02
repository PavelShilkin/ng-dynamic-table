import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component, forwardRef, Input } from "@angular/core";

@Component({
  selector: "app-inputnumber",
  template: `
    <span class="p-float-label">
      <p-inputNumber
        class="w-full"
        [id]="id"
        [ngModel]="_value"
        (onInput)="value = $event.value"
        [useGrouping]="false"
        [placeholder]="placeholder"
      ></p-inputNumber>
      <label [for]="id" [class.required]="hasRequiredVF">{{ label }}</label>
    </span>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
  styles: [
    `
      :host ::ng-deep {
        span.p-inputnumber {
          width: 100%;
        }
      }
    `,
  ],
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input()
  public label: string = "";

  @Input()
  public id: string = "";

  @Input()
  public placeholder: string = "";

  @Input()
  public hasRequiredVF = false;

  public set value(v: number) {
    this._value = v;
    this.onChange(v);
    this.onTouch();
  }

  public _value?: number;

  public onChange!: (value: number) => void;

  public onTouch!: () => void;

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(value: number): void {
    this._value = value;
  }
}
