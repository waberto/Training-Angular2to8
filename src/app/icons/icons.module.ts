import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './compoents/icon/icon-nav.component';
import { IconCloseComponent } from './compoents/icon/icon-close.component';
import { IconEditComponent } from './compoents/icon/icon-edit.component';
import { IconDeleteComponent } from './compoents/icon/icon-delete.components';



@NgModule({
  declarations: [IconNavComponent, IconCloseComponent, IconDeleteComponent, IconEditComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconCloseComponent, IconDeleteComponent, IconEditComponent]
})
export class IconsModule { }
