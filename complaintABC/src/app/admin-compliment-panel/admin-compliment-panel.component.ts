import { element } from 'protractor';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserComplimentSevice } from 'src/compliment.services/user-compliment.services';
import { ComplaimentViewModel } from '../models/complaiment';

@Component({
  selector: 'app-admin-compliment-panel',
  templateUrl: './admin-compliment-panel.component.html',
  styleUrls: ['./admin-compliment-panel.component.scss'],
  providers:[UserComplimentSevice]

})
export class AdminComplimentPanelComponent implements OnInit {
  [x: string]: any;
  selection = new SelectionModel<ComplaimentViewModel>(true, []);
  updatemodel=[]
  displayedColumns: string[] = ['chked','ComplimentName', 'ComplimentDescreption', 'ComplimentStatus'];

  constructor(private _UserComplimentSevice:UserComplimentSevice) { }

  ngOnInit(): void {
    this._UserComplimentSevice.getAllCompliment().subscribe(Response=>{
      this.updatemodel=Response
      for(let i=0; i<this.updatemodel.length;i++)
      {
        if(this.updatemodel[i].status=="not seen yet")
      {  this.updatemodel[i].status="seen"
      this._UserComplimentSevice.updateCompliment(this.updatemodel[i].id,this.updatemodel[i]).subscribe(Response=>{
        console.log(Response)

      })

    }
      }
    })
    this._UserComplimentSevice.getAllCompliment().subscribe(Response=>{
      this.dataSource=new MatTableDataSource<ComplaimentViewModel>(Response);
      this.dataSource.paginator = this.paginator;
      console.log("2222222222this.updatemodel")

    })
  }

  selsectedDUpdatedStatusRows:any[]
  UpdateStatusSelection(status:string)
  {
    this.selsectedDUpdatedStatusRows=this.selection.selected;
    console.log(this.selsectedDUpdatedStatusRows)
    for(let i=0; i<this.selsectedDUpdatedStatusRows.length;i++)
    {
      this.selsectedDUpdatedStatusRows[i].status=status
    this._UserComplimentSevice.updateCompliment(this.selsectedDUpdatedStatusRows[i].id,this.selsectedDUpdatedStatusRows[i]).subscribe(Response=>{
      console.log(Response)

    })
  }}
  updatestatus(element:ComplaimentViewModel,id:number)
  {
    //status=this.status
    console.log("event",this.status, "id",id ,"element",element)
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
