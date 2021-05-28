import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user$: Observable<any> = this.auth.afAuth.user;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  async ngOnInit(){

  }

  async logout(){
    try{
      this.auth.logout();
      this.router.navigate(['/home']);}
    catch(error){
      console.log(error);
    }
  }

}
