import {Component} from 'angular2/core';
import {Message} from "./message";

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
	onCreate(content:string) {
		const message: Message = new Message(content, null, "Vlad");
		console.log(message);
	}
}