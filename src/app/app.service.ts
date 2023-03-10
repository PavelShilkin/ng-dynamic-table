import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { of } from "rxjs";
import { DynamicForm } from "./core/dynamic-form/dynamic-form.namespace";
import { DynamicTable } from "./core/dynamic-table.namespace";

interface IExample {
  id: number;
  name: string;
  date: Date;
  phone: number | null;
}

@Injectable()
export class AppService {
  public data$ = of<DynamicTable.Value<IExample>[]>([
    { id: 1, date: new Date(), name: "Pavel", phone: null },
    { id: 2, date: new Date(), name: "Anna", phone: 123456 },
    { id: 3, date: new Date(), name: "Georgiy", phone: 654321 },
  ]);

  public columns$ = of<DynamicTable.Column<IExample>[]>([
    { header: "ID", pathToValue: "`${value.id}`" },
    { header: "Имя", pathToValue: "`${value.name}`" },
    { header: "Телефон", pathToValue: "`${value.phone}`" },
    { header: "Дата", pathToValue: "`${value.date.toLocaleDateString()}`" },
  ]);

  public controls$ = of<DynamicForm.Control[]>([
    {
      type: DynamicForm.Components.InputText,
      name: "name",
      label: "ФИО",
      validators: [Validators.required],
    },
    {
      type: DynamicForm.Components.Box,
      name: "personInfo",
      styleClass: "flex gap-1",
      children: [
        {
          type: DynamicForm.Components.InputNumber,
          name: "age",
          label: "Возраст",
          validators: [Validators.required],
        },
        {
          type: DynamicForm.Components.Calendar,
          name: "birthDate",
          label: "Дата рождения",
        },
        {
          type: DynamicForm.Components.Dropdown,
          name: "gender",
          label: "Пол",
          validators: [Validators.required],
          options: [
            { label: "Жен", value: "female" },
            { label: "Муж", value: "male" },
          ],
        },
      ],
    },
    {
      type: DynamicForm.Components.Box,
      styleClass: "flex gap-1",
      name: "phoneInfo",
      children: [
        {
          type: DynamicForm.Components.InputNumber,
          name: "phone",
          label: "Телефон",
        },

        {
          type: DynamicForm.Components.InputText,
          name: "email",
          label: "Электронная почта",
        },
      ],
    },
  ]);
}
