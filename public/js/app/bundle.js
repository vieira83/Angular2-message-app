var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                // constructor to make the creation of this class easier
                //? means optional atrributes
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.messageId = messageId;
                    this.username = username;
                    this.userId = userId;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.service", ["messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var message_1;
    var MessageService;
    return {
        setters:[
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            //Service doesn't need a metadata(components do) it's just a normal class
            MessageService = (function () {
                function MessageService() {
                    this.messages = [];
                }
                MessageService.prototype.addMessage = function (message) {
                    this.messages.push(message);
                    console.log(this.messages);
                };
                ;
                MessageService.prototype.getMessages = function () {
                    return this.messages;
                };
                ;
                MessageService.prototype.editMessage = function (message) {
                    this.messages[this.messages.indexOf(message)] = new message_1.Message("Edited", null, "Vladi");
                };
                MessageService.prototype.deleteMessage = function (message) {
                    this.messages.splice(this.messages.indexOf(message), 1);
                };
                return MessageService;
            }());
            exports_2("MessageService", MessageService);
        }
    }
});
//Start the filename with the name of the directory and then what
//it is component
System.register("messages/message.component", ["angular2/core", "messages/message", "messages/message.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_1, message_2, message_service_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent(_messageService) {
                    this._messageService = _messageService;
                    this.editClicked = new core_1.EventEmitter(); // @Outuput sets up a custom event
                    this.color = "orange";
                    this.show = true; // if changed to false, nothing will get randered , becasue of *ngif will be false and it will remove the article from the DOM
                }
                MessageComponent.prototype.onClick = function () {
                    //this.message.content = "Changed The message" static change
                    this.editClicked.emit('Changed the message');
                    //Emit() used to emit an event and everything listening to it will be able to act upon it
                };
                MessageComponent.prototype.onEdit = function () {
                    this._messageService.editMessage(this.message);
                };
                MessageComponent.prototype.onDelete = function () {
                    this._messageService.deleteMessage(this.message);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_2.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    // @input() sets up a custom property
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n\t\t<article class=\"panel panel-default\" [ngStyle]=\"{'background-color':color}\" (mousenter)=\"color='white'\">\n        <!-- ngStyle is a property binding, takes a javascript object with keys values -->\n    \t\t<div class=\"panel-body\">\n    \t\t\t{{ message.content }}\n    \t\t</div>\n    \t\t <footer class=\"panel-footer\">\n    \t\t \t<div class=\"author\">\n    \t\t \t\t{{ message.username }}\n    \t\t \t</div>\n    \t\t \t<div class=\"config\">\n    \t\t \t\t<a href=\"#\" (click)=\"onEdit()\">Edit</a><!-- default click event -->\n    \t\t \t\t<a href=\"#\" (click)=\"onDelete()\">Delete</a>\n    \t\t \t</div>\n    \t\t</footer>\n    \t</article>\n\t",
                        styles: ["\n    \t//this quote if wrong will cause issues\n    \t.author {\n    \t\tdisplay:inline-block;\n    \t\tfont-style: italic;\n    \t\tfont-size: 12px;\n    \t\twidth: 80%\n    \t}\n    \t.config {\n    \t\tdisplay:inline-block;\n    \t}\n    "]
                    }), 
                    __metadata('design:paramtypes', [message_service_1.MessageService])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_3("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, message_component_1, message_service_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_service_2_1) {
                message_service_2 = message_service_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent(_messageService) {
                    this._messageService = _messageService;
                }
                //Angular2 special method called once class has been initialized
                MessageListComponent.prototype.ngOnInit = function () {
                    this.messages = this._messageService.getMessages();
                };
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        template: "\n\t\t<section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<my-message  *ngFor=\"#message of messages\" [message]=\"message\" (editClickd)=\"message.content=$event\"></my-message>\n\t    </section>\n\t",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [message_service_2.MessageService])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_4("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ['angular2/core', "messages/message", "messages/message.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, message_3, message_service_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            },
            function (message_service_3_1) {
                message_service_3 = message_service_3_1;
            }],
        execute: function() {
            //component decorator
            MessageInputComponent = (function () {
                // We pass the messages to the message.service
                // Angular will check the constructor if there's a dependency injection
                // We define a private property and bind the MessageServie to it
                function MessageInputComponent(_messageService) {
                    this._messageService = _messageService;
                }
                MessageInputComponent.prototype.onCreate = function (content) {
                    var message = new message_3.Message(content, null, "Vlad");
                    this._messageService.addMessage(message);
                    console.log(message);
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"content\">Content</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"content\" #input>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\"> Send Message</button>\n\t</section>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [message_service_3.MessageService])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_5("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, message_list_component_1, message_input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (message_list_component_1_1) {
                message_list_component_1 = message_list_component_1_1;
            },
            function (message_input_component_1_1) {
                message_input_component_1 = message_input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_4.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row spacing\">\n    \t<!--<section class=\"col-md-8 col-md-offset-2\">\n    \t\t ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen\n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/>\n    \t</section>-->\n\n      <my-message-input></my-message-input>\n    </div>\n    <div class=\"row\">\n      <my-message-list></my-message-list>\n    </div>\n    ",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_6("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", "messages/message.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var browser_1, app_component_1, message_service_4;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (message_service_4_1) {
                message_service_4 = message_service_4_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_4.MessageService]);
        }
    }
});
System.register("auth/user", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var User;
    return {
        setters:[],
        execute: function() {
            //well as get them , 
            // will look like email: string;
            User = (function () {
                //using public creates also the property in the user Class as 
                //well as get them , 
                // will look like email: string;
                function User(email, password, firstName, lastName) {
                    this.email = email;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                return User;
            }());
            exports_8("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7O1lDWkQseUVBQXlFO1lBQ3pFO2dCQUFBO29CQUNFLGFBQVEsR0FBYyxFQUFFLENBQUM7Z0JBa0IzQixDQUFDO2dCQWhCQyxtQ0FBVSxHQUFWLFVBQVcsT0FBZTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QixDQUFDOztnQkFFRCxvQ0FBVyxHQUFYO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN2QixDQUFDOztnQkFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBZ0I7b0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMs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YXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcblx0Y29udGVudDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHRtZXNzYWdlSWQ6IHN0cmluZztcblx0dXNlcklkOiBzdHJpbmc7XG5cblx0Ly8gY29uc3RydWN0b3IgdG8gbWFrZSB0aGUgY3JlYXRpb24gb2YgdGhpcyBjbGFzcyBlYXNpZXJcblx0Ly8/IG1lYW5zIG9wdGlvbmFsIGF0cnJpYnV0ZXNcblx0Y29uc3RydWN0b3IgKGNvbnRlbnQ6IHN0cmluZywgbWVzc2FnZUlkID86IHN0cmluZywgdXNlcm5hbWUgPzogc3RyaW5nLCB1c2VySWQgPzogc3RyaW5nKXtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xuXHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0fVxufSIsImltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiXG5cbi8vU2VydmljZSBkb2Vzbid0IG5lZWQgYSBtZXRhZGF0YShjb21wb25lbnRzIGRvKSBpdCdzIGp1c3QgYSBub3JtYWwgY2xhc3NcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcblxuICBhZGRNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpO1xuICB9O1xuXG4gIGdldE1lc3NhZ2VzKCl7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gIH07XG5cbiAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG4gICAgdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoXCJFZGl0ZWRcIiwgbnVsbCwgXCJWbGFkaVwiKTtcbiAgfVxuXG4gIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKXtcbiAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xuICB9XG59XG4iLCIvL1N0YXJ0IHRoZSBmaWxlbmFtZSB3aXRoIHRoZSBuYW1lIG9mIHRoZSBkaXJlY3RvcnkgYW5kIHRoZW4gd2hhdFxuLy9pdCBpcyBjb21wb25lbnRcblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiOyAvL3NhbWUgZm9sZGVyXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCAoe1xuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UnLCAvL3Nob3VsZCBiZSB1bmlxdWVcblx0dGVtcGxhdGU6IGBcblx0XHQ8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOmNvbG9yfVwiIChtb3VzZW50ZXIpPVwiY29sb3I9J3doaXRlJ1wiPlxuICAgICAgICA8IS0tIG5nU3R5bGUgaXMgYSBwcm9wZXJ0eSBiaW5kaW5nLCB0YWtlcyBhIGphdmFzY3JpcHQgb2JqZWN0IHdpdGgga2V5cyB2YWx1ZXMgLS0+XG4gICAgXHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgXHRcdFx0e3sgbWVzc2FnZS5jb250ZW50IH19XG4gICAgXHRcdDwvZGl2PlxuICAgIFx0XHQgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgXHRcdCBcdFx0e3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgIFx0XHQgXHQ8L2Rpdj5cbiAgICBcdFx0IFx0PGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgIFx0XHQgXHRcdDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+RWRpdDwvYT48IS0tIGRlZmF1bHQgY2xpY2sgZXZlbnQgLS0+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZTwvYT5cbiAgICBcdFx0IFx0PC9kaXY+XG4gICAgXHRcdDwvZm9vdGVyPlxuICAgIFx0PC9hcnRpY2xlPlxuXHRgLFxuXHQgc3R5bGVzOiBbYFxuICAgIFx0Ly90aGlzIHF1b3RlIGlmIHdyb25nIHdpbGwgY2F1c2UgaXNzdWVzXG4gICAgXHQuYXV0aG9yIHtcbiAgICBcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBcdFx0Zm9udC1zaXplOiAxMnB4O1xuICAgIFx0XHR3aWR0aDogODAlXG4gICAgXHR9XG4gICAgXHQuY29uZmlnIHtcbiAgICBcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgXHR9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG5cdFx0Y29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cblxuXHQvL21lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgndGhlIENvbnRlbnQnLCBudWxsLCAnTWF4Jyk7XG4gICAgQElucHV0KCkgbWVzc2FnZTpNZXNzYWdlOyAvLyBAaW5wdXQoKSBzZXRzIHVwIGEgY3VzdG9tIHByb3BlcnR5XG5cbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTsgLy8gQE91dHVwdXQgc2V0cyB1cCBhIGN1c3RvbSBldmVudFxuICAgIGNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICBzaG93ID0gdHJ1ZTsgLy8gaWYgY2hhbmdlZCB0byBmYWxzZSwgbm90aGluZyB3aWxsIGdldCByYW5kZXJlZCAsIGJlY2FzdWUgb2YgKm5naWYgd2lsbCBiZSBmYWxzZSBhbmQgaXQgd2lsbCByZW1vdmUgdGhlIGFydGljbGUgZnJvbSB0aGUgRE9NXG4gICAgb25DbGljayAoKSB7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIkNoYW5nZWQgVGhlIG1lc3NhZ2VcIiBzdGF0aWMgY2hhbmdlXG5cbiAgICAgICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KCdDaGFuZ2VkIHRoZSBtZXNzYWdlJyk7XG4gICAgICAgIC8vRW1pdCgpIHVzZWQgdG8gZW1pdCBhbiBldmVudCBhbmQgZXZlcnl0aGluZyBsaXN0ZW5pbmcgdG8gaXQgd2lsbCBiZSBhYmxlIHRvIGFjdCB1cG9uIGl0XG4gICAgfVxuXHRcdG9uRWRpdCAoKSB7XG5cdFx0XHR0aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xuXHRcdH1cblx0XHRvbkRlbGV0ZSgpIHtcblx0XHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcblx0XHR9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiXG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uICBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHQgICAgXHQ8bXktbWVzc2FnZSAgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2QpPVwibWVzc2FnZS5jb250ZW50PSRldmVudFwiPjwvbXktbWVzc2FnZT5cblx0ICAgIDwvc2VjdGlvbj5cblx0YCxcblx0ZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxuXHRtZXNzYWdlczogTWVzc2FnZSBbXVxuXHQvL0FuZ3VsYXIyIHNwZWNpYWwgbWV0aG9kIGNhbGxlZCBvbmNlIGNsYXNzIGhhcyBiZWVuIGluaXRpYWxpemVkXG5cdG5nT25Jbml0KCl7XG5cdFx0dGhpcy5tZXNzYWdlcyA9IHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCJcblxuLy9jb21wb25lbnQgZGVjb3JhdG9yXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0Jyxcblx0dGVtcGxhdGU6IGBcblx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cImNvbnRlbnRcIj5Db250ZW50PC9sYWJlbD5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb250ZW50XCIgI2lucHV0PlxuXHRcdDwvZGl2PlxuXHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ3JlYXRlKGlucHV0LnZhbHVlKVwiPiBTZW5kIE1lc3NhZ2U8L2J1dHRvbj5cblx0PC9zZWN0aW9uPlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuXHQvLyBXZSBwYXNzIHRoZSBtZXNzYWdlcyB0byB0aGUgbWVzc2FnZS5zZXJ2aWNlXG5cdC8vIEFuZ3VsYXIgd2lsbCBjaGVjayB0aGUgY29uc3RydWN0b3IgaWYgdGhlcmUncyBhIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG5cdC8vIFdlIGRlZmluZSBhIHByaXZhdGUgcHJvcGVydHkgYW5kIGJpbmQgdGhlIE1lc3NhZ2VTZXJ2aWUgdG8gaXRcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG5cdG9uQ3JlYXRlKGNvbnRlbnQ6c3RyaW5nKSB7XG5cdFx0Y29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGNvbnRlbnQsIG51bGwsIFwiVmxhZFwiKTtcblx0XHR0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHR9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VMaXN0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICBcdDwhLS08c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgIFx0XHQgbmdNb2RlbCAgLSBrZXl3b3JkIG9yIGRpcmVjdGl2ZSB0aGF0IGFsbG93cyBkYXRhIGJpbmRpbmcgLCBpdCBhbGxvd3MgdHdvIHR5cGVzIG9mIGJpbmRpbmc6IHByb3BlcnR5IGJpbmRpbmcgYW5kIGV2ZW4gYmluZGluZywgdXNlcyBib3RoIHRvIGxpc3RlblxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UuY29udGVudFwiLz5cbiAgICBcdDwvc2VjdGlvbj4tLT5cblxuICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxteS1tZXNzYWdlLWxpc3Q+PC9teS1tZXNzYWdlLWxpc3Q+XG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cbn0pXG4vLyBvdXQgY29tcG9uZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBtZXNzYWdlXG4vLyBUaGUgbWVzc2FnZSBwcm9wZXJ0eSBpcyBlY2hvZWQgaW4gdGhlIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2VdKTtcbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblx0Ly91c2luZyBwdWJsaWMgY3JlYXRlcyBhbHNvIHRoZSBwcm9wZXJ0eSBpbiB0aGUgdXNlciBDbGFzcyBhcyBcblx0Ly93ZWxsIGFzIGdldCB0aGVtICwgXG5cdC8vIHdpbGwgbG9vayBsaWtlIGVtYWlsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IgKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZywgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nKXtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
