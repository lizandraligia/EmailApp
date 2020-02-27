import { Component, OnInit,Input } from '@angular/core';
import mailbox from '../../assets/mailbox.json'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() searchFilter;
  public mailbox = mailbox;
  public inbox;
  public spam;
  public deleted;
  public draft;
  public sent;
  public contacts;
  public contactsIcons;
  public selected:any;


  constructor() {
    console.log(mailbox)
    this.inbox = mailbox.filter(this.isInbox);
    this.spam = mailbox.filter(this.isSpam);
    this.deleted = mailbox.filter(this.isDeleted);
    this.draft = mailbox.filter(this.isDraft);
    this.sent = mailbox.filter(this.isSent);
    this.selected = this.inbox;
    this.getContacts(mailbox);
  }

  ngOnInit(): void {
  }

  //Filtra os nomes e os ícones dos contatos
  getContacts(emails){
    //Separa todos os nomes dos e-mails
    let persons = emails.map(email=>{
      return email.from.name;
    });

    //Separa todos os ícones dos e-mails
    let icons = emails.map(email=>{
      return email.from.avatar;
    });;

    this.contacts = Array.from(new Set(persons)); //Cria um array com os nomes tirando as repetições
    this.contactsIcons = Array.from(new Set(icons)); //Cria um array com os ícones tirando as repetições

  }

  //Filtra os e-mails que são da pasta inbox
  isInbox(email) {
    return email.folder === 'INBOX';
  }

  //Filtra os e-mails que são da pasta spam
  isSpam(email) {
    return email.folder === 'SPAM';
  }

  //Filtra os e-mails que são da pasta deleted
  isDeleted(email) {
    return email.folder === 'DELETED';
  }

  //Filtra os e-mails que são da pasta drafts
  isDraft(email) {
    return email.folder === 'DRAFTS';
  }

  //Filtra os e-mails que são da pasta sents
  isSent(email) {
    return email.folder === 'SENT';
  }

}
