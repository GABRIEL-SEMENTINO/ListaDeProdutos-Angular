import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CustomersListTableService extends AbstractTableData{

  constructor() { super(); }

  getData() {
    return [
      { id: "1", name: 'Gabriel', cpf: '00000000000', price: 1.99, quantity: 2 },
      { id: "2", name: 'Gabriel', cpf: '00000000000', price: 4.99, quantity: 5 },
      { id: "3", name: 'Gabriel', cpf: '00000000000', price: 3.75, quantity: 9 },
      { id: "4", name: 'Gabriel', cpf: '00000000000', price: 8.34, quantity: 3 },
      { id: "5", name: 'Gabriel', cpf: '00000000000', price: 6.69, quantity: 2 }
    ];
  }

  getColumns() {
    return {
      id: {
        title: 'Código',
        type: 'string',
        filter: true,
        width: '10%',
      },
      name: {
        title: 'Nome',
        type: 'string',
        filter: true,
        width: '15%',
      },
      cpf: {
        title: 'CPF',
        type: 'string',
        filter: true,
        width: '20%',
      },
    }
  };

}
