import { FormControl, ValidatorFn } from "@angular/forms";

export namespace DynamicForm {
  export type Control = BaseControl | SelectionControl | BoxControl;
  export type Component = BaseControlComponent | BaseBoxComponent;

  export interface BaseControl {
    name: string;
    type: Components;
    label?: string;
    styleClass?: string;
    validators?: ValidatorFn[];
  }

  export interface SelectionControl extends BaseControl {
    options: object[];
    optionLabel?: string;
    optionValue?: string;
  }

  export interface BoxControl extends BaseControl {
    children: Control[];
  }

  export interface BaseControlComponent {
    config: BaseControl;
    control: FormControl;
  }

  export interface SelectionControlComponent {
    config: SelectionControl;
    control: FormControl;
  }

  export interface BaseBoxComponent {
    config: BoxControl;
  }

  export enum Components {
    InputText,
    Box,
    Calendar,
    InputNumber,
    Dropdown,
  }
}
