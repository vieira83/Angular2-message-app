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
System.register("messages/message-list.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var MessageListComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            MessageListComponent = (function () {
                function MessageListComponent() {
                    this.messages = [
                        new message_2.Message("A new Message", null, 'Max'),
                        new message_2.Message("A second Message", null, 'Vlad')
                    ];
                }
                MessageListComponent = __decorate([
                    core_2.Component({
                        selector: 'my-message-list',
                        template: "\n\t\t<section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<my-message  *ngFor=\"#message of messages\" [message]=\"message\" (editClickd)=\"message.content=$event\"></my-message>  \n\t    </section>\n\t",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageListComponent);
                return MessageListComponent;
            }());
            exports_3("MessageListComponent", MessageListComponent);
        }
    }
});
System.register("messages/message-input.component", ['angular2/core', "messages/message"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, message_3;
    var MessageInputComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (message_3_1) {
                message_3 = message_3_1;
            }],
        execute: function() {
            //component decorator
            MessageInputComponent = (function () {
                function MessageInputComponent() {
                }
                MessageInputComponent.prototype.onCreate = function (content) {
                    var message = new message_3.Message(content, null, "Vlad");
                    console.log(message);
                };
                MessageInputComponent = __decorate([
                    core_3.Component({
                        selector: 'my-message-input',
                        template: "\n\t<section class=\"col-md-8 col-md-offset-2\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"content\">Content</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"content\" #input>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\"> Send Message</button>\n\t</section>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageInputComponent);
                return MessageInputComponent;
            }());
            exports_4("MessageInputComponent", MessageInputComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message-list.component", "messages/message-input.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
                        template: "\n    <div class=\"row spacing\">\n    \t<!--<section class=\"col-md-8 col-md-offset-2\">\n    \t\t ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen \n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/>\n    \t</section>-->\n\n        <my-message-input></my-message-input>\n    </div>\n    <div class=\"row\">\n\t   <my-message-list></my-message-list>\n    </div>\t\n    ",
                        directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_5("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
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
            exports_7("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiLCJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7OztBQ2RELGtFQUFrRTtBQUNsRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztZQXFDakI7Z0JBQUE7b0JBSWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQyxDQUFDLGtDQUFrQztvQkFDdEYsVUFBSyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsU0FBSSxHQUFHLElBQUksQ0FBQyxDQUFDLDhIQUE4SDtnQkFPL0ksQ0FBQztnQkFORyxrQ0FBTyxHQUFQO29CQUNJLDREQUE0RDtvQkFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDN0MseUZBQXlGO2dCQUM3RixDQUFDO2dCQVZEO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBRVI7b0JBRjBCLHFDQUFxQztvQkFFOUQsYUFBTSxFQUFFOztxRUFBQTtnQkFwQ2I7b0JBRmtDLGFBQWE7b0JBRTlDLGdCQUFTLENBQUU7d0JBQ1gsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwwb0JBZ0JUO3dCQUNBLE1BQU0sRUFBRSxDQUFDLG9QQVdOLENBQUM7cUJBQ0wsQ0FBQzs7b0NBQUE7Z0JBY0YsdUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELCtDQWFDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3JDRDtnQkFBQTtvQkFDQyxhQUFRLEdBQWU7d0JBQ3RCLElBQUksaUJBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDekMsSUFBSSxpQkFBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7cUJBQzdDLENBQUE7Z0JBQ0YsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSwrTUFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDOUIsQ0FBQzs7d0NBQUE7Z0JBT0YsMkJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVEQUtDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2hCRCxxQkFBcUI7WUFjckI7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFKQSx3Q0FBUSxHQUFSLFVBQVMsT0FBYztvQkFDdEIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBakJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLHdWQVFUO3dCQUNELFVBQVUsRUFBRSxFQUFFO3FCQUNkLENBQUM7O3lDQUFBO2dCQU1GLDRCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx5REFLQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNDRDtnQkFBQTtnQkFFQSxDQUFDO2dCQXJCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsaWVBWVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsK0NBQXFCLENBQUM7cUJBQzVELENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ3JCRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNEdkIsZ0NBQWdDO1lBSGpDO2dCQUNDLDhEQUE4RDtnQkFDOUQscUJBQXFCO2dCQUNyQixnQ0FBZ0M7Z0JBRWhDLGNBQW9CLEtBQWEsRUFBUyxRQUFnQixFQUFTLFNBQWtCLEVBQVMsUUFBaUI7b0JBQTNGLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQzlHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixDQUFDO2dCQUNGLFdBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVCQVdDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vQW5ndWxhci1hcHAvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuXHRjb250ZW50OiBzdHJpbmc7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdG1lc3NhZ2VJZDogc3RyaW5nO1xuXHR1c2VySWQ6IHN0cmluZztcblxuXHQvLyBjb25zdHJ1Y3RvciB0byBtYWtlIHRoZSBjcmVhdGlvbiBvZiB0aGlzIGNsYXNzIGVhc2llclxuXHQvLz8gbWVhbnMgb3B0aW9uYWwgYXRycmlidXRlc1xuXHRjb25zdHJ1Y3RvciAoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQgPzogc3RyaW5nLCB1c2VybmFtZSA/OiBzdHJpbmcsIHVzZXJJZCA/OiBzdHJpbmcpe1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG5cdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHR9XG59IiwiLy9TdGFydCB0aGUgZmlsZW5hbWUgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZGlyZWN0b3J5IGFuZCB0aGVuIHdoYXQgXG4vL2l0IGlzIGNvbXBvbmVudFxuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCIgLy9zYW1lIGZvbGRlclxuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZScsIC8vc2hvdWxkIGJlIHVuaXF1ZVxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6Y29sb3J9XCIgKG1vdXNlbnRlcik9XCJjb2xvcj0nd2hpdGUnXCI+XG4gICAgICAgIDwhLS0gbmdTdHlsZSBpcyBhIHByb3BlcnR5IGJpbmRpbmcsIHRha2VzIGEgamF2YXNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIHZhbHVlcyAtLT5cbiAgICBcdFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICBcdFx0XHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdCA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICBcdFx0IFx0XHR7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT48IS0tIGRlZmF1bHQgY2xpY2sgZXZlbnQgLS0+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQ8L2Zvb3Rlcj5cbiAgICBcdDwvYXJ0aWNsZT4gXG5cdGAsXG5cdCBzdHlsZXM6IFtgXG4gICAgXHQvL3RoaXMgcXVvdGUgaWYgd3Jvbmcgd2lsbCBjYXVzZSBpc3N1ZXNcbiAgICBcdC5hdXRob3Ige1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgXHRcdHdpZHRoOiA4MCVcbiAgICBcdH1cbiAgICBcdC5jb25maWcge1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblx0Ly9tZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ3RoZSBDb250ZW50JywgbnVsbCwgJ01heCcpO1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTsgLy8gQGlucHV0KCkgc2V0cyB1cCBhIGN1c3RvbSBwcm9wZXJ0eVxuXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7IC8vIEBPdXR1cHV0IHNldHMgdXAgYSBjdXN0b20gZXZlbnRcbiAgICBjb2xvciA9IFwib3JhbmdlXCI7XG4gICAgc2hvdyA9IHRydWU7IC8vIGlmIGNoYW5nZWQgdG8gZmFsc2UsIG5vdGhpbmcgd2lsbCBnZXQgcmFuZGVyZWQgLCBiZWNhc3VlIG9mICpuZ2lmIHdpbGwgYmUgZmFsc2UgYW5kIGl0IHdpbGwgcmVtb3ZlIHRoZSBhcnRpY2xlIGZyb20gdGhlIERPTVxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDaGFuZ2VkIFRoZSBtZXNzYWdlXCIgc3RhdGljIGNoYW5nZVxuXG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCB0aGUgbWVzc2FnZScpO1xuICAgICAgICAvL0VtaXQoKSB1c2VkIHRvIGVtaXQgYW4gZXZlbnQgYW5kIGV2ZXJ5dGhpbmcgbGlzdGVuaW5nIHRvIGl0IHdpbGwgYmUgYWJsZSB0byBhY3QgdXBvbiBpdFxuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uICBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHQgICAgXHQ8bXktbWVzc2FnZSAgKm5nRm9yPVwiI21lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2QpPVwibWVzc2FnZS5jb250ZW50PSRldmVudFwiPjwvbXktbWVzc2FnZT4gIFxuXHQgICAgPC9zZWN0aW9uPlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCB7XG5cdG1lc3NhZ2VzOiBNZXNzYWdlIFtdID0gW1xuXHRcdG5ldyBNZXNzYWdlKFwiQSBuZXcgTWVzc2FnZVwiLCBudWxsLCAnTWF4JyksXG5cdFx0bmV3IE1lc3NhZ2UoXCJBIHNlY29uZCBNZXNzYWdlXCIsIG51bGwsICdWbGFkJylcblx0XVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbi8vY29tcG9uZW50IGRlY29yYXRvclxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXG5cdHRlbXBsYXRlOiBgXG5cdDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dD5cblx0XHQ8L2Rpdj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkNyZWF0ZShpbnB1dC52YWx1ZSlcIj4gU2VuZCBNZXNzYWdlPC9idXR0b24+XG5cdDwvc2VjdGlvbj5cblx0YCxcblx0ZGlyZWN0aXZlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IHtcblx0b25DcmVhdGUoY29udGVudDpzdHJpbmcpIHtcblx0XHRjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoY29udGVudCwgbnVsbCwgXCJWbGFkXCIpO1xuXHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHR9XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgXHQ8IS0tPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICBcdFx0IG5nTW9kZWwgIC0ga2V5d29yZCBvciBkaXJlY3RpdmUgdGhhdCBhbGxvd3MgZGF0YSBiaW5kaW5nICwgaXQgYWxsb3dzIHR3byB0eXBlcyBvZiBiaW5kaW5nOiBwcm9wZXJ0eSBiaW5kaW5nIGFuZCBldmVuIGJpbmRpbmcsIHVzZXMgYm90aCB0byBsaXN0ZW4gXG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWVzc2FnZS5jb250ZW50XCIvPlxuICAgIFx0PC9zZWN0aW9uPi0tPlxuXG4gICAgICAgIDxteS1tZXNzYWdlLWlucHV0PjwvbXktbWVzc2FnZS1pbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdCAgIDxteS1tZXNzYWdlLWxpc3Q+PC9teS1tZXNzYWdlLWxpc3Q+XG4gICAgPC9kaXY+XHRcbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlTGlzdENvbXBvbmVudCwgTWVzc2FnZUlucHV0Q29tcG9uZW50XVxufSlcbi8vIG91dCBjb21wb25lbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIG1lc3NhZ2Vcbi8vIFRoZSBtZXNzYWdlIHByb3BlcnR5IGlzIGVjaG9lZCBpbiB0aGUgdGVtcGxhdGVcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRcbn0iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsiLCJleHBvcnQgY2xhc3MgVXNlciB7XG5cdC8vdXNpbmcgcHVibGljIGNyZWF0ZXMgYWxzbyB0aGUgcHJvcGVydHkgaW4gdGhlIHVzZXIgQ2xhc3MgYXMgXG5cdC8vd2VsbCBhcyBnZXQgdGhlbSAsIFxuXHQvLyB3aWxsIGxvb2sgbGlrZSBlbWFpbDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yIChwdWJsaWMgZW1haWw6IHN0cmluZywgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcsIHB1YmxpYyBmaXJzdE5hbWU/OiBzdHJpbmcsIHB1YmxpYyBsYXN0TmFtZT86IHN0cmluZyl7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcblx0XHR0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcblx0XHR0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
