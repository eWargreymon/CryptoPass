import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formularioReg: FormGroup;

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { 
    this.formularioReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  async onRegister(){
    const {email, password} = this.formularioReg.value;
    try{
      const user = await this.authservice.register(email, password);
      if(user){
        this.router.navigate(['/login']);
        alert("¡Registro completado con éxito!");
      }
    } catch(e){
      console.log(e);
    }
  }

}
