import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  activeSection: string = 'home';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 120; // adjust offset

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.clientHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        this.activeSection = section.getAttribute('id')!;
      }
    });
  }

  setActive(sectionId: string) {
    this.activeSection = sectionId;
  }
}
