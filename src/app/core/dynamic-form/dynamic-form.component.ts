import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DynamicForm } from "./dynamic-form.namespace";

@Component({
  selector: "app-dynamic-form[controls]",
  template: `
    <form [class]="class" [formGroup]="form" (ngSubmit)="submitForm()">
      <h2>{{ formTitle }}</h2>
      <ng-container [dynamicForm]="controls"></ng-container>
      <div class="flex align-items-center justify-content-end gap-1">
        <button pButton type="submit" [label]="submitLabel" [disabled]="form.invalid"></button>
        <button
          pButton
          type="button"
          class="p-button-secondary"
          [label]="cancelLabel"
          (click)="submitForm()"
        ></button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent<T> implements OnChanges {
  @Input()
  public controls: DynamicForm.Control[] = [];

  @Input()
  public class?: string = "";

  @Input()
  public formTitle = "";

  @Input()
  public submitLabel = "Создать";

  @Input()
  public cancelLabel = "Отменить";

  @Output()
  public submit = new EventEmitter<T>();

  @Output()
  public cancel = new EventEmitter<T>();

  public form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnChanges(): void {
    this.form = this.createFormGroup(this.controls);

    this.form.valueChanges.subscribe(console.log);
  }

  public submitForm(): void {
    this.submit.emit(this.form.value);
  }

  public cancelForm(): void {
    this.cancel.emit(this.form.value);
  }

  private createFormGroup(
    configs: DynamicForm.Control[],
    fg: FormGroup = this.fb.group({})
  ): FormGroup {
    configs.forEach((config) => {
      if (!("children" in config)) {
        fg.addControl(config.name, this.fb.control(null, config.validators));
      } else {
        this.createFormGroup(config.children, fg);
      }
    });

    return fg;
  }
}
