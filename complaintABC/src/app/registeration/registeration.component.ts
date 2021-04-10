import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegeterationSevice } from 'src/compliment.services/registeration-compliment.service';
import { RegesterationViewModel } from '../models/Regesteration';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
  providers: [UserRegeterationSevice]
})
export class RegisterationComponent implements OnInit {

  userRegesterationViewModel:RegesterationViewModel
  AdminRegesterationViewModel:RegesterationViewModel

  constructor(private router: Router,private _UserRegesterationViewModel:UserRegeterationSevice) { }
  ngOnInit(): void {
    this.userRegesterationViewModel=new RegesterationViewModel(null,null,null,null,null)
    this.userRegesterationViewModel.Role="User"

    this.AdminRegesterationViewModel= new RegesterationViewModel(null,null,null,null,null)
    this.AdminRegesterationViewModel.Role="Admin"
  }

  createUserAccount() {
    this._UserRegesterationViewModel.createUserAccount(this.userRegesterationViewModel).subscribe(Response=>
     { console.log(Response)
      this.router.navigateByUrl('/login')
    }
      )

  }

  createAdminAccount() {
    this._UserRegesterationViewModel.createAdminAccount(this.AdminRegesterationViewModel).subscribe(Response=>
     { console.log(Response)
      this.router.navigateByUrl('/login')
    }
      )

  }
}
