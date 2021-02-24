import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BodycolorDirective } from './bodycolor.directive';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodotaskComponent,
    NopagefoundComponent,
    Page1Component,
    Page2Component,
    BodycolorDirective,
    ContentsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
