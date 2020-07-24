import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './../login/login.module';
import { TemplatesModule } from './../templates/templates.module';
import { TextModule } from './../text/text.module';
import { IconsModule } from './../icons/icons.module';
import { UiModule } from './../ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
CommonModule,
  TextModule,
  RouterModule,
  SharedModule
  ],
  exports: [
    LoginModule,
    TextModule,
    IconsModule,
    UiModule,
    TemplatesModule,
    NgbModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
