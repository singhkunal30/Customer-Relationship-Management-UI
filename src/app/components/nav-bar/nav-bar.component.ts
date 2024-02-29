import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-guard/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout():void{
    this.authService.logout();
  }

}
