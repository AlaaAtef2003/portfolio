import { Component } from '@angular/core';
import { Icons } from '../icons/icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [Icons ,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 titles: string[] = ['web Developer', 'Software Engineer', 'UI Designer'];
  currentTitle: string = this.titles[0];
  index: number = 0;

  constructor() {
    this.rotateTitles();
  }

  rotateTitles() {
    setInterval(() => {
      this.index = (this.index + 1) % this.titles.length;
      this.currentTitle = this.titles[this.index];
    }, 2000); // تغيير كل 2 ثانية
  }

}
