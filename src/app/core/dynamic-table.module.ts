import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

const PRIMENG_MODULES = [TableModule];

@NgModule({
    declarations: [DynamicTableComponent],
    imports: [TableModule],
    exports: [DynamicTableComponent],
    providers: [],
})
export class DynamicTableModule { }
