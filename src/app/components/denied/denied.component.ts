import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.css']
})
export class DeniedComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 8000);
  }

}
