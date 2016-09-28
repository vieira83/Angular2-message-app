//Start the filename with the name of the directory and then what 
//it is component

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Message} from "./message" //same folder

@Component ({
	selector: 'my-message', //should be unique
	template: `
		<article class="panel panel-default" [ngStyle]="{'background-color':color}" (mousenter)="color='white'">
        <!-- ngStyle is a property binding, takes a javascript object with keys values -->
    		<div class="panel-body">
    			{{ message.content }}
    		</div>
    		 <footer class="panel-footer">
    		 	<div class="author">
    		 		{{ message.username }}
    		 	</div>
    		 	<div class="config">
    		 		<a href="#" (click)="onClick()">Edit</a><!-- default click event -->
    		 		<a href="#">Delete</a>
    		 	</div>
    		</footer>
    	</article> 
	`,
	 styles: [`
    	//this quote if wrong will cause issues
    	.author {
    		display:inline-block;
    		font-style: italic;
    		font-size: 12px;
    		width: 80%
    	}
    	.config {
    		display:inline-block;
    	}
    `]
})
export class MessageComponent {
	//message: Message = new Message('the Content', null, 'Max');
    @Input() message:Message; // @input() sets up a custom property

    @Output() editClicked = new EventEmitter<string>(); // @Outuput sets up a custom event
    color = "orange";
    show = true; // if changed to false, nothing will get randered , becasue of *ngif will be false and it will remove the article from the DOM
    onClick () {
        //this.message.content = "Changed The message" static change

        this.editClicked.emit('Changed the message');
        //Emit() used to emit an event and everything listening to it will be able to act upon it
    }
}