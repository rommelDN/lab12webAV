
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  route: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.route = this.activatedRoute.snapshot.url.join('');
  }
}