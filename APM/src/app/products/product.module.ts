import { SharedModule } from './../shared/shared.module';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
