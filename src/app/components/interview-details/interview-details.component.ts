import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent | any;

  slides = [
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" },
    { img: "../../../assets/images/user.png" }
  ];

  candidates: any = [
    {
      id: 1,
      name: 'Aniket Joshi',
      designation: 'Director, Piramal Enterprises',
      image: '../../../assets/images/user.png',
      location: 'Mumbai',
      leads: 7,
      captured: 3
    },
    {
      id: 2,
      name: 'Kunjan Kumar',
      designation: 'Director, Housing and Development…',
      image: '../../../assets/images/user.png',
      location: 'New Delhi',
      leads: 7,
      captured: 3
    },
    {
      id: 3,
      name: 'Kunal Kamra',
      designation: 'Director, Piramal Enterprises',
      image: '../../../assets/images/user.png',
      location: 'Mumbai',
      leads: 7,
      captured: 3
    }
  ]

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4, arrows: false, speed: 500 };

  constructor() { }

  ngOnInit() {
  }


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  nextSlide() {
    this.slickModal.slickNext()
  }
  prevSlide() {
    this.slickModal.slickPrev()
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.candidates, event.previousIndex, event.currentIndex);
  }
}
