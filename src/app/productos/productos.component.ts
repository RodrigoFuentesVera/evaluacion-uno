import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos : [{id: number, producto: string, precio: number}] = [{id: 1, producto: 'Impresora', precio: 75000}];

  @Output() outProductos = new EventEmitter<{id:number, producto:string, precio:number}>();


  constructor() { 
    this.productos.push({id: 2, producto: 'Monitor', precio: 120000});
    this.productos.push({id: 3, producto: 'Teclado', precio: 10000});
    this.productos.push({id: 4, producto: 'Mouse', precio: 7000});
    this.productos.push({id: 5, producto: 'Parlante', precio: 25000});
    this.productos.push({id: 6, producto: 'Pendrive', precio: 8000});
    this.productos.push({id: 7, producto: 'Notebook', precio: 450000});
  }

  ngOnInit(): void {
  }

  onCLickAgregar(inId:number, inProducto:string, inPrecio:number){
    console.log('PRoducto : ' + inId);
    this.outProductos.emit({id:inId, producto:inProducto, precio:inPrecio});
  }



}
