import { Component, HostListener, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { ProjectsComponent } from './components/projects/projects';
import { CommonModule } from '@angular/common';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Loader } from './components/loader/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet, Loader, Footer, HeaderComponent,
    Home, About, ProjectsComponent, Skills, Contact, CommonModule
  ]
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');

  activeSection: string = 'home';
  showLoader: boolean = true; // في الأول اللودر شغال

  ngOnInit(): void {
    // بعد 10 ثواني يخفي اللودر ويظهر باقي الصفحات
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

  // scroll spy
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100; // offset للـ navbar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = section.offsetTop + section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        this.activeSection = section.getAttribute('id')!;
      }
    });
  }
}
