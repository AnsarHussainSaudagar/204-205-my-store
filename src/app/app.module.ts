import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { CustomPipe } from './pipes/custom.pipe';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { PersonalComponent } from './my-profile/personal/personal.component';
import { AddressComponent } from './my-profile/address/address.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'not-found',  
    component: NotFoundComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(p => p.MyProfileModule),
    canActivate: [authGuard]
  },
  {
    path: "**", // wild card
    redirectTo: 'not-found'
  }
 ]

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    CustomPipe,
    FilterProductsPipe,
    AddProductComponent,
    AboutUsComponent,
    MyProfileComponent,
    NotFoundComponent,
    ProductComponent,
    PersonalComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
