import { FormControl } from "@angular/forms";
export namespace DynamicForm {
  export type Control = BaseControl | BoxControl;
  export type Component = BaseControlComponent | BaseBoxComponent;

  export interface BaseControl {
    name: string;
    type: Components;
    label?: string;
  }

  export interface BoxControl extends BaseControl {
    class?: string;
    children: Control[];
  }

  export interface BaseControlComponent {
    config: BaseControl;
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
  }
}
