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
                    this.color = "red";
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
                        template: "\n\t\t<article class=\"panel panel-default\" [ngStyle]=\"{'background-color':color}\">\n        <!-- ngStyle is a property binding, takes a javascript object with keys values -->\n    \t\t<div class=\"panel-body\">\n    \t\t\t{{ message.content }}\n    \t\t</div>\n    \t\t <footer class=\"panel-footer\">\n    \t\t \t<div class=\"author\">\n    \t\t \t\t{{ message.username }}\n    \t\t \t</div>\n    \t\t \t<div class=\"config\">\n    \t\t \t\t<a href=\"#\" (click)=\"onClick()\">Edit</a><!-- default click event -->\n    \t\t \t\t<a href=\"#\">Delete</a>\n    \t\t \t</div>\n    \t\t</footer>\n    \t</article> \n\t",
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
System.register("app.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var AppComponent;
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
            AppComponent = (function () {
                function AppComponent() {
                    this.message = new message_2.Message("A new Message", null, 'Max');
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n    \t<section class=\"col-md-8 col-md-offset-2\">\n    \t\t<!-- ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen \n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/> -->\n    \t\t\n    \t</section>\n    </div>\n    <div class=\"row\">\n\t    <section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<my-message [message]=\"message\" (editClickd)=\"message.content=$event\"></my-message>  \n\t    \t<!-- tag that the message component will use -->\n\t    </section> \n    </div>\t\n    ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
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
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
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
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7OztBQ2RELGtFQUFrRTtBQUNsRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztZQXFDakI7Z0JBQUE7b0JBSWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQyxDQUFDLGtDQUFrQztvQkFDdEYsVUFBSyxHQUFHLEtBQUssQ0FBQztvQkFDZCxTQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsOEhBQThIO2dCQU8vSSxDQUFDO2dCQU5HLGtDQUFPLEdBQVA7b0JBQ0ksNERBQTREO29CQUU1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUM3Qyx5RkFBeUY7Z0JBQzdGLENBQUM7Z0JBVkQ7b0JBQUMsWUFBSyxFQUFFOztpRUFBQTtnQkFFUjtvQkFGMEIscUNBQXFDO29CQUU5RCxhQUFNLEVBQUU7O3FFQUFBO2dCQXBDYjtvQkFGa0MsYUFBYTtvQkFFOUMsZ0JBQVMsQ0FBRTt3QkFDWCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDRtQkFnQlQ7d0JBQ0EsTUFBTSxFQUFFLENBQUMsb1BBV04sQ0FBQztxQkFDTCxDQUFDOztvQ0FBQTtnQkFjRix1QkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsK0NBYUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDMUJEO2dCQUFBO29CQUNDLFlBQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDhtQkFjVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDakMsQ0FBQzs7Z0NBQUE7Z0JBS0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDdkJELG1CQUFTLENBQUMsNEJBQVksQ0FBQyxDQUFDOzs7Ozs7Ozs7OztZQ0R2QixnQ0FBZ0M7WUFIakM7Z0JBQ0MsOERBQThEO2dCQUM5RCxxQkFBcUI7Z0JBQ3JCLGdDQUFnQztnQkFFaEMsY0FBb0IsS0FBYSxFQUFTLFFBQWdCLEVBQVMsU0FBa0IsRUFBUyxRQUFpQjtvQkFBM0YsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUztvQkFDOUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0YsV0FBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUJBV0MsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9Bbmd1bGFyLWFwcC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XG5cdGNvbnRlbnQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcblx0bWVzc2FnZUlkOiBzdHJpbmc7XG5cdHVzZXJJZDogc3RyaW5nO1xuXG5cdC8vIGNvbnN0cnVjdG9yIHRvIG1ha2UgdGhlIGNyZWF0aW9uIG9mIHRoaXMgY2xhc3MgZWFzaWVyXG5cdC8vPyBtZWFucyBvcHRpb25hbCBhdHJyaWJ1dGVzXG5cdGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZCA/OiBzdHJpbmcsIHVzZXJuYW1lID86IHN0cmluZywgdXNlcklkID86IHN0cmluZyl7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHR0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcblx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG5cdFx0dGhpcy51c2VySWQgPSB1c2VySWQ7XG5cdH1cbn0iLCIvL1N0YXJ0IHRoZSBmaWxlbmFtZSB3aXRoIHRoZSBuYW1lIG9mIHRoZSBkaXJlY3RvcnkgYW5kIHRoZW4gd2hhdCBcbi8vaXQgaXMgY29tcG9uZW50XG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIiAvL3NhbWUgZm9sZGVyXG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlJywgLy9zaG91bGQgYmUgdW5pcXVlXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzpjb2xvcn1cIj5cbiAgICAgICAgPCEtLSBuZ1N0eWxlIGlzIGEgcHJvcGVydHkgYmluZGluZywgdGFrZXMgYSBqYXZhc2NyaXB0IG9iamVjdCB3aXRoIGtleXMgdmFsdWVzIC0tPlxuICAgIFx0XHQ8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgIFx0XHRcdHt7IG1lc3NhZ2UuY29udGVudCB9fVxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0IDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICBcdFx0IFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgIFx0XHQgXHRcdHt7IG1lc3NhZ2UudXNlcm5hbWUgfX1cbiAgICBcdFx0IFx0PC9kaXY+XG4gICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICBcdFx0IFx0XHQ8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkNsaWNrKClcIj5FZGl0PC9hPjwhLS0gZGVmYXVsdCBjbGljayBldmVudCAtLT5cbiAgICBcdFx0IFx0XHQ8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICBcdFx0IFx0PC9kaXY+XG4gICAgXHRcdDwvZm9vdGVyPlxuICAgIFx0PC9hcnRpY2xlPiBcblx0YCxcblx0IHN0eWxlczogW2BcbiAgICBcdC8vdGhpcyBxdW90ZSBpZiB3cm9uZyB3aWxsIGNhdXNlIGlzc3Vlc1xuICAgIFx0LmF1dGhvciB7XG4gICAgXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICBcdFx0d2lkdGg6IDgwJVxuICAgIFx0fVxuICAgIFx0LmNvbmZpZyB7XG4gICAgXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIFx0fVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuXHQvL21lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgndGhlIENvbnRlbnQnLCBudWxsLCAnTWF4Jyk7XG4gICAgQElucHV0KCkgbWVzc2FnZTpNZXNzYWdlOyAvLyBAaW5wdXQoKSBzZXRzIHVwIGEgY3VzdG9tIHByb3BlcnR5XG5cbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTsgLy8gQE91dHVwdXQgc2V0cyB1cCBhIGN1c3RvbSBldmVudFxuICAgIGNvbG9yID0gXCJyZWRcIjtcbiAgICBzaG93ID0gdHJ1ZTsgLy8gaWYgY2hhbmdlZCB0byBmYWxzZSwgbm90aGluZyB3aWxsIGdldCByYW5kZXJlZCAsIGJlY2FzdWUgb2YgKm5naWYgd2lsbCBiZSBmYWxzZSBhbmQgaXQgd2lsbCByZW1vdmUgdGhlIGFydGljbGUgZnJvbSB0aGUgRE9NXG4gICAgb25DbGljayAoKSB7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIkNoYW5nZWQgVGhlIG1lc3NhZ2VcIiBzdGF0aWMgY2hhbmdlXG5cbiAgICAgICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KCdDaGFuZ2VkIHRoZSBtZXNzYWdlJyk7XG4gICAgICAgIC8vRW1pdCgpIHVzZWQgdG8gZW1pdCBhbiBldmVudCBhbmQgZXZlcnl0aGluZyBsaXN0ZW5pbmcgdG8gaXQgd2lsbCBiZSBhYmxlIHRvIGFjdCB1cG9uIGl0XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgIFx0XHQ8IS0tIG5nTW9kZWwgIC0ga2V5d29yZCBvciBkaXJlY3RpdmUgdGhhdCBhbGxvd3MgZGF0YSBiaW5kaW5nICwgaXQgYWxsb3dzIHR3byB0eXBlcyBvZiBiaW5kaW5nOiBwcm9wZXJ0eSBiaW5kaW5nIGFuZCBldmVuIGJpbmRpbmcsIHVzZXMgYm90aCB0byBsaXN0ZW4gXG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibWVzc2FnZS5jb250ZW50XCIvPiAtLT5cbiAgICBcdFx0XG4gICAgXHQ8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXHQgICAgPHNlY3Rpb24gIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cdCAgICBcdDxteS1tZXNzYWdlIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZCk9XCJtZXNzYWdlLmNvbnRlbnQ9JGV2ZW50XCI+PC9teS1tZXNzYWdlPiAgXG5cdCAgICBcdDwhLS0gdGFnIHRoYXQgdGhlIG1lc3NhZ2UgY29tcG9uZW50IHdpbGwgdXNlIC0tPlxuXHQgICAgPC9zZWN0aW9uPiBcbiAgICA8L2Rpdj5cdFxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuLy8gb3V0IGNvbXBvbmVudCBoYXMgYSBwcm9wZXJ0eSBjYWxsZWQgbWVzc2FnZVxuLy8gVGhlIG1lc3NhZ2UgcHJvcGVydHkgaXMgZWNob2VkIGluIHRoZSB0ZW1wbGF0ZVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShcIkEgbmV3IE1lc3NhZ2VcIiwgbnVsbCwgJ01heCcpO1xufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblx0Ly91c2luZyBwdWJsaWMgY3JlYXRlcyBhbHNvIHRoZSBwcm9wZXJ0eSBpbiB0aGUgdXNlciBDbGFzcyBhcyBcblx0Ly93ZWxsIGFzIGdldCB0aGVtICwgXG5cdC8vIHdpbGwgbG9vayBsaWtlIGVtYWlsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IgKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZywgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nKXtcblx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXHRcdHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuXHRcdHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
