import { Component } from '@angular/core';
import { Icons } from '../icons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [ Icons ,CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  programmingLanguages = ['JavaScript', 'C++', 'C#', 'Java', 'Python', 'MATLAB', 'Verilog', 'MySQL'];
  webDevelopment = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'Typescript', 'Angular', 'FastApi', 'ASP.NET', 'Node.js', 'Git', 'GitHub'];
  embeddedSystems = ['ARM Assembly', 'MIPS Assembly', 'Verilog', 'Embedded Systems'];
  programmingConcepts = ['Object-Oriented Programming (OOP)', 'Data Structures', 'Algorithms'];
  softwareTools = ['Docker','Postman','PostgreSQL','Figma','AutoCAD','MATLAB','Octave','Microsoft Office'];

}
