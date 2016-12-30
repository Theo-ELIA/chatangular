import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service' ;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [MessageService]

})
export class AppComponent implements OnInit {
    title = 'Chatangular!';
    chat = {
		messages : []
    };

	constructor(private messageService: MessageService) {
		//setInterval(() => { this.chat.messages = this.messageService.readNewChatMessages(); }, 500)
		this.messageService.readNewChatMessages().subscribe(messages => this.chat.messages = messages,error => console.log(error)) ;
		setInterval(() => { this.messageService.readNewChatMessages().subscribe(messages => this.chat.messages = messages,error => console.log(error)) ;},500);
	}

	ngOnInit() {
	}

	onSent(message) {
		console.log(this.messageService.registerNewChatMessage(message));
		this.messageService.registerNewChatMessage(message).subscribe(messages => console.log(messages),error => console.log(error))
	}
}
