import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  @Output() iMail = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCLickIngresar(email:HTMLInputElement){
    if(email.value != null && email.value != ''){
      this.iMail.emit(email.value);
    }
    
  }

}
