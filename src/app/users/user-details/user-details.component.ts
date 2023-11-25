import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userId:number | null = null;
  @Input() users:any[] = [];

  userDetail:any;

  ngOnChanges(): void{
    //console.log('Posts en PostDetailsComponent:', this.users);
    this.userDetail= this.users.find(user => user.id === this.userId);
  }
}
