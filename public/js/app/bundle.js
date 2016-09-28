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
                    this.message = [
                        new message_2.Message("A new Message", null, 'Max'),
                        new message_2.Message('Second Message', null, 'Vlad')
                    ];
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n    \t<section class=\"col-md-8 col-md-offset-2\">\n    \t\t<!-- ngModel  - keyword or directive that allows data binding , it allows two types of binding: property binding and even binding, uses both to listen \n    \t\t<input type=\"text\" [(ngModel)]=\"message.content\"/> -->\n    \t\t\n    \t</section>\n    </div>\n    <div class=\"row\">\n\t    <section  class=\"col-md-8 col-md-offset-2\">\n\t    \t<my-message *ngFor=\"#message of messages\" [message]=\"message\" (editClickd)=\"message.content=$event\"></my-message>  \n\t    \t<!-- tag that the message component will use \n\t    \t#message- creates a local variable storing the data, you can access it all over the template, message no longer refers to aproperty but now a local variable\n\t    \t-->\n\t    </section> \n    </div>\t\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNQyx3REFBd0Q7Z0JBQ3hELDZCQUE2QjtnQkFDN0IsaUJBQWEsT0FBZSxFQUFFLFNBQW1CLEVBQUUsUUFBa0IsRUFBRSxNQUFnQjtvQkFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsNkJBY0MsQ0FBQTs7OztBQ2RELGtFQUFrRTtBQUNsRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztZQXFDakI7Z0JBQUE7b0JBSWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQyxDQUFDLGtDQUFrQztvQkFDdEYsVUFBSyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsU0FBSSxHQUFHLElBQUksQ0FBQyxDQUFDLDhIQUE4SDtnQkFPL0ksQ0FBQztnQkFORyxrQ0FBTyxHQUFQO29CQUNJLDREQUE0RDtvQkFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDN0MseUZBQXlGO2dCQUM3RixDQUFDO2dCQVZEO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBRVI7b0JBRjBCLHFDQUFxQztvQkFFOUQsYUFBTSxFQUFFOztxRUFBQTtnQkFwQ2I7b0JBRmtDLGFBQWE7b0JBRTlDLGdCQUFTLENBQUU7d0JBQ1gsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwwb0JBZ0JUO3dCQUNBLE1BQU0sRUFBRSxDQUFDLG9QQVdOLENBQUM7cUJBQ0wsQ0FBQzs7b0NBQUE7Z0JBY0YsdUJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELCtDQWFDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ3hCRDtnQkFBQTtvQkFDQyxZQUFPLEdBQWU7d0JBQ3JCLElBQUksaUJBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDekMsSUFBSSxpQkFBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7cUJBRTNDLENBQUE7Z0JBQ0YsQ0FBQztnQkE3QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDh6QkFnQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQ2pDLENBQUM7O2dDQUFBO2dCQVNGLG1CQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1Q0FNQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQzdCRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNEdkIsZ0NBQWdDO1lBSGpDO2dCQUNDLDhEQUE4RDtnQkFDOUQscUJBQXFCO2dCQUNyQixnQ0FBZ0M7Z0JBRWhDLGNBQW9CLEtBQWEsRUFBUyxRQUFnQixFQUFTLFNBQWtCLEVBQVMsUUFBaUI7b0JBQTNGLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQzlHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixDQUFDO2dCQUNGLFdBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHVCQVdDLENBQUEiLCJmaWxlIjoiLi4vLi4vLi4vQW5ndWxhci1hcHAvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuXHRjb250ZW50OiBzdHJpbmc7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdG1lc3NhZ2VJZDogc3RyaW5nO1xuXHR1c2VySWQ6IHN0cmluZztcblxuXHQvLyBjb25zdHJ1Y3RvciB0byBtYWtlIHRoZSBjcmVhdGlvbiBvZiB0aGlzIGNsYXNzIGVhc2llclxuXHQvLz8gbWVhbnMgb3B0aW9uYWwgYXRycmlidXRlc1xuXHRjb25zdHJ1Y3RvciAoY29udGVudDogc3RyaW5nLCBtZXNzYWdlSWQgPzogc3RyaW5nLCB1c2VybmFtZSA/OiBzdHJpbmcsIHVzZXJJZCA/OiBzdHJpbmcpe1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5tZXNzYWdlSWQgPSBtZXNzYWdlSWQ7XG5cdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHR9XG59IiwiLy9TdGFydCB0aGUgZmlsZW5hbWUgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZGlyZWN0b3J5IGFuZCB0aGVuIHdoYXQgXG4vL2l0IGlzIGNvbXBvbmVudFxuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCIgLy9zYW1lIGZvbGRlclxuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnbXktbWVzc2FnZScsIC8vc2hvdWxkIGJlIHVuaXF1ZVxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6Y29sb3J9XCIgKG1vdXNlbnRlcik9XCJjb2xvcj0nd2hpdGUnXCI+XG4gICAgICAgIDwhLS0gbmdTdHlsZSBpcyBhIHByb3BlcnR5IGJpbmRpbmcsIHRha2VzIGEgamF2YXNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIHZhbHVlcyAtLT5cbiAgICBcdFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICBcdFx0XHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdCA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICBcdFx0IFx0XHR7eyBtZXNzYWdlLnVzZXJuYW1lIH19XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQgXHQ8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT48IS0tIGRlZmF1bHQgY2xpY2sgZXZlbnQgLS0+XG4gICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgXHRcdCBcdDwvZGl2PlxuICAgIFx0XHQ8L2Zvb3Rlcj5cbiAgICBcdDwvYXJ0aWNsZT4gXG5cdGAsXG5cdCBzdHlsZXM6IFtgXG4gICAgXHQvL3RoaXMgcXVvdGUgaWYgd3Jvbmcgd2lsbCBjYXVzZSBpc3N1ZXNcbiAgICBcdC5hdXRob3Ige1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgXHRcdHdpZHRoOiA4MCVcbiAgICBcdH1cbiAgICBcdC5jb25maWcge1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblx0Ly9tZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ3RoZSBDb250ZW50JywgbnVsbCwgJ01heCcpO1xuICAgIEBJbnB1dCgpIG1lc3NhZ2U6TWVzc2FnZTsgLy8gQGlucHV0KCkgc2V0cyB1cCBhIGN1c3RvbSBwcm9wZXJ0eVxuXG4gICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7IC8vIEBPdXR1cHV0IHNldHMgdXAgYSBjdXN0b20gZXZlbnRcbiAgICBjb2xvciA9IFwib3JhbmdlXCI7XG4gICAgc2hvdyA9IHRydWU7IC8vIGlmIGNoYW5nZWQgdG8gZmFsc2UsIG5vdGhpbmcgd2lsbCBnZXQgcmFuZGVyZWQgLCBiZWNhc3VlIG9mICpuZ2lmIHdpbGwgYmUgZmFsc2UgYW5kIGl0IHdpbGwgcmVtb3ZlIHRoZSBhcnRpY2xlIGZyb20gdGhlIERPTVxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDaGFuZ2VkIFRoZSBtZXNzYWdlXCIgc3RhdGljIGNoYW5nZVxuXG4gICAgICAgIHRoaXMuZWRpdENsaWNrZWQuZW1pdCgnQ2hhbmdlZCB0aGUgbWVzc2FnZScpO1xuICAgICAgICAvL0VtaXQoKSB1c2VkIHRvIGVtaXQgYW4gZXZlbnQgYW5kIGV2ZXJ5dGhpbmcgbGlzdGVuaW5nIHRvIGl0IHdpbGwgYmUgYWJsZSB0byBhY3QgdXBvbiBpdFxuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2VDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlXCJcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIFx0PHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICBcdFx0PCEtLSBuZ01vZGVsICAtIGtleXdvcmQgb3IgZGlyZWN0aXZlIHRoYXQgYWxsb3dzIGRhdGEgYmluZGluZyAsIGl0IGFsbG93cyB0d28gdHlwZXMgb2YgYmluZGluZzogcHJvcGVydHkgYmluZGluZyBhbmQgZXZlbiBiaW5kaW5nLCB1c2VzIGJvdGggdG8gbGlzdGVuIFxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UuY29udGVudFwiLz4gLS0+XG4gICAgXHRcdFxuICAgIFx0PC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0ICAgIDxzZWN0aW9uICBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuXHQgICAgXHQ8bXktbWVzc2FnZSAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAoZWRpdENsaWNrZCk9XCJtZXNzYWdlLmNvbnRlbnQ9JGV2ZW50XCI+PC9teS1tZXNzYWdlPiAgXG5cdCAgICBcdDwhLS0gdGFnIHRoYXQgdGhlIG1lc3NhZ2UgY29tcG9uZW50IHdpbGwgdXNlIFxuXHQgICAgXHQjbWVzc2FnZS0gY3JlYXRlcyBhIGxvY2FsIHZhcmlhYmxlIHN0b3JpbmcgdGhlIGRhdGEsIHlvdSBjYW4gYWNjZXNzIGl0IGFsbCBvdmVyIHRoZSB0ZW1wbGF0ZSwgbWVzc2FnZSBubyBsb25nZXIgcmVmZXJzIHRvIGFwcm9wZXJ0eSBidXQgbm93IGEgbG9jYWwgdmFyaWFibGVcblx0ICAgIFx0LS0+XG5cdCAgICA8L3NlY3Rpb24+IFxuICAgIDwvZGl2Plx0XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG4vLyBvdXQgY29tcG9uZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBtZXNzYWdlXG4vLyBUaGUgbWVzc2FnZSBwcm9wZXJ0eSBpcyBlY2hvZWQgaW4gdGhlIHRlbXBsYXRlXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0bWVzc2FnZTogTWVzc2FnZSBbXSA9IFtcblx0XHRuZXcgTWVzc2FnZShcIkEgbmV3IE1lc3NhZ2VcIiwgbnVsbCwgJ01heCcpLFxuXHRcdG5ldyBNZXNzYWdlKCdTZWNvbmQgTWVzc2FnZScsIG51bGwsICdWbGFkJylcblxuXHRdXG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuXHQvL3VzaW5nIHB1YmxpYyBjcmVhdGVzIGFsc28gdGhlIHByb3BlcnR5IGluIHRoZSB1c2VyIENsYXNzIGFzIFxuXHQvL3dlbGwgYXMgZ2V0IHRoZW0gLCBcblx0Ly8gd2lsbCBsb29rIGxpa2UgZW1haWw6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvciAocHVibGljIGVtYWlsOiBzdHJpbmcsIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLCBwdWJsaWMgZmlyc3ROYW1lPzogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmcpe1xuXHRcdHRoaXMuZW1haWwgPSBlbWFpbDtcblx0XHR0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
