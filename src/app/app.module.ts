import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { CommandsComponent } from './commands/commands.component';
import { ServersComponent } from './servers/servers.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FunctionsComponent } from './functions/functions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetStartedComponent,
    CommandsComponent,
    ServersComponent,
    PermissionsComponent,
    AboutComponent,
    PageNotFoundComponent,
    FunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
