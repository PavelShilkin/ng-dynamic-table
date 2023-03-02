import { Validators } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { DynamicForm } from "./dynamic-form.namespace";

export class DynamicFormUtils {
  public static isComponentWithControl(
    cmpInstance: DynamicForm.Component
  ): cmpInstance is DynamicForm.BaseControlComponent {
    return "control" in cmpInstance;
  }

  public static isComponentWithChildren(
    config: DynamicForm.Control
  ): config is DynamicForm.BoxControl {
    return "children" in config;
  }

  public static hasRequiredValidatorFn(control: FormControl): boolean {
    return control.hasValidator(Validators.required);
  }
}
