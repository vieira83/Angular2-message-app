var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.component", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n    \t<section class=\"col-md-8 col-md-offset-2\">\n    \t\t<input type=\"text\"/>\n    \t</section>\n    </div>\n    <div class=\"row\">\n\t    <section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<article class=\"panel panel-default\">\n\t    \t\t<div class=\"panel-body\">\n\t    \t\t\t{{ message.content }}\n\t    \t\t</div>\n\t    \t\t <footer class=\"panel-footer\">\n\t    \t\t \t<div class=\"author\">\n\t    \t\t \t\t{{ message.author }}\n\t    \t\t \t</div>\n\t    \t\t \t<div class=\"config\">\n\t    \t\t \t\t<a href=\"#\">Edit</a>\n\t    \t\t \t\t<a href=\"#\">Delete</a>\n\t    \t\t \t</div>\n\t    \t\t</footer>\n\t    \t</article> \n\t        <h1>Hello World!</h1>\n\t    </section> \n    </div>\t\n    ",
                        styles: ["\n    \t//this quote if wrong will cause issues\n    \t.author {\n    \t\tdisplay:inline-block;\n    \t\tfont-style: italic;\n    \t\tfont-size: 12px;\n    \t\twidth: 80%\n    \t}\n    \t.config {\n    \t\tdisplay:inline-block;\n    \t}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
System.register("auth/user", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                //using public creates also the property in the user Class as 
                //well as get them , 
                // will look like email: string;
                function Message(email, password, firstName, lastName) {
                    this.email = email;
                    this.email = email;
                    this.password = password;
                    this.firtName = firstName;
                    this.lastName = lastName;
                }
                return Message;
            }());
            exports_3("Message", Message);
        }
    }
});
System.register("messages/message", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
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
            exports_4("Message", Message);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIiwibWVzc2FnZXMvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRDQTtnQkFBQTtvQkFDQyxZQUFPLEdBQUc7d0JBQ1QsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLE1BQU0sRUFBRSxNQUFNO3FCQUNkLENBQUM7Z0JBQ0gsQ0FBQztnQkFoREQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDh1QkF5QlQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsb1BBV1IsQ0FBQztxQkFDTCxDQUFDOztnQ0FBQTtnQkFRRixtQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsdUNBS0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUM3Q0QsbUJBQVMsQ0FBQyw0QkFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1lDSnhCO2dCQUNDLDhEQUE4RDtnQkFDOUQscUJBQXFCO2dCQUNyQixnQ0FBZ0M7Z0JBRWhDLGlCQUFvQixLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFFBQWdCO29CQUFwRSxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO29CQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRixjQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCw2QkFXQyxDQUFBOzs7Ozs7Ozs7OztZQ1hEO2dCQU1DLHdEQUF3RDtnQkFDeEQsNkJBQTZCO2dCQUM3QixpQkFBYSxPQUFlLEVBQUUsU0FBbUIsRUFBRSxRQUFrQixFQUFFLE1BQWdCO29CQUN0RixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdEIsQ0FBQztnQkFDRixjQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCw2QkFjQyxDQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL0FuZ3VsYXItYXBwL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICBcdDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cdCAgICA8c2VjdGlvbiAgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cblx0ICAgIFx0PGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG5cdCAgICBcdFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cblx0ICAgIFx0XHRcdHt7IG1lc3NhZ2UuY29udGVudCB9fVxuXHQgICAgXHRcdDwvZGl2PlxuXHQgICAgXHRcdCA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG5cdCAgICBcdFx0IFx0PGRpdiBjbGFzcz1cImF1dGhvclwiPlxuXHQgICAgXHRcdCBcdFx0e3sgbWVzc2FnZS5hdXRob3IgfX1cblx0ICAgIFx0XHQgXHQ8L2Rpdj5cblx0ICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG5cdCAgICBcdFx0IFx0XHQ8YSBocmVmPVwiI1wiPkVkaXQ8L2E+XG5cdCAgICBcdFx0IFx0XHQ8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cblx0ICAgIFx0XHQgXHQ8L2Rpdj5cblx0ICAgIFx0XHQ8L2Zvb3Rlcj5cblx0ICAgIFx0PC9hcnRpY2xlPiBcblx0ICAgICAgICA8aDE+SGVsbG8gV29ybGQhPC9oMT5cblx0ICAgIDwvc2VjdGlvbj4gXG4gICAgPC9kaXY+XHRcbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICBcdC8vdGhpcyBxdW90ZSBpZiB3cm9uZyB3aWxsIGNhdXNlIGlzc3Vlc1xuICAgIFx0LmF1dGhvciB7XG4gICAgXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIFx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTJweDtcbiAgICBcdFx0d2lkdGg6IDgwJVxuICAgIFx0fVxuICAgIFx0LmNvbmZpZyB7XG4gICAgXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIFx0fVxuICAgIGBdXG59KVxuLy8gb3V0IGNvbXBvbmVudCBoYXMgYSBwcm9wZXJ0eSBjYWxsZWQgbWVzc2FnZVxuLy8gVGhlIG1lc3NhZ2UgcHJvcGVydHkgaXMgZWNob2VkIGluIHRoZSB0ZW1wbGF0ZVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdG1lc3NhZ2UgPSB7XG5cdFx0Y29udGVudDogJ0EgbWVzc2FnZScsXG5cdFx0YXV0aG9yOiAnVmxhZCdcblx0fTtcbn0iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsiLCJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XG5cdC8vdXNpbmcgcHVibGljIGNyZWF0ZXMgYWxzbyB0aGUgcHJvcGVydHkgaW4gdGhlIHVzZXIgQ2xhc3MgYXMgXG5cdC8vd2VsbCBhcyBnZXQgdGhlbSAsIFxuXHQvLyB3aWxsIGxvb2sgbGlrZSBlbWFpbDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yIChwdWJsaWMgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZmlyc3ROYW1lPzpzdHJpbmcsIGxhc3ROYW1lPzpzdHJpbmcpe1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cdFx0dGhpcy5maXJ0TmFtZSA9IGZpcnN0TmFtZTtcblx0XHR0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG5cdH1cbn0iLCJleHBvcnQgY2xhc3MgTWVzc2FnZSB7XG5cdGNvbnRlbnQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcblx0bWVzc2FnZUlkOiBzdHJpbmc7XG5cdHVzZXJJZDogc3RyaW5nO1xuXG5cdC8vIGNvbnN0cnVjdG9yIHRvIG1ha2UgdGhlIGNyZWF0aW9uIG9mIHRoaXMgY2xhc3MgZWFzaWVyXG5cdC8vPyBtZWFucyBvcHRpb25hbCBhdHJyaWJ1dGVzXG5cdGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZCA/OiBzdHJpbmcsIHVzZXJuYW1lID86IHN0cmluZywgdXNlcklkID86IHN0cmluZyl7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG5cdFx0dGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG5cdFx0dGhpcy51c2VySWQgPSB1c2VySWQ7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
