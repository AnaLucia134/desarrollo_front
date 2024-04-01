import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: string[] = [
    '../../assets/images/home1.jpg',
    '../../assets/images/home2.jpg',
    '../../assets/images/home3.jpg',
    '../../assets/images/home4.jpg'
  ];

  ngOnInit(): void {
  }

}