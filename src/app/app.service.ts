import { Injectable } from "@angular/core";
import { of } from "rxjs";
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
    { header: "ID", format: (value) => value.id },
    { header: "Имя", format: (value) => value.name },
    { header: "Телефон", format: (value) => value.phone },
    { header: "Дата", format: (value) => value.date.toLocaleDateString() },
  ]);
}
