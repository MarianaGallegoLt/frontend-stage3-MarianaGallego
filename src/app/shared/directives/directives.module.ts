import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YearFormatDirective } from "./year-format/year-format.directive";

@NgModule({
  declarations: [YearFormatDirective],
  imports: [CommonModule],
  exports: [YearFormatDirective],
})
export class DirectivesModule {}
