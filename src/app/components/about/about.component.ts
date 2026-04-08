import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    { icon: '🎯', title: 'Foco no Resultado', desc: 'Cada linha de código escrita com propósito claro e alinhada aos objetivos do seu negócio.' },
    { icon: '⚡', title: 'Agilidade Real', desc: 'Entregas contínuas com metodologia Scrum/Kanban adaptada à realidade do seu projeto.' },
    { icon: '🔬', title: 'Qualidade Técnica', desc: 'Code review, testes automatizados e CI/CD garantindo software robusto e confiável.' },
    { icon: '🤝', title: 'Parceria Duradoura', desc: 'Não somos apenas fornecedores — somos parceiros comprometidos com o seu crescimento.' }
  ];
}
