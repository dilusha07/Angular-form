import { Component, OnInit } from '@angular/core';

interface Record {
  name: string;
  email: string;
  phone: string;
  amount: number;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  records: Record[] = [];
  newRecord: Record = { name: '', email: '', phone: '', amount: 0 };
  totalAmount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    if (this.isValid()) {
      this.records.push(this.newRecord);
      this.totalAmount = this.calculateTotalAmount();
      this.sortRecords();
      this.resetForm();
    }
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    this.totalAmount = this.calculateTotalAmount();
  }

  private isValid(): boolean {
    if (this.records.some((record) => record.email === this.newRecord.email)) {
      alert('Email must be unique!');
      return false;
    }
    return true;
  }

  private calculateTotalAmount(): number {
    return this.records.reduce((total, record) => total + record.amount, 0);
  }

  private sortRecords() {
    this.records.sort((a, b) => b.amount - a.amount);
  }

  private resetForm() {
    this.newRecord = { name: '', email: '', phone: '', amount: 0 };
  }
}
