import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-comments',
  templateUrl: './editable-comments.component.html',
  styleUrls: ['./editable-comments.component.scss']
})
export class EditableCommentsComponent implements OnInit {
  showInput: boolean = false;
  showDropdown: boolean = false;

  @Input() comment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  editComment() {
    this.showInput = true
    this.showDropdown = false;
  }

  hideEditor() {
    this.showInput = false
  }

}
