import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = {
    services: ['Desenvolvimento Web', 'Apps Mobile', 'Sistemas ERP', 'Cloud & DevOps', 'IA & Machine Learning'],
    company:  ['Sobre Nós', 'Portfólio', 'Cases de Sucesso', 'Blog Técnico', 'Carreiras'],
    legal:    ['Política de Privacidade', 'Termos de Uso', 'LGPD']
  };

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
