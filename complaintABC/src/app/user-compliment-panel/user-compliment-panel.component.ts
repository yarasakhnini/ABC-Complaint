import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserComplimentSevice } from 'src/compliment.services/user-compliment.services';
import { AddComplimentComponent } from '../add-compliment/add-compliment.component';
import { ComplaimentViewModel } from '../models/complaiment';

@Component({
  selector: 'app-user-compliment-panel',
  templateUrl: './user-compliment-panel.component.html',
  styleUrls: ['./user-compliment-panel.component.scss'],
  providers:[UserComplimentSevice]
})
export class UserComplimentPanelComponent implements OnInit {
  [x: string]: any;
  complaimentViewModel:ComplaimentViewModel
  selection = new SelectionModel<ComplaimentViewModel>(true, []);

  displayedColumns: string[] = ['chked','ComplimentName', 'ComplimentDescreption', 'ComplimentStatus'];
  constructor(private dialog : MatDialog ,private _UserComplimentSevice:UserComplimentSevice) { }

  ngOnInit(): void {
    // this.complaimentViewModel= new ComplaimentViewModel(0,null,null,null)
   //  this.complaimentViewModel.userID=JSON.parse(localStorage.getItem('accountid'));
    console.log(JSON.parse(localStorage.getItem('accountid')))
    this._UserComplimentSevice.getComplimentsByUserId(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      this.dataSource=new MatTableDataSource<ComplaimentViewModel>(Response);
      this.dataSource.paginator = this.paginator;
    })
  }
  onCreat():void{
    const dialogConfig=new MatDialogConfig();
    this.dialog.open(  AddComplimentComponent , {
      height: '600px',
      width: '450px'
    
    }).afterClosed().subscribe(Response=>
      {console.log('hii',Response)
      this.ngOnInit() ; })    
    }
  applayFilter(filtervalue:string){
  
    this.dataSource.filter=filtervalue.trim().toLocaleLowerCase();
  }
  checkValue(filtervalue:string){
    this.dataSource.filter=filtervalue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
  
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  

}
