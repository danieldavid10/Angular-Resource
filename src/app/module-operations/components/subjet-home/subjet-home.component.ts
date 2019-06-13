import { Component, OnInit } from '@angular/core';
// Services
import { MessagesService } from '../../shared/Services/messages.service';

@Component({
  selector: 'app-subjet-home',
  templateUrl: './subjet-home.component.html',
  styleUrls: ['./subjet-home.component.sass']
})
export class SubjetHomeComponent implements OnInit {

  constructor(public messageService: MessagesService) { }

  ngOnInit() {
  }

  setMessage(event) {
    console.log(event.value);
    this.messageService.setMessage(event.value);
  }

}
