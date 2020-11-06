import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersComponent } from './customers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule

  ]
})
export class CustomersModule { }
