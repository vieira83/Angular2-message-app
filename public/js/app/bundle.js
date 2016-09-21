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
                    this.username = username;
                    this.messageId = messageId;
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
                    this.message = new message_1.Message('the Content', null, 'Max');
                }
                MessageComponent = __decorate([
                    //same folder
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n\t\t<article class=\"panel panel-default\">\n    \t\t<div class=\"panel-body\">\n    \t\t\t{{ message.content }}\n    \t\t</div>\n    \t\t <footer class=\"panel-footer\">\n    \t\t \t<div class=\"author\">\n    \t\t \t\t{{ message.author }}\n    \t\t \t</div>\n    \t\t \t<div class=\"config\">\n    \t\t \t\t<a href=\"#\">Edit</a>\n    \t\t \t\t<a href=\"#\">Delete</a>\n    \t\t \t</div>\n    \t\t</footer>\n    \t</article> \n\t",
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
System.register("app.component", ['angular2/core', "messages/message.component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = {
                        content: 'A message',
                        author: 'Vlad'
                    };
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n    \t<section class=\"col-md-8 col-md-offset-2\">\n    \t\t//ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen\n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/>\n    \t</section>\n    </div>\n    <div class=\"row\">\n\t    <section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<my-message>\n\n\t    \t</my-message>  // tag that the messate component will use\n\t        <h1>Hello World!</h1>\n\t    </section> \n    </div>\t\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7OztBQ2RELGtFQUFrRTtBQUNsRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztZQW9DakI7Z0JBQUE7b0JBQ0MsWUFBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUMzRCxDQUFDO2dCQWpDRDtvQkFGa0MsYUFBYTtvQkFFOUMsZ0JBQVMsQ0FBRTt3QkFDWCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLG1iQWVUO3dCQUNBLE1BQU0sRUFBRSxDQUFDLG9QQVdOLENBQUM7cUJBQ0wsQ0FBQzs7b0NBQUE7Z0JBR0YsdUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ2REO2dCQUFBO29CQUNDLFlBQU8sR0FBRzt3QkFDVCxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsTUFBTSxFQUFFLE1BQU07cUJBQ2QsQ0FBQztnQkFDSCxDQUFDO2dCQTNCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMmpCQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOztnQ0FBQTtnQkFRRixtQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsdUNBS0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUMxQkQsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDRHZCLGdDQUFnQztZQUhqQztnQkFDQyw4REFBOEQ7Z0JBQzlELHFCQUFxQjtnQkFDckIsZ0NBQWdDO2dCQUVoQyxjQUFvQixLQUFhLEVBQVMsUUFBZ0IsRUFBUyxTQUFpQixFQUFTLFFBQWdCO29CQUF6RixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUM1RyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRixXQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1QkFXQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXItYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcblx0Y29udGVudDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHRtZXNzYWdlSWQ6IHN0cmluZztcblx0dXNlcklkOiBzdHJpbmc7XG5cblx0Ly8gY29uc3RydWN0b3IgdG8gbWFrZSB0aGUgY3JlYXRpb24gb2YgdGhpcyBjbGFzcyBlYXNpZXJcblx0Ly8/IG1lYW5zIG9wdGlvbmFsIGF0cnJpYnV0ZXNcblx0Y29uc3RydWN0b3IgKGNvbnRlbnQ6IHN0cmluZywgbWVzc2FnZUlkID86IHN0cmluZywgdXNlcm5hbWUgPzogc3RyaW5nLCB1c2VySWQgPzogc3RyaW5nKXtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcblx0XHR0aGlzLm1lc3NhZ2VJZCA9IG1lc3NhZ2VJZDtcblx0XHR0aGlzLnVzZXJJZCA9IHVzZXJJZDtcblx0fVxufSIsIi8vU3RhcnQgdGhlIGZpbGVuYW1lIHdpdGggdGhlIG5hbWUgb2YgdGhlIGRpcmVjdG9yeSBhbmQgdGhlbiB3aGF0IFxuLy9pdCBpcyBjb21wb25lbnRcblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIiAvL3NhbWUgZm9sZGVyXG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdteS1tZXNzYWdlJywgLy9zaG91bGQgYmUgdW5pcXVlXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgXHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgXHRcdFx0e3sgbWVzc2FnZS5jb250ZW50IH19XG4gICAgXHRcdDwvZGl2PlxuICAgIFx0XHQgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgXHRcdCBcdFx0e3sgbWVzc2FnZS5hdXRob3IgfX1cbiAgICBcdFx0IFx0PC9kaXY+XG4gICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICBcdFx0IFx0XHQ8YSBocmVmPVwiI1wiPkVkaXQ8L2E+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQ8L2Zvb3Rlcj5cbiAgICBcdDwvYXJ0aWNsZT4gXG5cdGAsXG5cdCBzdHlsZXM6IFtgXG4gICAgXHQvL3RoaXMgcXVvdGUgaWYgd3Jvbmcgd2lsbCBjYXVzZSBpc3N1ZXNcbiAgICBcdC5hdXRob3Ige1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgXHRcdHdpZHRoOiA4MCVcbiAgICBcdH1cbiAgICBcdC5jb25maWcge1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblx0bWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKCd0aGUgQ29udGVudCcsIG51bGwsICdNYXgnKVxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICBcdDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgXHRcdC8vbmdNb2RlbCAgLSBrZXl3b3JkIG9yIGRpcmVjdGl2ZSB0aGF0IGFsbG93cyBkYXRhIGJpbmRpbmcgLCBpdCBhbGxvd3MgdHdvIHR5cGVzIG9mIGJpbmRpbmc6IHByb3BlcnR5IGJpbmRpbmcgYW5kIGV2ZW4gYmluZGluZywgdXNlcyBib3RoIHRvIGxpc3RlblxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UuY29udGVudFwiLz5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdCAgICA8c2VjdGlvbiAgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0ICAgIFx0PG15LW1lc3NhZ2U+XG5cblx0ICAgIFx0PC9teS1tZXNzYWdlPiAgLy8gdGFnIHRoYXQgdGhlIG1lc3NhdGUgY29tcG9uZW50IHdpbGwgdXNlXG5cdCAgICAgICAgPGgxPkhlbGxvIFdvcmxkITwvaDE+XG5cdCAgICA8L3NlY3Rpb24+IFxuICAgIDwvZGl2Plx0XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG4vLyBvdXQgY29tcG9uZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBtZXNzYWdlXG4vLyBUaGUgbWVzc2FnZSBwcm9wZXJ0eSBpcyBlY2hvZWQgaW4gdGhlIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0bWVzc2FnZSA9IHtcblx0XHRjb250ZW50OiAnQSBtZXNzYWdlJyxcblx0XHRhdXRob3I6ICdWbGFkJ1xuXHR9O1xufSIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQpOyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcblx0Ly91c2luZyBwdWJsaWMgY3JlYXRlcyBhbHNvIHRoZSBwcm9wZXJ0eSBpbiB0aGUgdXNlciBDbGFzcyBhcyBcblx0Ly93ZWxsIGFzIGdldCB0aGVtICwgXG5cdC8vIHdpbGwgbG9vayBsaWtlIGVtYWlsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IgKHB1YmxpYyBlbWFpbDogc3RyaW5nLCBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZywgcHVibGljIGZpcnN0TmFtZT86c3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU/OnN0cmluZyl7XG5cdFx0dGhpcy5lbWFpbCA9IGVtYWlsO1xuXHRcdHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcblx0XHR0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcblx0XHR0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
