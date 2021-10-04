import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommandsComponent } from './commands/commands.component';
import { FunctionsComponent } from './functions/functions.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: {title: 'Main Page'} },
  { path: 'get-started', component: GetStartedComponent, data: {title: 'Get Started'} },
  { path: 'commands', component: CommandsComponent, data: {title: 'Commands'} },
  { path: 'permissions', component: PermissionsComponent, data: {title: 'Permissions'} },
  { path: 'functions', component: FunctionsComponent, data: {title: 'Functions'} },
  { path: 'about', component: AboutComponent, data: {title: 'About'} },
  { path: '**', component: PageNotFoundComponent, data: {title: '404 - Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
