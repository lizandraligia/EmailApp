import { Component, OnInit, Input,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit{

  @Input() searchFilter;
  @Input() listaEmails;
  public emailSelecionado:any;

  constructor() { 
    console.log(this.listaEmails)
  }

  //Seleciona o e-mail que foi clicado e salva na variável que será mandada para o componente filho
  selectEmail(email){
    console.log(this.searchFilter)
    this.emailSelecionado = email;
  }

  ngOnInit(): void {
    //Seleciona o primeiro e-mail da lista como padrão a ser aberto
    if(this.listaEmails){
      this.emailSelecionado = this.listaEmails[0];
    }
    console.log(this.emailSelecionado)
  }

}
