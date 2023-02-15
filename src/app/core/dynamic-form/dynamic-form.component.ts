import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DynamicForm } from "./dynamic-form.namespace";

@Component({
  selector: "app-dynamic-form[controls]",
  template: `
    <form [class]="class" [formGroup]="form" (ngSubmit)="submit()">
      <ng-container [dynamicForm]="controls"></ng-container>
      <div class="flex align-items-center justify-content-end col-12 gap-1">
        <button pButton type="submit" [label]="submitLabel" [disabled]="form.invalid"></button>
        <button pButton type="button" class="p-button-secondary" [label]="cancelLabel"></button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent<T> implements OnChanges {
  @Input()
  public controls: DynamicForm.Control[] = [];

  @Input()
  public class: string = "";

  @Input()
  public submitLabel = "Создать";

  @Input()
  public cancelLabel = "Отменить";

  @Output()
  public onSubmit = new EventEmitter<T>();

  public form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnChanges(): void {
    const formGroup: { [key: string]: FormControl } = {};
    this.controls.forEach((control) => {
      formGroup[control.name] = this.fb.control(null);
    });
    this.form = this.fb.group(formGroup);
    this.form.valueChanges.subscribe(console.log);
  }

  public submit(): void {
    this.onSubmit.emit(this.form.value);
  }
}
