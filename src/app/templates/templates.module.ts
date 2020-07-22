import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOneColsComponent } from './components/template-one-cols/template-one-cols.component';
import { TemplateTwoColsComponent } from './components/template-two-cols/template-two-cols.component';



@NgModule({
  declarations: [TemplateOneColsComponent, TemplateTwoColsComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateOneColsComponent, TemplateTwoColsComponent]
})
export class TemplatesModule { }
