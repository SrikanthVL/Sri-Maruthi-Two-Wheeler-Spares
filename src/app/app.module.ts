import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { NgApexchartsModule } from "ng-apexcharts";
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './@modules/products/products.module';
import { DashboardModule } from './@modules/dashboard/dashboard.module';
import { LayoutModule } from './@modules/layout/layout.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    // NgApexchartsModule,
    ChartModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ProductsModule,
    BrowserAnimationsModule,
    DashboardModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }