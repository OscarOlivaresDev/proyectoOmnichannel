import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ModalViewContactComponent } from './components/modal-view-contact/modal-view-contact.component';
import { ModalViewMessageComponent } from './components/modal-view-message/modal-view-message.component';
import { ModalViewEditComponent } from './components/modal-view-edit/modal-view-edit.component';
import { ModalViewTimeComponent } from './components/modal-view-time/modal-view-time.component';
import { ModalViewLikeComponent } from './components/modal-view-like/modal-view-like.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ModalViewContactComponent,
    ModalViewMessageComponent,
    ModalViewEditComponent,
    ModalViewTimeComponent,
    ModalViewLikeComponent,
    CreateNoteComponent
  ],
  entryComponents:[
    ModalViewContactComponent,
    ModalViewMessageComponent,
    ModalViewEditComponent,
    ModalViewTimeComponent,
    ModalViewLikeComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
