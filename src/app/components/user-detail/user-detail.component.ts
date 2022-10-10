import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() userData: UserInfo = {
    name: 'Anil Kapoor',
    designation: 'Director, Piramal Enterprises',
    location: 'Kolkatta',
    image: '../../../assets/images/user.png'
  };

  constructor() { }

  ngOnInit() {
  }

}

interface UserInfo {
  name: string;
  designation: string;
  location: string;
  image?: string;
}
