import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { TypeComponent } from './type/type.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { LogoComponent } from './logo/logo.component';
import { UsersComponent } from './admin/users/users.component';
import { OrderCardComponent } from './order-card/order-card.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'my/orders', component: MyOrderComponent},
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin/products/new', component: ProductFormComponent},
  { path: 'confirm', component: ConfirmComponent},
  { path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'cancel-order', component: CancelOrderComponent},
  { path: 'admin/users', component: UsersComponent},
  { path: 'order-card', component: OrderCardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    SearchComponent,
    TypeComponent,
    ConfirmComponent,
    CancelOrderComponent,
    ProductFilterComponent,
    LogoComponent,
    UsersComponent,
    OrderCardComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
