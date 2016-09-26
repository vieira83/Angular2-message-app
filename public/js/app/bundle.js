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
                        template: "\n\t\t<article class=\"panel panel-default\">\n    \t\t<div class=\"panel-body\">\n    \t\t\t{{ message.content }}\n    \t\t</div>\n    \t\t <footer class=\"panel-footer\">\n    \t\t \t<div class=\"author\">\n    \t\t \t\t{{ message.username }}\n    \t\t \t</div>\n    \t\t \t<div class=\"config\">\n    \t\t \t\t<a href=\"#\" (click)=\"onClick()\">Edit</a><!-- default click event -->\n    \t\t \t\t<a href=\"#\">Delete</a>\n    \t\t \t</div>\n    \t\t</footer>\n    \t</article> \n\t",
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
                        template: "\n    <div class=\"row\">\n    \t<section class=\"col-md-8 col-md-offset-2\">\n    \t\t<!-- ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen \n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/>\n    \t\t-->\n    \t\t\n    \t</section>\n    </div>\n    <div class=\"row\">\n\t    <section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<my-message [message]=\"message\" (editClickd)=\"message.content = $event\"></my-message>  <!-- tag that the message component will use -->\n\t    </section> \n    </div>\t\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7OztBQ2RELGtFQUFrRTtBQUNsRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztZQW9DakI7Z0JBQUE7b0JBSWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQyxDQUFDLGtDQUFrQztnQkFRMUYsQ0FBQztnQkFORyxrQ0FBTyxHQUFQO29CQUNJLDREQUE0RDtvQkFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDN0MseUZBQXlGO2dCQUM3RixDQUFDO2dCQVREO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBRVI7b0JBRjBCLHFDQUFxQztvQkFFOUQsYUFBTSxFQUFFOztxRUFBQTtnQkFuQ2I7b0JBRmtDLGFBQWE7b0JBRTlDLGdCQUFTLENBQUU7d0JBQ1gsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSx1ZUFlVDt3QkFDQSxNQUFNLEVBQUUsQ0FBQyxvUEFXTixDQUFDO3FCQUNMLENBQUM7O29DQUFBO2dCQWFGLHVCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCwrQ0FZQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN4QkQ7Z0JBQUE7b0JBQ0MsWUFBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQXZCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsK21CQWNUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN2QkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDRHZCLGdDQUFnQztZQUhqQztnQkFDQyw4REFBOEQ7Z0JBQzlELHFCQUFxQjtnQkFDckIsZ0NBQWdDO2dCQUVoQyxjQUFvQixLQUFhLEVBQVMsUUFBZ0IsRUFBUyxTQUFrQixFQUFTLFFBQWlCO29CQUEzRixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUztvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO29CQUM5RyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRixXQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1QkFXQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXItYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcblx0Y29udGVudDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHRtZXNzYWdlSWQ6IHN0cmluZztcblx0dXNlcklkOiBzdHJpbmc7XG5cblx0Ly8gY29uc3RydWN0b3IgdG8gbWFrZSB0aGUgY3JlYXRpb24gb2YgdGhpcyBjbGFzcyBlYXNpZXJcblx0Ly8/IG1lYW5zIG9wdGlvbmFsIGF0cnJpYnV0ZXNcblx0Y29uc3RydWN0b3IgKGNvbnRlbnQ6IHN0cmluZywgbWVzc2FnZUlkID86IHN0cmluZywgdXNlcm5hbWUgPzogc3RyaW5nLCB1c2VySWQgPzogc3RyaW5nKXtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xuXHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0fVxufSIsIi8vU3RhcnQgdGhlIGZpbGVuYW1lIHdpdGggdGhlIG5hbWUgb2YgdGhlIGRpcmVjdG9yeSBhbmQgdGhlbiB3aGF0IFxuLy9pdCBpcyBjb21wb25lbnRcblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiIC8vc2FtZSBmb2xkZXJcblxuQENvbXBvbmVudCAoe1xuXHRzZWxlY3RvcjogJ215LW1lc3NhZ2UnLCAvL3Nob3VsZCBiZSB1bmlxdWVcblx0dGVtcGxhdGU6IGBcblx0XHQ8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICBcdFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICBcdFx0XHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdCA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICBcdFx0IFx0XHR7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT48IS0tIGRlZmF1bHQgY2xpY2sgZXZlbnQgLS0+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQ8L2Zvb3Rlcj5cbiAgICBcdDwvYXJ0aWNsZT4gXG5cdGAsXG5cdCBzdHlsZXM6IFtgXG4gICAgXHQvL3RoaXMgcXVvdGUgaWYgd3Jvbmcgd2lsbCBjYXVzZSBpc3N1ZXNcbiAgICBcdC5hdXRob3Ige1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgXHRcdHdpZHRoOiA4MCVcbiAgICBcdH1cbiAgICBcdC5jb25maWcge1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblx0Ly9tZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ3RoZSBDb250ZW50JywgbnVsbCwgJ01heCcpO1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTsgLy8gQGlucHV0KCkgc2V0cyB1cCBhIGN1c3RvbSBwcm9wZXJ0eVxuXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7IC8vIEBPdXR1cHV0IHNldHMgdXAgYSBjdXN0b20gZXZlbnRcblxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDaGFuZ2VkIFRoZSBtZXNzYWdlXCIgc3RhdGljIGNoYW5nZVxuXG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCB0aGUgbWVzc2FnZScpO1xuICAgICAgICAvL0VtaXQoKSB1c2VkIHRvIGVtaXQgYW4gZXZlbnQgYW5kIGV2ZXJ5dGhpbmcgbGlzdGVuaW5nIHRvIGl0IHdpbGwgYmUgYWJsZSB0byBhY3QgdXBvbiBpdFxuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIFx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICBcdFx0PCEtLSBuZ01vZGVsICAtIGtleXdvcmQgb3IgZGlyZWN0aXZlIHRoYXQgYWxsb3dzIGRhdGEgYmluZGluZyAsIGl0IGFsbG93cyB0d28gdHlwZXMgb2YgYmluZGluZzogcHJvcGVydHkgYmluZGluZyBhbmQgZXZlbiBiaW5kaW5nLCB1c2VzIGJvdGggdG8gbGlzdGVuIFxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UuY29udGVudFwiLz5cbiAgICBcdFx0LS0+XG4gICAgXHRcdFxuICAgIFx0PC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0ICAgIDxzZWN0aW9uICBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHQgICAgXHQ8bXktbWVzc2FnZSBbbWVzc2FnZV09XCJtZXNzYWdlXCIgKGVkaXRDbGlja2QpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPiAgPCEtLSB0YWcgdGhhdCB0aGUgbWVzc2FnZSBjb21wb25lbnQgd2lsbCB1c2UgLS0+XG5cdCAgICA8L3NlY3Rpb24+IFxuICAgIDwvZGl2Plx0XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG4vLyBvdXQgY29tcG9uZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBtZXNzYWdlXG4vLyBUaGUgbWVzc2FnZSBwcm9wZXJ0eSBpcyBlY2hvZWQgaW4gdGhlIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0bWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKFwiQSBuZXcgTWVzc2FnZVwiLCBudWxsLCAnTWF4Jyk7XG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuXHQvL3VzaW5nIHB1YmxpYyBjcmVhdGVzIGFsc28gdGhlIHByb3BlcnR5IGluIHRoZSB1c2VyIENsYXNzIGFzIFxuXHQvL3dlbGwgYXMgZ2V0IHRoZW0gLCBcblx0Ly8gd2lsbCBsb29rIGxpa2UgZW1haWw6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvciAocHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLCBwdWJsaWMgZmlyc3ROYW1lPzogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmcpe1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
