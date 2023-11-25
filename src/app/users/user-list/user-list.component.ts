import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users=[
    {id:1,name:"Rommel",detalle:"detalle1"},
    {id:2,name:"Jhon",detalle:"detalle2"},
    {id:3,name:"Jane",detalle:"detalle3"},
  ]
  constructor(){}
  selectedUserId:number | null = null;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showDetailsU(userId:number):void{
    this.selectedUserId=userId
  }
}