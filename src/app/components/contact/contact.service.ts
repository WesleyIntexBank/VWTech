import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Cole aqui a "HTTP POST URL" que o Azure gerou no bloco azul
  private readonly azureUrl = 'https://prod-28.northcentralus.logic.azure.com:443/workflows/416e7d7ae6b2461883f853449191da89/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=K-2jwjTC9LJZJ-DjUatuXhpo8a0jPH3PULplM23OsCI';

  constructor(private http: HttpClient) { }


  
  sendContact(dados: { nome: string, email: string, mensagem: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post(this.azureUrl, dados, { headers });
  }
}