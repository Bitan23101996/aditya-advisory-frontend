//Package Source: https://www.npmjs.com/package/ng-image-slider
//Demo: https://sanjayv.github.io/ng-image-slider/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {

  imageObject: Array<object> = [
    {
      image: 'assets/images/Slider_Images/slide0.png',
      thumbImage: 'assets/images/Slider_Images/slide0.png',
      // alt: 'alt of image',
      
    },
    {
      image: 'assets/images/Slider_Images/slide1.png',
      thumbImage: 'assets/images/Slider_Images/slide1.png',
      // alt: 'alt of image'
    },
    {
      image: 'assets/images/Slider_Images/slide2.jpg',
      thumbImage: 'assets/images/Slider_Images/slide2.jpg',
      // alt: 'alt of image'
    },
    {
      image: 'assets/images/Slider_Images/slide3.png',
      thumbImage: 'assets/images/Slider_Images/slide3.png',
      // alt: 'alt of image'
    },
    {
      image: 'assets/images/Slider_Images/slide5.png',
      thumbImage: 'assets/images/Slider_Images/slide5.png',
      // alt: 'alt of image'
    },
    {
      image: 'assets/images/Slider_Images/slide6.png',
      thumbImage: 'assets/images/Slider_Images/slide6.png',
      // alt: 'alt of image'
    },
    {
      image: 'assets/images/Slider_Images/slide7.png',
      thumbImage: 'assets/images/Slider_Images/slide7.png',
      // alt: 'alt of image'
    },
    {
      image: 'assets/images/Slider_Images/slide_1.png',
      thumbImage: 'assets/images/Slider_Images/slide_1.png',
      // alt: 'alt of image'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
