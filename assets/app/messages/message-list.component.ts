import {Component} from 'angular2/core';
import {MessageComponent} from './message.component';
import {Message} from "./message";

@Component ({
	selector: 'my-message-list',
	template: `
		<section  class="col-md-8 col-md-offset-2">
	    	<my-message  *ngFor="#message of messages" [message]="message" (editClickd)="message.content=$event"></my-message>  
	    </section>
	`,
	directives: [MessageComponent]
})

export class MessageListComponent {
	messages: Message [] = [
		new Message("A new Message", null, 'Max'),
		new Message("A second Message", null, 'Vlad')
	]
}
