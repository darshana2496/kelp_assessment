import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-row-detail',
  templateUrl: './candidate-row-detail.component.html',
  styleUrls: ['./candidate-row-detail.component.scss']
})
export class CandidateRowDetailComponent implements OnInit {

  userExtended: any = {
    name: 'Anil Kapoor',
    designation: 'Director, Piramal Enterprises',
    location: 'Kolkatta',
    image: '../../../assets/images/user.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
