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
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { WishlistItemListComponent } from './wishlist-item-list/wishlist-item-list.component';
import { CustomerOrderItemListComponent } from './customer-order-item-list/customer-order-item-list.component';
import { CustomerOrderItemComponent } from './customer-order-item/customer-order-item.component';
import { CustomerOrderDetailsItemComponent } from './customer-order-details-item/customer-order-details-item.component';
import { ProductRateReviewDetailComponent } from './product-rate-review-detail/product-rate-review-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home', component: HomeComponent,

},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'blogs-page', component: BlogsPageComponent,children: [
    { path: ':id', component: ViewBlogComponent }] },

  // {
  //   path: 'admin', component: AdminComponent, children: [
  //     { path: 'admin-products', component: AdminProductsComponent, children: [
  //       { path: ':id', component: ViewProductComponent }] },

  //   ]
  // },
  { path: 'orders', component: CustomerOrderItemListComponent, children:[
    {path:'details/:id',component:CustomerOrderDetailsItemComponent}] },
    
  { path: 'admin/admin-products', component: AdminProductsComponent, children: [
          { path: ':id', component: ViewProductComponent }] },

  { path: 'admin/admin-blogs', component: AdminBlogsComponent, children: [
            { path: ':id', component: ViewBlogComponent }] },

  { path: 'admin/admin-orders', component: AdminOrdersComponent, children: [
              { path: 'details/:id', component: CustomerOrderDetailsItemComponent }] },

  { path: 'productCategory', component: CategoryProductsComponent,children:[
    {path:':category', component:CategoryProductListComponent}
  ] },
  { path: 'detail/:id', component: QuickViewComponent },
  { path: 'ratesReviews/:id', component: ProductRateReviewDetailComponent },

  { path: 'cart', component: CartProductsComponent,children:[
    {path:'cartProducts', component:CartListComponent}
  ] },
  { path: 'payment', component: PaymentFormComponent },
  { path: 'wishlist', component: WishlistItemListComponent },




 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
