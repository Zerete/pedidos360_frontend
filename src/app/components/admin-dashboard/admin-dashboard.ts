import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './admin-dashboard.scss',
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboard {
  pedidos = [
    { id: 101, cliente: 'Cliente Principal (Azure)', producto: 'Laptop Ultra', total: 850000, estado: 'Pendiente' },
    { id: 102, cliente: 'Administrador System', producto: 'Teclado Mecánico', total: 45000, estado: 'En Proceso' },
    { id: 103, cliente: 'Juan Pérez', producto: 'Monitor 27"', total: 150000, estado: 'Completado' },
    { id: 104, cliente: 'María Gómez', producto: 'Mouse Ergonómico', total: 25000, estado: 'Pendiente' }
  ];

  cambiarEstado(pedido: any) {
    if (pedido.estado === 'Pendiente') {
      pedido.estado = 'En Proceso';
    } else if (pedido.estado === 'En Proceso') {
      pedido.estado = 'Completado';
    } else {
      pedido.estado = 'Pendiente';
    }
  }
}