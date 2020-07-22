import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPagesComponent } from './component/text-pages/text-pages.component';
import { TextBandeauComponent } from './component/text-bandeau/text-bandeau.component';



@NgModule({
  declarations: [TextPagesComponent, TextBandeauComponent],
  exports: [TextPagesComponent, TextBandeauComponent],
  imports: [
    CommonModule
  ]
})
export class TextModule { }
