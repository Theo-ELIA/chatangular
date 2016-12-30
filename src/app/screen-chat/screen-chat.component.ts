import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'screen-chat',
	templateUrl: './screen-chat.component.html',
	styleUrls: ['./screen-chat.component.css'],
})
export class ScreenChatComponent implements OnInit {

	@Input() chat;
	constructor() { }

	ngOnInit() {
	}

}