import {Component} from 'angular2/core';
import {Message} from "./message";
import {MessageService} from "./message.service"

//component decorator
@Component({
	selector: 'my-message-input',
	template: `
	<section class="col-md-8 col-md-offset-2">
		<div class="form-group">
			<label for="content">Content</label>
			<input type="text" class="form-control" id="content" #input>
		</div>
		<button type="submit" class="btn btn-primary" (click)="onCreate(input.value)"> Send Message</button>
	</section>
	`,
	directives: []
})
export class MessageInputComponent {
	// We pass the messages to the message.service
	// Angular will check the constructor if there's a dependency injection
	// We define a private property and bind the MessageServie to it
	constructor(private _messageService: MessageService){}
	onCreate(content:string) {
		const message: Message = new Message(content, null, "Vlad");
		this._messageService.addMessage(message);
		console.log(message);
	}
}
