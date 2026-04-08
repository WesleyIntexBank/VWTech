import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  suffix: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats: Stat[] = [
    { value: '200', suffix: '+', label: 'Projetos Entregues', icon: '🚀' },
    { value: '98', suffix: '%', label: 'Clientes Satisfeitos', icon: '⭐' },
    { value: '50', suffix: '+', label: 'Empresas Atendidas', icon: '🏢' },
    { value: '8', suffix: '+', label: 'Anos de Mercado', icon: '📅' }
  ];
}
