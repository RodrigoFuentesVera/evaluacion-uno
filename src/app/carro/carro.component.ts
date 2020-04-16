import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @Input() productosCarro : [{id:number, producto:string, precio:number}];
  
  constructor() { }

  ngOnInit(): void {
    this.productosCarro.splice(0,1);
  }

  onClickEliminar(inId:number){
    console.log('Eliminar : ' + inId);
    this.productosCarro.splice(inId,1);
  }

}
