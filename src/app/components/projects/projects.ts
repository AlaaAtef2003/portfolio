import { Component } from '@angular/core';
import { iProjects } from '../../models/iprojects';
import { CommonModule } from '@angular/common';
import { Icons } from '../icons/icons';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Icons],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  myproducts: iProjects[];

  constructor() {
    this.myproducts = [

      {
        title: "GameZone! 🎮 🕹️",
        description: "A collection of fun browser games including Snake, Rock Paper Scissors, Tic Tac Toe, and Memory Cards.",
        imageUrl: "assets/gamezone.PNG",  // ← الصور الحقيقية
        projectUrl: "https://github.com/AlaaAtef2003/gamezone-browser-games",
        liveUrl: "https://alaaatefimgs2003.github.io/gamezone-browser-games/index.html"
      },
      {
        title: "FlameHouse",
        description: "A fully responsive and interactive BBQ restaurant website built using HTML, CSS, JavaScript, and Bootstrap 5.",
        imageUrl: "assets/flamehouse.PNG",
        projectUrl: "https://github.com/AlaaAtef2003/Restaurant_Web_app1",
        liveUrl: "https://alaaatef2003.github.io/Restaurant_Web_app1/"
      },
       {
        title: "E-commerce Website",
        description: "An online platform for buying and selling products.",
        imageUrl: "assets/ecommerce.PNG",
        projectUrl: "https://github.com/moazragab12/Cartnest.git",
        liveUrl: ""
      },
      {
        title: "TechSaaS - Smart Task Management",
        description: "A modern SaaS Landing Page for a smart task management platform.",
        imageUrl: "assets/techsaas.PNG",
        projectUrl: "https://github.com/AlaaAtef2003/elevvo-internship",
        liveUrl: "https://alaaatef2003.github.io/elevvo-internship/task5/task5.html"
      },
      {
        title: "Real-Time Weather Dashboard",
        description: "A responsive dashboard fetching live weather data from an API.",
        imageUrl: "assets/weather-dashboard.PNG",
        projectUrl: "https://github.com/AlaaAtef2003/elevvo-internship",
        liveUrl: "https://alaaatef2003.github.io/elevvo-internship/task7/weather.html"
      },
      {
        title: "GPA Calculator",
        description: "Helps students easily calculate their Cumulative GPA.",
        imageUrl: "assets/gpa-calculator.PNG",
        projectUrl: "https://github.com/AlaaAtef2003/gpa-calculator",
        liveUrl: "https://alaaatef2003.github.io/gpa-calculator/"
      },

      {
        title: "MyApp – Organize Your Day",
        description: "A clean, modern, and responsive landing page for MyApp, a productivity tool designed to help users organize tasks, collaborate with teams, and stay on track with smart alerts.",
        imageUrl: "assets/taskflow.PNG",
        projectUrl: "https://github.com/AlaaAtef2003/elevvo-internship",
        liveUrl: "https://alaaatef2003.github.io/elevvo-internship/task3/task3.html"
      },
      {
        title: "TimeSlice",
        description: "A Python desktop app for CPU scheduling algorithms.",
        imageUrl: "assets/timeslice.PNG",
        projectUrl: "https://github.com/AlaaAtef2003/TimeSlice"
      }    ];
  }
}  // ← قوس واحد بس
