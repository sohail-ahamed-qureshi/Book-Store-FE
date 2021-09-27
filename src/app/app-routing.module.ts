import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { OrdersService } from './Services/OrderService/orders.service';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AuthenticationGuard } from './authentication.guard';
import { CartComponent } from './Components/cart/cart.component';
import { BookContentComponent } from './Components/book-content/book-content.component';
import { SignUpFormComponent } from './Components/SignUpFrom/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './Components/loginForm/login-form/login-form.component';
import { HomeComponent } from './Components/home/home/home.component';
import { LoginComponent } from './Components/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'User', component: LoginComponent,
    children:
      [
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full',
        },
        {
          path: 'login',
          component: LoginFormComponent
        },
        {
          path: 'SignUp',
          component: SignUpFormComponent
        }
      ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'Book', component: BookContentComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthenticationGuard] },
  { path: 'MyWishlist', component: WishlistComponent, canActivate: [AuthenticationGuard] },
  { path: 'MyOrders', component: MyOrdersComponent, canActivate: [AuthenticationGuard] },
  { path: 'MyProfile', component: MyProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'OrderSuccess', component: OrderSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
