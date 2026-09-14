import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; 

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.scss']
})
export class AdminDashboard implements OnInit {
  private http = inject(HttpClient);
  
  pedidos: any[] = []; 

  ngOnInit() {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.http.get<any[]>(`${environment.azure.api.url}/api/orders`)
      .subscribe({
        next: (data) => {
          this.pedidos = data;
          console.log('Pedidos cargados desde AWS:', data);
        },
        error: (err) => {
          console.error('Error HTTP. Revisa la pestaña Network en DevTools', err);
        }
      });
  }


  cambiarEstado(pedido: any) {
    console.log('Intentando cambiar estado del pedido:', pedido.id);
    
  }
}