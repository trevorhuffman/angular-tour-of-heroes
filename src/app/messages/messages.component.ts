import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  //Ng will inject the singleton MessageService into this
  //property when it creates the MessagesComponent.
  //messageService must be public so it can be bound to in the template.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
