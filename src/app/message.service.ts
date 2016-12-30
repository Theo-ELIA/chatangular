import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable }  from 'rxjs';

@Injectable()
export class MessageService {

	private APIChatURL = "/api/";
	private messages = [];
    constructor(private http: Http) { }

    readNewChatMessages() : Observable<any[]> {
		return this.http
			.get(this.APIChatURL + "retrieveMessages")
			.map(this.extractData)
			.catch(this.handleError);

    }

    extractData(response : Response ) {
    	console.log("Extract Data");
    	console.log(response.json());
    	return response.json().messages
	}

	handleError( error: any) {
		console.log(error);
		return Promise.reject(error.message);
	}
    registerNewChatMessage(message) {
    	console.log("REGISTER");
		console.log(message);
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    return this.http
		    .post(this.APIChatURL + "sendMessage",message,options)
		    .map(this.extractData)
		    .catch(this.handleError);
    }

}
