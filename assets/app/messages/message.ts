export class Message {
	content: string;
	username: string;
	messageId: string;
	userId: string;

	// constructor to make the creation of this class easier
	//? means optional atrributes
	constructor (content: string, messageId ?: string, username ?: string, userId ?: string){
		this.content = content;
		this.messageId = messageId;
		this.username = username;
		this.userId = userId;
	}
}