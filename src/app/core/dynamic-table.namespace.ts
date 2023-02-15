export namespace DynamicTable {
  export type Value<T extends object = {}> = T & { [key: string]: any };

  export interface Column<T extends object = {}> {
    header: string;
    pathToValue: string;
    field?: string;
  }

  export type ColumnFormat<T extends object = {}> = (
    value: DynamicTable.Value<T>
  ) => string | number | null;
}
