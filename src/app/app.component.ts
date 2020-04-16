import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mail:string;
  productosCarro:[{id:number, producto:string, precio:number}] = [{id:null,producto:null,precio:null}];

  onMail(email:string){
    this.mail = email;
  }

  onProductosAgregados(prodData: {id:number, producto:string, precio:number}){
    this.productosCarro.push({id:prodData.id, producto:prodData.producto,precio:prodData.precio});
  }
  


  
}
