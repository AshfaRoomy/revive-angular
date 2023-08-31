import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CategoryProductListComponent } from './category-products/category-product-list/category-product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartListComponent } from './cart-products/cart-list/cart-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home', component: HomeComponent,

},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-list', component: ProductListComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: ':id', component: ViewProductComponent }

    ]
  },
  // { path: 'category/women', component: CategoryProductListComponent },

  { path: 'productCategory', component: CategoryProductsComponent,children:[
    {path:':category', component:CategoryProductListComponent}
  ] },
  { path: 'detail/:id', component: QuickViewComponent },

  { path: 'cart', component: CartProductsComponent,children:[
    {path:'cartProducts', component:CartListComponent}
  ] }


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
