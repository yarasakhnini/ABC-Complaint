import { Component, OnInit } from '@angular/core';
import { UserComplimentSevice } from 'src/compliment.services/user-compliment.services';
import { ComplaimentViewModel } from '../models/complaiment';

@Component({
  selector: 'app-add-compliment',
  templateUrl: './add-compliment.component.html',
  styleUrls: ['./add-compliment.component.scss'],
  providers:[UserComplimentSevice]

})
export class AddComplimentComponent implements OnInit {

  complaimentViewModel:ComplaimentViewModel

  constructor(private _UserComplimentSevice:UserComplimentSevice) { }

  ngOnInit(): void {
    this.complaimentViewModel= new ComplaimentViewModel(0,null,null,null)
    this.complaimentViewModel.userID=JSON.parse(localStorage.getItem('accountid'));
    this.complaimentViewModel.status="not seen yet"
  }

  createComplimentTemplate()
  {
this._UserComplimentSevice.createCompliment(this.complaimentViewModel).subscribe((data)=>{this.success(data)},
(err) =>{this.error()})
  }
success(data){
  console.log("Compliment created" );
}
error(){
  console.log("error");
}

}


