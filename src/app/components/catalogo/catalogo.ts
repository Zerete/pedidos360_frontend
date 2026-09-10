import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule], // Necesario para dibujar listas con *ngFor
  styleUrl: './catalogo.scss',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  // Lista de prueba para diseñar mientras esperamos el backend de AWS
  productos = [
    { id: 1, nombre: 'Laptop Ultra', precio: 850000, descripcion: 'Perfecta para desarrollo y diseño.', icono: '💻' },
    { id: 2, nombre: 'Teclado Mecánico', precio: 45000, descripcion: 'Teclado retroiluminado para programar.', icono: '⌨️' },
    { id: 3, nombre: 'Monitor 27"', precio: 150000, descripcion: 'Monitor 4K para máxima productividad.', icono: '🖥️' },
    { id: 4, nombre: 'Mouse Ergonómico', precio: 25000, descripcion: 'Precisión y comodidad todo el día.', icono: '🖱️' }
  ];
}