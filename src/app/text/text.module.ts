import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPagesComponent } from './component/text-pages/text-pages.component';



@NgModule({
  declarations: [TextPagesComponent],
  exports: [TextPagesComponent],
  imports: [
    CommonModule
  ]
})
export class TextModule { }
