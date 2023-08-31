import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/AuthenticationService.service';
import { TokenStorage } from '../services/TokenStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Image: string;
  loginForm: FormGroup;


  constructor(private toast: ToastrService, private router: Router, private authentication: AuthenticationService, private tokenStorage: TokenStorage) {
    this.Image = 'assets/images/regimg.jpg';

  }
  private initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit() {
    this.initializeForm();
  }

  onLogin() {
    this.authentication.onLoginService(this.loginForm).subscribe(data => {
      console.log("user token:" + data.token)
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);
      this.loginForm.reset();
      this.router.navigate(["/home"]);
      this.toast.success("Succefully logged in");
    },
      err => {
        console.log(err)
        this.toast.error("Login credentials invalid please try again")
      });
  }

}
