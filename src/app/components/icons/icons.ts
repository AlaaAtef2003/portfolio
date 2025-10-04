import { Component } from '@angular/core';
import { Iicons } from '../../models/iicons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-icons',
  imports: [CommonModule],
  templateUrl: './icons.html',
  styleUrl: './icons.css'
})
export class Icons {
   myIcons: Iicons[] = [];
private iconClasses: string[] = [
  'fab fa-angular',        // Angular
  'fab fa-html5',          // HTML5
  'fab fa-css3-alt',       // CSS3
  'fab fa-js',             // JavaScript
  'fab fa-square-js',      // TypeScript (approximate)
  'fab fa-bootstrap',      // Bootstrap
  'fas fa-c',              // C (generic C icon)
  'fas fa-code',           // C++ (generic code icon)
  'fab fa-java',           // Java
  'fas fa-laptop-code',    // .NET (approximate)
  'fas fa-database',       // SQL / Databases (optional)
];


  private colors = ['#FFD700', '#FF69B4', '#1E90FF', '#FFA500'];

  constructor() {

    // تحديث الأيقونات كل 2 ثانية: أيقونات جديدة تظهر وأخرى تختفي
    setInterval(() => {
      this.myIcons = this.myIcons.filter(() => Math.random() > 0.4);
      this.addRandomIcon();
      this.addRandomIcon();

    }, 1000);
  }private addRandomIcon() {
  const section = document.querySelector('.home-section') as HTMLElement;
  const sectionWidth = section.offsetWidth;
  const sectionHeight = section.offsetHeight;

  const startY = 4 + sectionHeight * Math.random(); // أيقونات تبدأ داخل الـ section
  const leftX = sectionWidth * Math.random();

  this.myIcons.push({
    top: startY,
    left: leftX,
    class: this.iconClasses[Math.floor(Math.random() * this.iconClasses.length)],
    color: this.colors[Math.floor(Math.random() * this.colors.length)],
    opacity: 1 + Math.random() * 0.5,
    duration: 5+ Math.random() * 5,
    startY: startY,
    transform: ''
  });
}


}
