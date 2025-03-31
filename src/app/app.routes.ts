import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products/products.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    // {
    //     path:"",
    //     component:
    // },
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"dashboard",
                component:DashboardComponent
            },
            {
                path:'products', 
                component:ProductsComponent
            },
        ]
    },
    
    // {path:'dashboard', component:LayoutComponent},

];

@NgModule ({
    imports:[CommonModule,RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}