import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from '../../layout/layout.component';
import { HeaderComponent } from '../../header/header.component';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { AppRoutingModule } from '../../app.routes';
@NgModule({
  declarations: [LayoutComponent,HeaderComponent,SideNavComponent],
  imports: [
    CommonModule,BrowserModule,FontAwesomeModule,AppRoutingModule
  ]
})
export class LayoutModule { }
