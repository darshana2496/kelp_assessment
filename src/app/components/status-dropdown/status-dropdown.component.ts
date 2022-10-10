import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-dropdown',
  templateUrl: './status-dropdown.component.html',
  styleUrls: ['./status-dropdown.component.scss']
})
export class StatusDropdownComponent implements OnInit {

  showOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDropdown() {
    this.showOptions = !this.showOptions
  }

}
