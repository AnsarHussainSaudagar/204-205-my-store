import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  {
    // http://localhost:4200/profile/address
    path: '',
    component: MyProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal',
        pathMatch: 'full'
      }
      ,{
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
