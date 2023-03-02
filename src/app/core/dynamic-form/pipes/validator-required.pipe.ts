import { FormControl, Validators } from "@angular/forms";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "validatorRequired",
})
export class ValidatorRequiredPipe implements PipeTransform {
  public transform(fc: FormControl): boolean {
    return fc.hasValidator(Validators.required);
  }
}
