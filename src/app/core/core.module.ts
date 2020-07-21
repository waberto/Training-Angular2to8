import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './../login/login.module';
import { TemplatesModule } from './../templates/templates.module';
import { TextModule } from './../text/text.module';
import { IconsModule } from './../icons/icons.module';
import { UiModule } from './../ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
  CommonModule,
  TextModule
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
