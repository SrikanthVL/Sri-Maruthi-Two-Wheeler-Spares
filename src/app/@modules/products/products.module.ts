import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from '../../products/products/products.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AppRoutingModule } from '../../app.routes';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,BrowserModule,FormsModule,NzSelectModule,AppRoutingModule,
    NzInputModule,NzButtonModule,NzDropDownModule,NzIconModule
  ]
})
export class ProductsModule { }
