import {Component} from 'angular2/core';
import {MessageComponent} from './messages/message.component';
import {Message} from "./messages/message"

@Component({
    selector: 'my-app',
    template: `
    <div class="row">
    	<section class="col-md-8 col-md-offset-2">
    		<!-- ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen 
    		<input type="text" [(ngModel)]="message.content"/> -->
    		
    	</section>
    </div>
    <div class="row">
	    <section  class="col-md-8 col-md-offset-2">
	    	<my-message [message]="message" (editClickd)="message.content=$event"></my-message>  
	    	<!-- tag that the message component will use -->
	    </section> 
    </div>	
    `,
    directives: [MessageComponent]
})
// out component has a property called message
// The message property is echoed in the template
export class AppComponent {
	message: Message = new Message("A new Message", null, 'Max');
}