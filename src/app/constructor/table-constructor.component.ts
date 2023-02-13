import { DynamicTable } from "src/app/core/dynamic-table.namespace";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table-constructor",
  templateUrl: "./table-constructor.component.html",
})
export class TableConstructorComponent implements OnInit {
  public jsonData = `[
    {
    "name":"Pavel",
    "phone":123123,
    "id":1
    }
    ]`;

  public data = [];

  constructor() {}

  ngOnInit() {
    this.jsonChange();
  }

  public jsonChange(): void {
    try {
      this.data = JSON.parse(this.jsonData);
    } catch {
      this.data = [];
    }
  }
}
