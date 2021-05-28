import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { userData } from 'src/app/models/userData.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user$: Observable<any> = this.auth.afAuth.user;
  public uid: string = localStorage.getItem('currentUID');
  public email: string = localStorage.getItem('currentEmail');

  constructor(
    private auth: AuthService,
  ) {
    
  }

  ngOnInit() {
    
  }

}
