import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminComplimentPanelComponent } from './admin-compliment-panel/admin-compliment-panel.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserComplimentPanelComponent } from './user-compliment-panel/user-compliment-panel.component';


const routes: Route [] = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'CreateAccount', component: RegisterationComponent },
  { path: 'UserComplimentPanel', component: UserComplimentPanelComponent },
  { path: 'AdminComplimentPanel', component: AdminComplimentPanelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
