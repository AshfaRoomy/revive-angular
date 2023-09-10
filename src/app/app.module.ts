import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenStorage } from './services/TokenStorage.service';
import { AuthenticationService } from './services/AuthenticationService.service';
import { AuthInterceptor } from './helper/AuthInterceptorProviders';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { CategoryService } from './services/CategoryService.service';
import { ProductService } from './services/ProductService.service';
import { BlogService } from './services/BlogService.service';
import { AddBlogDialogComponent } from './add-blog-dialog/add-blog-dialog.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CategoryProductItemComponent } from './category-products/category-product-item/category-product-item.component';
import { CategoryProductListComponent } from './category-products/category-product-list/category-product-list.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CartService } from './services/CartService.service';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { CartListComponent } from './cart-products/cart-list/cart-list.component';
import { CartItemComponent } from './cart-products/cart-item/cart-item.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { UserService } from './services/UserService.service';
import { OrderService } from './services/OrderServices.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { CartOrdersItemComponent } from './cart-orders-item/cart-orders-item.component';
import { CartOrdersListComponent } from './cart-orders-list/cart-orders-list.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { WishlistItemListComponent } from './wishlist-item-list/wishlist-item-list.component';
import { WishlistService } from './services/WishlistService.service';
import { CustomerOrderItemComponent } from './customer-order-item/customer-order-item.component';
import { CustomerOrderItemListComponent } from './customer-order-item-list/customer-order-item-list.component';
import { CustomerOrderDetailsItemComponent } from './customer-order-details-item/customer-order-details-item.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { RateReviewFormComponent } from './rate-review-form/rate-review-form.component';
import { RateReviewService } from './services/RateReviewService.service';
import { CustomerBlogComponent } from './customer-blog/customer-blog.component';
import { CustomerBlogListComponent } from './customer-blog-list/customer-blog-list.component';
import { NgRatingBarModule } from 'ng-rating-bar';
import { ProductRateReviewDetailComponent } from './product-rate-review-detail/product-rate-review-detail.component';
import { RateListComponent } from './rate-list/rate-list.component';
import { RateItemComponent } from './rate-item/rate-item.component';

// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ProductComponent,
    ProductListComponent,
    AddProductDialogComponent,
    AddCategoryDialogComponent,
    AddBlogDialogComponent,
    ViewProductComponent,
    EditProductComponent,
    CategoryProductItemComponent,
    CategoryProductListComponent,
    QuickViewComponent,
    CategoryProductsComponent,
    CartProductsComponent,
    CartListComponent,
    CartItemComponent,
    PaymentFormComponent,
    AdminProductsComponent,
    AdminBlogsComponent,
    BlogComponent,
    BlogListComponent,
    ViewBlogComponent,
    EditBlogComponent,
    BlogsPageComponent,
    AdminOrdersComponent,
    ViewOrdersComponent,
    CartOrdersItemComponent,
    CartOrdersListComponent,
    WishlistItemComponent,
    WishlistItemListComponent,
    CustomerOrderItemComponent,
    CustomerOrderItemListComponent,
    CustomerOrderDetailsItemComponent,
    RateReviewFormComponent,
    CustomerBlogComponent,
    CustomerBlogListComponent,
    ProductRateReviewDetailComponent,
    RateListComponent,
    RateItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgRatingBarModule
      ],
  providers: [
    TokenStorage,
    AuthenticationService,
    CategoryService,
    ProductService,
    BlogService,
    CartService,
    UserService,
    DatePipe,
    OrderService,
    WishlistService,
    RateReviewService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
