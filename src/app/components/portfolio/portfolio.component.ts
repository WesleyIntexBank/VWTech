import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  emoji: string;
  color: string;
  image?: string;
  link?: string;
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

  filters = ['Todos', 'Web App', 'Mobile', 'Enterprise', 'IA', 'Segurança', 'DevOps'];

  allProjects: Project[] = [
    {
      title: 'StockMaster Pro',
      category: 'Web App',
      description: 'Sistema de controle de estoque com rastreamento em tempo real, alertas de estoque baixo, previsão de demanda e relatórios automáticos por categoria.',
      tags: ['Angular', 'C#', 'SQL Server', 'Azure'],
      emoji: '📦',
      color: '#22c55e',
      image: 'assets/portfolio/stock-system.svg',
      link: '#'
    },
    {
      title: 'FinanceFlow Pro',
      category: 'Web App',
      description: 'Plataforma completa de gestão de transações financeiras com dashboards em tempo real, relatórios automáticos e integração bancária via Open Finance.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Chart.js'],
      emoji: '💰',
      color: '#3b82f6',
      image: 'assets/portfolio/transaction-system.svg',
      link: '#'
    },
    {
      title: 'Sabor & Arte — App Restaurante',
      category: 'Mobile',
      description: 'Aplicativo completo para gestão de pedidos em restaurantes com menu digital, controle de mesas, integração com cozinha e pagamento integrado.',
      tags: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
      emoji: '🍽️',
      color: '#f59e0b',
      image: 'assets/portfolio/restaurant-app.svg',
      link: '#'
    },
    {
      title: 'ModaStyle — E-commerce de Roupas',
      category: 'Mobile',
      description: 'Plataforma de e-commerce de moda com catálogo dinâmico, busca inteligente, provador virtual e checkout simplificado com múltiplos meios de pagamento.',
      tags: ['React Native', 'GraphQL', 'Stripe', 'AWS S3'],
      emoji: '👗',
      color: '#ec4899',
      image: 'assets/portfolio/fashion-ecommerce.svg',
      link: '#'
    },
    {
      title: 'CambioPro — Câmbio Digital',
      category: 'Mobile',
      description: 'App de compra e venda de moeda estrangeira com cotações em tempo real, simulador de câmbio, histórico de operações e envio internacional via SWIFT.',
      tags: ['Flutter', 'Dart', 'REST API', 'WebSocket'],
      emoji: '💱',
      color: '#eab308',
      image: 'assets/portfolio/currency-exchange.svg',
      link: '#'
    },
    {
      title: 'Extrato Financeiro Enterprise',
      category: 'Enterprise',
      description: 'Sistema de extrato e conciliação de transações para empresas de médio e grande porte, com auditoria completa, exportação em múltiplos formatos e integração ERP.',
      tags: ['Angular', 'Java', 'Oracle', 'Kafka'],
      emoji: '📊',
      color: '#14b8a6',
      image: 'assets/portfolio/transaction-statement.svg',
      link: '#'
    },
    {
      title: 'CRM — Cadastro de Clientes',
      category: 'Enterprise',
      description: 'Sistema de CRM para gestão completa de clientes com perfil detalhado, histórico de compras, segmentação automática e integração com ferramentas de marketing.',
      tags: ['Angular', 'C#', 'PostgreSQL', 'Azure'],
      emoji: '👥',
      color: '#6366f1',
      image: 'assets/portfolio/customer-registration.svg',
      link: '#'
    },
    {
      title: 'PIM — Cadastro de Produtos',
      category: 'Enterprise',
      description: 'Sistema PIM (Product Information Management) para cadastro centralizado de produtos com gestão de variações, preços, estoque e distribuição multicanal.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Elasticsearch'],
      emoji: '🏷️',
      color: '#14b8a6',
      image: 'assets/portfolio/product-registration.svg',
      link: '#'
    },
    {
      title: 'SmartRetail AI',
      category: 'IA',
      description: 'Sistema de recomendação inteligente com rede neural profunda para e-commerce, aumentando conversão em 35% através de ML e análise comportamental em tempo real.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
      emoji: '🤖',
      color: '#8b5cf6',
      image: 'assets/portfolio/ai-neural.svg',
      link: '#'
    },
    {
      title: 'SecureAuth — Segurança e Auditoria',
      category: 'Segurança',
      description: 'Plataforma de autenticação e autorização com JWT, RBAC, MFA e auditoria completa. Integração com Azure AD, AWS IAM e SSO corporativo via OAuth 2.0.',
      tags: ['Node.js', 'JWT', 'OAuth 2.0', 'Azure AD'],
      emoji: '🔐',
      color: '#ef4444',
      image: 'assets/portfolio/security-jwt.svg',
      link: '#'
    },
    {
      title: 'DevOps Pipeline — Cloud Native',
      category: 'DevOps',
      description: 'Pipeline CI/CD completo com containerização Docker, orquestração Kubernetes, infraestrutura como código via Terraform e monitoramento com Prometheus e Grafana.',
      tags: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
      emoji: '☁️',
      color: '#06b6d4',
      image: 'assets/portfolio/devops-cloud.svg',
      link: '#'
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
