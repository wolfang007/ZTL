import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyZtl2SharedModule } from 'app/shared/shared.module';
import { MyZtl2CoreModule } from 'app/core/core.module';
import { MyZtl2AppRoutingModule } from './app-routing.module';
import { MyZtl2HomeModule } from './home/home.module';
import { MyZtl2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyZtl2SharedModule,
    MyZtl2CoreModule,
    MyZtl2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyZtl2EntityModule,
    MyZtl2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyZtl2AppModule {}
