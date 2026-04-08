import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks = [
    { label: 'Início',    href: '#home' },
    { label: 'Serviços',  href: '#services' },
    { label: 'Sobre',     href: '#about' },
    { label: 'Projetos',  href: '#portfolio' },
    { label: 'Contato',   href: '#contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.mobileMenuOpen.set(false);
  }
}
