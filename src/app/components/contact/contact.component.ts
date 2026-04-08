import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Injetando o serviço no construtor
  constructor(private contactService: ContactService) {}

  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  submitted = signal(false);
  loading = signal(false);

  services = [
    'Desenvolvimento Web',
    'App Mobile',
    'Sistema Empresarial (ERP/CRM)',
    'Cloud & DevOps',
    'Inteligência Artificial',
    'Consultoria Técnica',
    'Outro'
  ];

  contacts = [
    { icon: '📱', label: 'WhatsApp', value: '+55 (11) 9 8050-5169' },
    { icon: '📍', label: 'Localização', value: 'São Paulo, SP — Brasil' },
    { icon: '⏰', label: 'Horário', value: 'Seg–Sab, 9h–18h' }
  ];

  onSubmit() {
    // Validação básica
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.loading.set(true);

    // Montando o objeto exatamente como o Azure espera (case-sensitive)
    const payload = {
      nome: this.formData.name,
      email: this.formData.email,
      mensagem: `
              Empresa: ${this.formData.company} <br>
              <br>
              Serviço: ${this.formData.service} <br>
              <br>
              Mensagem: ${this.formData.message} <br>
            `
    
    
    };

    // Chamada real para o Azure Logic App
    this.contactService.sendContact(payload).subscribe({
      next: (res) => {
        console.log('Sucesso!', res);
        this.loading.set(false);
        this.submitted.set(true); 
        this.resetForm();
      },
      error: (err) => {
        console.error('Erro ao enviar para o Azure', err);
        this.loading.set(false);
        alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    });
  }

  // Método auxiliar para limpar o formulário após sucesso
  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    };
  }
}