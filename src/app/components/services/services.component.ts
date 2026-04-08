import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '💻',
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas, rápidas e responsivas usando as mais recentes tecnologias do mercado.',
      tags: ['Angular', 'React', 'Node.js', 'TypeScript'],
      featured: true
    },
    {
      icon: '📱',
      title: 'Apps Mobile',
      description: 'Desenvolvimento de aplicativos iOS e Android com experiência nativa e performance excepcional.',
      tags: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: '🏗️',
      title: 'Sistemas Empresariais',
      description: 'ERPs, CRMs e sistemas de gestão personalizados que otimizam processos e aumentam a produtividade.',
      tags: ['ERP', 'CRM', 'API REST', 'Microservices']
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Infraestrutura escalável na nuvem com CI/CD, monitoramento e alta disponibilidade garantida.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      icon: '🤖',
      title: 'Inteligência Artificial',
      description: 'Integração de IA e Machine Learning para automatizar tarefas e extrair insights dos seus dados.',
      tags: ['Python', 'TensorFlow', 'LLMs', 'Computer Vision']
    },
    {
      icon: '🔒',
      title: 'Segurança & Auditoria',
      description: 'Análise de vulnerabilidades, testes de penetração e implementação de boas práticas de segurança.',
      tags: ['Pentest', 'OWASP', 'LGPD', 'Compliance']
    }
  ];
}
