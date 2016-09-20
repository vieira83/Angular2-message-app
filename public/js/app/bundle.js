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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNENBO2dCQUFBO29CQUNDLFlBQU8sR0FBRzt3QkFDVCxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsTUFBTSxFQUFFLE1BQU07cUJBQ2QsQ0FBQztnQkFDSCxDQUFDO2dCQWhERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsOHVCQXlCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxvUEFXUixDQUFDO3FCQUNMLENBQUM7O2dDQUFBO2dCQVFGLG1CQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx1Q0FLQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQzdDRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi9Bbmd1bGFyLWFwcC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHQ8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgXHQ8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXHQgICAgPHNlY3Rpb24gIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cdCAgICBcdDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuXHQgICAgXHRcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG5cdCAgICBcdFx0XHR7eyBtZXNzYWdlLmNvbnRlbnQgfX1cblx0ICAgIFx0XHQ8L2Rpdj5cblx0ICAgIFx0XHQgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuXHQgICAgXHRcdCBcdDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cblx0ICAgIFx0XHQgXHRcdHt7IG1lc3NhZ2UuYXV0aG9yIH19XG5cdCAgICBcdFx0IFx0PC9kaXY+XG5cdCAgICBcdFx0IFx0PGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuXHQgICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5FZGl0PC9hPlxuXHQgICAgXHRcdCBcdFx0PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG5cdCAgICBcdFx0IFx0PC9kaXY+XG5cdCAgICBcdFx0PC9mb290ZXI+XG5cdCAgICBcdDwvYXJ0aWNsZT4gXG5cdCAgICAgICAgPGgxPkhlbGxvIFdvcmxkITwvaDE+XG5cdCAgICA8L3NlY3Rpb24+IFxuICAgIDwvZGl2Plx0XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgXHQvL3RoaXMgcXVvdGUgaWYgd3Jvbmcgd2lsbCBjYXVzZSBpc3N1ZXNcbiAgICBcdC5hdXRob3Ige1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIFx0XHRmb250LXNpemU6IDEycHg7XG4gICAgXHRcdHdpZHRoOiA4MCVcbiAgICBcdH1cbiAgICBcdC5jb25maWcge1xuICAgIFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBcdH1cbiAgICBgXVxufSlcbi8vIG91dCBjb21wb25lbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIG1lc3NhZ2Vcbi8vIFRoZSBtZXNzYWdlIHByb3BlcnR5IGlzIGVjaG9lZCBpbiB0aGUgdGVtcGxhdGVcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRtZXNzYWdlID0ge1xuXHRcdGNvbnRlbnQ6ICdBIG1lc3NhZ2UnLFxuXHRcdGF1dGhvcjogJ1ZsYWQnXG5cdH07XG59IiwiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
