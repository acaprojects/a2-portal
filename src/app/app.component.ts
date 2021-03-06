import { Component } from '@angular/core';

import { SkypeSDKService } from './services/skype-sdk';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(private skype: SkypeSDKService) { }
}
