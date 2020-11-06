import { Component, OnInit } from '@angular/core';
import { CustomersListTableService } from './customers-list-table.service';

@Component({
  selector: 'ngx-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(public service : CustomersListTableService) { }

  ngOnInit(): void {
  }

}
