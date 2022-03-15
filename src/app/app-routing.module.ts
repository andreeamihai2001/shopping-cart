import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LoginSigninComponent } from './components/login-signin/login-signin.component';

const routes: Routes = [
  {path: '', redirectTo:'about-us', pathMatch: 'full'},
  {path:'products-list', component:ProductsListComponent},
  {path: 'cart', component:CartComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'login-signin', component:LoginSigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
