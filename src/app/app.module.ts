import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OpusListComponent } from './opus-list/opus-list.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BackLinkHeaderComponent } from './back-link-header/back-link-header.component';
import { NewItemComponent } from './new-item/new-item.component';
import { FabSpeedDialComponent } from './fab-speed-dial/fab-speed-dial.component';

import { TaskService } from './services/task.service';



@NgModule({
  declarations: [
    AppComponent,
    OpusListComponent,
    HeaderComponent,
    SidenavComponent,
    BackLinkHeaderComponent,
    NewItemComponent,
    FabSpeedDialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
