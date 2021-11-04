import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showFlag: boolean = false;
  selectedImageIndex: number = -1;

  constructor() {}

  ngOnInit(): void {}

  showLightbox(index: number) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  imageObject: Array<object> = [
    {
      image: 'https://via.placeholder.com/1920x1080/f00/f0f',
    },
  ];
}
