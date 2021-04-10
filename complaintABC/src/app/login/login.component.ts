import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegeterationSevice } from 'src/compliment.services/registeration-compliment.service';
import { LoginViewModel } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserRegeterationSevice]
})
export class LoginComponent implements OnInit {

  public loginViewModel:LoginViewModel
  accounts:any[]

  constructor(private router: Router,private _UserRegeterationSevice:UserRegeterationSevice) { }

  ngOnInit(): void {
    this.accounts=[]
    this.loginViewModel=new LoginViewModel(null,null);
   // this.accounts=this._UserRegeterationSevice.getAllAdminsAccounts

  }

  public onSubmit() {

    this._UserRegeterationSevice.getAllUsersAccounts().subscribe(Response=>
      { this.accounts=Response
       console.log(this.accounts)
       for(let i=0; i<this.accounts.length;i++){
         if(this.accounts[i].Email==this.loginViewModel.Email)
              {
                if(this.accounts[i].Password==this.loginViewModel.Password)
                {
                  if(this.accounts[i].Role=="Admin")
                  this.router.navigateByUrl('/AdminComplimentPanel');
                  if(this.accounts[i].Role=="User")
                  this.router.navigateByUrl('/UserComplimentPanel')
                  localStorage.setItem('accountid',JSON.stringify(this.accounts[i].id))
                  break;
                }
                console.log("invalid Password")
              }
              console.log("invalid Email")

       }
     }
       )
  }
}
