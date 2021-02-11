import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import {RouterModule, Routes} from '@angular/router';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'servers', component:ServersComponent ,children:[
    {path:':id/edit', component:EditServerComponent},
    {path:':id', component:ServerComponent}
  ]},
  {path:'users', component:UsersComponent,children:[
    {path:':id/:name', component:UserComponent}
  ] },
  

  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
