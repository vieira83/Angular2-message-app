export class User {
	//using public creates also the property in the user Class as 
	//well as get them , 
	// will look like email: string;

	constructor (public email: string, public password: string, public firstName?: string, public lastName?: string){
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}