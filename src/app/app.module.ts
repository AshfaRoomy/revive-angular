import { NgModule } from '@angular/core';
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
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
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
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [
    TokenStorage,
    AuthenticationService,
    CategoryService,
    ProductService,
    BlogService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
