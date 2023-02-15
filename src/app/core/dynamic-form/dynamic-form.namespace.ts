import { FormControl } from "@angular/forms";
export namespace DynamicForm {
  export type Control = BaseControl | BaseControlWithLabel;

  export interface BaseControl {
    name: string;
    type: Components;
  }

  export interface BaseControlWithLabel extends BaseControl {
    id: string;
    label: string;
  }

  export interface BaseComponent {
    config: BaseControl;
    control: FormControl;
  }

  export enum Components {
    Input,
  }
}
