import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {

  droppedList: any = [
    {
      name: 'Shridhar Joshi',
      designation: 'Director, Piramal Enterprises',
      location: 'Mumbai',
      image: null,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
