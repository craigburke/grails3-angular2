/// <reference path="typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    bootstrap,
} from "angular2/angular2";

@Component({
    selector: 'hello-world'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class HelloWorld {
    name:string;
    constructor() {
        this.name = 'Craig';
    }
}

bootstrap(HelloWorld);
