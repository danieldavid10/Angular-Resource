import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from '../../shared/Services/messages.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  constructor(public messageService: MessagesService) { }

  ngOnInit() {
    this.subscription = this.messageService.message.subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
