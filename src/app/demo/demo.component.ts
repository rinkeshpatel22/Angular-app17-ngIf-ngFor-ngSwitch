import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  // set boolean property for *ngIf demo
  public isDisplayMessage: boolean = false;

  // set list property for *ngFor demo
  public emloyeeList: any = [
    {'name': 'Rahul Shah'},
    {'name': 'Sanjay Modi'},
    {'name': 'Ashish upadhyay'},
    {'name': 'Akash Patel'},
    {'name': 'Narendra Gajjar'}
  ];

  // set property and method for *ngSwitch demo
  public selectedDay: string;
  public onSelectDay(day: any): void{
    this.selectedDay = day.target.value;
  }
}
