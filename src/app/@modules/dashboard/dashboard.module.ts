import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from '../../header/header.component';
// import { SideNavComponent } from '../../side-nav/side-nav.component';
import { MainComponent } from '../../Dashboard/main/main.component';
import { DashboardComponent } from '../../Dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopWidgetsComponent } from '../../Dashboard/top-widgets/top-widgets.component';
import { SalesByMonthComponent } from '../../Dashboard/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from '../../Dashboard/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from '../../Dashboard/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from '../../Dashboard/top-three-products/top-three-products.component';
@NgModule({
  declarations: [DashboardComponent,TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,MainComponent],
  imports: [
    CommonModule,BrowserModule,FontAwesomeModule,
    ChartModule,FormsModule,BrowserAnimationsModule
  ]
})
export class DashboardModule { }
