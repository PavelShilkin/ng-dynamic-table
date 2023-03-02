import { FormControl, Validators } from "@angular/forms";
import { Pipe, PipeTransform } from "@angular/core";
import { DynamicFormUtils } from "../dynamic-form.utils";

@Pipe({
  name: "validatorRequired",
})
export class ValidatorRequiredPipe implements PipeTransform {
  public transform(fc: FormControl): boolean {
    return DynamicFormUtils.hasRequiredValidatorFn(fc);
  }
}
