import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  
  posts = [
    {id:1,name:"post1",detalle:"detalle1"},
    {id:2,name:"post2",detalle:"detalle2"},
    {id:3,name:"post3",detalle:"detalle3"}
  ]
  selectedPost: any;

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showDetails(post:any):void{
    this.selectedPost = post;
  }

}
