import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'form-chat',
	templateUrl: './form-chat.component.html',
	styleUrls: ['./form-chat.component.css']
})
export class FormChatComponent implements OnInit {
	message = {
		username: "",
		content : "",
		date : null
	};

	@Output() onSent = new EventEmitter<Object>();

	onSubmit() {
		let date = new Date();
	    this.onSent.emit(this.message);
	    this.message  ={ username : this.message.username, content : "", date : null}
    }

	constructor() {
	}

	ngOnInit() {

	}

}
