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
//Start the filename with the name of the directory and then what 
//it is component
System.register("messages/message.component", ["angular2/core", "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter(); // @Outuput sets up a custom event
                    this.color = "orange";
                    this.show = true; // if changed to false, nothing will get randered , becasue of *ngif will be false and it will remove the article from the DOM
                }
                MessageComponent.prototype.onClick = function () {
                    //this.message.content = "Changed The message" static change
                    this.editClicked.emit('Changed the message');
                    //Emit() used to emit an event and everything listening to it will be able to act upon it
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    // @input() sets up a custom property
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    //same folder
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n\t\t<article class=\"panel panel-default\" [ngStyle]=\"{'background-color':color}\" (mousenter)=\"color='white'\">\n        <!-- ngStyle is a property binding, takes a javascript object with keys values -->\n    \t\t<div class=\"panel-body\">\n    \t\t\t{{ message.content }}\n    \t\t</div>\n    \t\t <footer class=\"panel-footer\">\n    \t\t \t<div class=\"author\">\n    \t\t \t\t{{ message.username }}\n    \t\t \t</div>\n    \t\t \t<div class=\"config\">\n    \t\t \t\t<a href=\"#\" (click)=\"onClick()\">Edit</a><!-- default click event -->\n    \t\t \t\t<a href=\"#\">Delete</a>\n    \t\t \t</div>\n    \t\t</footer>\n    \t</article> \n\t",
                        styles: ["\n    \t//this quote if wrong will cause issues\n    \t.author {\n    \t\tdisplay:inline-block;\n    \t\tfont-style: italic;\n    \t\tfont-size: 12px;\n    \t\twidth: 80%\n    \t}\n    \t.config {\n    \t\tdisplay:inline-block;\n    \t}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("messages/message.service", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var MessageService;
    return {
        setters:[],
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
                MessageService.prototype.deleteMessage = function (message) {
                    this.messages.splice(this.messages.indexOf(message), 1);
                };
                return MessageService;
            }());
            exports_3("MessageService", MessageService);
        }
    }
});
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, message_component_1, message_service_1;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
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
                    __metadata('design:paramtypes', [message_service_1.MessageService])
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
    var core_3, message_2, message_service_2;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            },
            function (message_service_2_1) {
                message_service_2 = message_service_2_1;
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
                    var message = new message_2.Message(content, null, "Vlad");
                    this._messageService.addMessage(message);
                    console.log(message);
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"content\">Content</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"content\" #input>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\"> Send Message</button>\n\t</section>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [message_service_2.MessageService])
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
                        template: "\n    <div class=\"row spacing\">\n    \t<!--<section class=\"col-md-8 col-md-offset-2\">\n    \t\t ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen\n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/>\n    \t</section>-->\n\n        <my-message-input></my-message-input>\n    </div>\n    <div class=\"row\">\n\t   <my-message-list></my-message-list>\n    </div>\n    ",
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
    var browser_1, app_component_1, message_service_3;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (message_service_3_1) {
                message_service_3 = message_service_3_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [message_service_3.MessageService]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7OztBQ2RELGtFQUFrRTtBQUNsRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztZQXFDakI7Z0JBQUE7b0JBSWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQyxDQUFDLGtDQUFrQztvQkFDdEYsVUFBSyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsU0FBSSxHQUFHLElBQUksQ0FBQyxDQUFDLDhIQUE4SDtnQkFPL0ksQ0FBQztnQkFORyxrQ0FBTyxHQUFQO29CQUNJLDREQUE0RDtvQkFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDN0MseUZBQXlGO2dCQUM3RixDQUFDO2dCQVZEO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBRVI7b0JBRjBCLHFDQUFxQztv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QUUsQ0FBQyxnQ0FBYyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNGekMsZ0NBQWdDO1lBSGpDO2dCQUNDLDhEQUE4RDtnQkFDOUQscUJBQXFCO2dCQUNyQixnQ0FBZ0M7Z0JBRWhDLGNBQW9CLEtBQWEsRUFBUyxRQUFnQixFQUFTLFNBQWtCLEVBQVMsUUFBaUI7b0JBQTNGLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQzlHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixDQUFDO2dCQUNGLFdBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVCQVdDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vQW5ndWxhci1hcHAvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuXHRjb250ZW50OiBzdHJpbmc7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdG1lc3NhZ2VJZDogc3RyaW5nO1xuXHR1c2VySWQ6IHN0cmluZztcblxuXHQvLyBjb25zdHJ1Y3RvciB0byBtYWtlIHRoZSBjcmVhdGlvbiBvZiB0aGlzIGNsYXNzIGVhc2llclxuXHQvLz8gbWVhbnMgb3B0aW9uYWwgYXRycmlidXRlc1xuXHRjb25zdHJ1Y3RvciAoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQgPzogc3RyaW5nLCB1c2VybmFtZSA/OiBzdHJpbmcsIHVzZXJJZCA/OiBzdHJpbmcpe1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG5cdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHR9XG59IiwiLy9TdGFydCB0aGUgZmlsZW5hbWUgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZGlyZWN0b3J5IGFuZCB0aGVuIHdoYXQgXG4vL2l0IGlzIGNvbXBvbmVudFxuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCIgLy9zYW1lIGZvbGRlclxuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZScsIC8vc2hvdWxkIGJlIHVuaXF1ZVxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6Y29sb3J9XCIgKG1vdXNlbnRlcik9XCJjb2xvcj0nd2hpdGUnXCI+XG4gICAgICAgIDwhLS0gbmdTdHlsZSBpcyBhIHByb3BlcnR5IGJpbmRpbmcsIHRha2VzIGEgamF2YXNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIHZhbHVlcyAtLT5cbiAgICBcdFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICBcdFx0XHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdCA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICBcdFx0IFx0XHR7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT48IS0tIGRlZmF1bHQgY2xpY2sgZXZlbnQgLS0+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQ8L2Zvb3Rlcj5cbiAgICBcdDwvYXJ0aWNsZT4gXG5cdGAsXG5cdCBzdHlsZXM6IFtgXG4gICAgXHQvL3RoaXMgcXVvdGUgaWYgd3Jvbmcgd2lsbCBjYXVzZSBpc3N1ZXNcbiAgICBcdC5hdXRob3Ige1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgXHRcdHdpZHRoOiA4MCVcbiAgICBcdH1cbiAgICBcdC5jb25maWcge1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblx0Ly9tZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ3RoZSBDb250ZW50JywgbnVsbCwgJ01heCcpO1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTsgLy8gQGlucHV0KCkgc2V0cyB1cCBhIGN1c3RvbSBwcm9wZXJ0eVxuXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7IC8vIEBPdXR1cHV0IHNldHMgdXAgYSBjdXN0b20gZXZlbnRcbiAgICBjb2xvciA9IFwib3JhbmdlXCI7XG4gICAgc2hvdyA9IHRydWU7IC8vIGlmIGNoYW5nZWQgdG8gZmFsc2UsIG5vdGhpbmcgd2lsbCBnZXQgcmFuZGVyZWQgLCBiZWNhc3VlIG9mICpuZ2lmIHdpbGwgYmUgZmFsc2UgYW5kIGl0IHdpbGwgcmVtb3ZlIHRoZSBhcnRpY2xlIGZyb20gdGhlIERPTVxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDaGFuZ2VkIFRoZSBtZXNzYWdlXCIgc3RhdGljIGNoYW5nZVxuXG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCB0aGUgbWVzc2FnZScpO1xuICAgICAgICAvL0VtaXQoKSB1c2VkIHRvIGVtaXQgYW4gZXZlbnQgYW5kIGV2ZXJ5dGhpbmcgbGlzdGVuaW5nIHRvIGl0IHdpbGwgYmUgYWJsZSB0byBhY3QgdXBvbiBpdFxuICAgIH1cbn0iLCJpbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIlxuXG4vL1NlcnZpY2UgZG9lc24ndCBuZWVkIGEgbWV0YWRhdGEoY29tcG9uZW50cyBkbykgaXQncyBqdXN0IGEgbm9ybWFsIGNsYXNzXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XG5cbiAgYWRkTWVzc2FnZShtZXNzYWdlOk1lc3NhZ2Upe1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKTtcbiAgfTtcblxuICBnZXRNZXNzYWdlcygpe1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICB9O1xuXG4gIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKXtcbiAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpXG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCJcblxuQENvbXBvbmVudCAoe1xuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cdCAgICBcdDxteS1tZXNzYWdlICAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZCk9XCJtZXNzYWdlLmNvbnRlbnQ9JGV2ZW50XCI+PC9teS1tZXNzYWdlPlxuXHQgICAgPC9zZWN0aW9uPlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG5cdG1lc3NhZ2VzOiBNZXNzYWdlIFtdXG5cdC8vQW5ndWxhcjIgc3BlY2lhbCBtZXRob2QgY2FsbGVkIG9uY2UgY2xhc3MgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcblx0bmdPbkluaXQoKXtcblx0XHR0aGlzLm1lc3NhZ2VzID0gdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcblx0fVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIlxuXG4vL2NvbXBvbmVudCBkZWNvcmF0b3JcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHQ8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRlbnRcIiAjaW5wdXQ+XG5cdFx0PC9kaXY+XG5cdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DcmVhdGUoaW5wdXQudmFsdWUpXCI+IFNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuXHQ8L3NlY3Rpb24+XG5cdGAsXG5cdGRpcmVjdGl2ZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnB1dENvbXBvbmVudCB7XG5cdC8vIFdlIHBhc3MgdGhlIG1lc3NhZ2VzIHRvIHRoZSBtZXNzYWdlLnNlcnZpY2Vcblx0Ly8gQW5ndWxhciB3aWxsIGNoZWNrIHRoZSBjb25zdHJ1Y3RvciBpZiB0aGVyZSdzIGEgZGVwZW5kZW5jeSBpbmplY3Rpb25cblx0Ly8gV2UgZGVmaW5lIGEgcHJpdmF0ZSBwcm9wZXJ0eSBhbmQgYmluZCB0aGUgTWVzc2FnZVNlcnZpZSB0byBpdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2Upe31cblx0b25DcmVhdGUoY29udGVudDpzdHJpbmcpIHtcblx0XHRjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCwgXCJWbGFkXCIpO1xuXHRcdHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0Y29uc29sZS5sb2cobWVzc2FnZSk7XG5cdH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUxpc3RDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2VJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgIFx0PCEtLTxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgXHRcdCBuZ01vZGVsICAtIGtleXdvcmQgb3IgZGlyZWN0aXZlIHRoYXQgYWxsb3dzIGRhdGEgYmluZGluZyAsIGl0IGFsbG93cyB0d28gdHlwZXMgb2YgYmluZGluZzogcHJvcGVydHkgYmluZGluZyBhbmQgZXZlbiBiaW5kaW5nLCB1c2VzIGJvdGggdG8gbGlzdGVuXG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWVzc2FnZS5jb250ZW50XCIvPlxuICAgIFx0PC9zZWN0aW9uPi0tPlxuXG4gICAgICAgIDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdCAgIDxteS1tZXNzYWdlLWxpc3Q+PC9teS1tZXNzYWdlLWxpc3Q+XG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cbn0pXG4vLyBvdXQgY29tcG9uZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBtZXNzYWdlXG4vLyBUaGUgbWVzc2FnZSBwcm9wZXJ0eSBpcyBlY2hvZWQgaW4gdGhlIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbTWVzc2FnZVNlcnZpY2VdKTtcbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblx0Ly91c2luZyBwdWJsaWMgY3JlYXRlcyBhbHNvIHRoZSBwcm9wZXJ0eSBpbiB0aGUgdXNlciBDbGFzcyBhcyBcblx0Ly93ZWxsIGFzIGdldCB0aGVtICwgXG5cdC8vIHdpbGwgbG9vayBsaWtlIGVtYWlsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IgKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZywgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nKXtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
