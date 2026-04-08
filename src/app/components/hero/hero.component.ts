import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  // O caminho está correto para ser servido a partir da raiz
  private readonly assetPath = 'assets/icons/tech-stack/';

  techStack = [
    { name: 'Angular',   icon: `${this.assetPath}angular.svg` },
    { name: 'React',     icon: `${this.assetPath}react.svg` },
    { name: 'Node.js',   icon: `${this.assetPath}nodejs.svg` },
    { name: 'Python',    icon: `${this.assetPath}python.svg` },
     { name: 'Dotnet Core',    icon: `${this.assetPath}dotnet.svg` },
    { name: 'AWS',       icon: `${this.assetPath}aws.svg` },
    { name: 'Docker',    icon: `${this.assetPath}docker.svg` },
    // CORREÇÃO: Nomes corretos para as tecnologias
    { name: 'Azure',     icon: `${this.assetPath}azure.svg` },
    { name: 'Terraform', icon: `${this.assetPath}terraform.svg` }
  ];

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}