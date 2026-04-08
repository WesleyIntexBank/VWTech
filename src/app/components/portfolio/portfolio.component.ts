import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  emoji: string;
  color: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  activeFilter = signal<string>('Todos');

  filters = ['Todos', 'Web App', 'Mobile', 'Enterprise', 'IA'];

  allProjects: Project[] = [
    {
      title: 'FinanceFlow Pro',
      category: 'Web App',
      description: 'Plataforma completa de gestão financeira com dashboards em tempo real, relatórios automáticos e integração bancária via Open Finance.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Chart.js'],
      emoji: '💰',
      color: '#22c55e'
    },
    {
      title: 'MediCare Connect',
      category: 'Mobile',
      description: 'App de telemedicina conectando pacientes a médicos em todo o Brasil, com videochamada, prontuário eletrônico e receitas digitais.',
      tags: ['React Native', 'WebRTC', 'AWS', 'HL7'],
      emoji: '🏥',
      color: '#3b82f6'
    },
    {
      title: 'LogiTrack ERP',
      category: 'Enterprise',
      description: 'Sistema ERP customizado para empresa de logística com rastreamento em tempo real, gestão de frota e integração com transportadoras.',
      tags: ['Angular', 'Java', 'Oracle', 'Docker'],
      emoji: '🚛',
      color: '#f59e0b'
    },
    {
      title: 'SmartRetail AI',
      category: 'IA',
      description: 'Sistema de recomendação inteligente para e-commerce aumentando conversão em 35% através de ML e análise comportamental.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      emoji: '🤖',
      color: '#8b5cf6'
    },
    {
      title: 'EduPlatform',
      category: 'Web App',
      description: 'LMS (Learning Management System) para instituições de ensino com videoaulas, avaliações adaptativas e certificados digitais.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      emoji: '🎓',
      color: '#ec4899'
    },
    {
      title: 'StockMaster Pro',
      category: 'Enterprise',
      description: 'Sistema de controle de estoque para rede de farmácias com integração ANVISA, previsão de demanda e gestão de validade.',
      tags: ['Angular', 'C#', 'SQL Server', 'Azure'],
      emoji: '📦',
      color: '#14b8a6'
    }
  ];

  get filteredProjects(): Project[] {
    const filter = this.activeFilter();
    return filter === 'Todos'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === filter);
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
