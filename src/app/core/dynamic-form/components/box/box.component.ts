import { Component, Input } from "@angular/core";
import { DynamicForm } from "../../dynamic-form.namespace";

@Component({
  selector: "app-box",
  template: `
    <div [class]="config.class">
      <ng-container [dynamicForm]="config.children"></ng-container>
    </div>
  `,
})
export class BoxComponent implements DynamicForm.BaseBoxComponent {
  @Input()
  public config!: DynamicForm.BoxControl;
}
