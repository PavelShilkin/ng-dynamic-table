import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { DynamicTableModule } from "./core/dynamic-table.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DynamicTableModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
