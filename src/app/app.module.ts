import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormChatComponent } from './form-chat/form-chat.component';
import { ScreenChatComponent } from './screen-chat/screen-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FormChatComponent,
    ScreenChatComponent,

  ],
	imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
