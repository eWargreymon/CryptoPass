import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLog: FormGroup;

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { 
    this.formularioLog = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, password} = this.formularioLog.value;
    try{
      const user = await this.auth.login(email, password);
      if(user){
        this.router.navigate(['/account']);
      }
    } catch(e){
      console.log(e);
    }
  }

}
