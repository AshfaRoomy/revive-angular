import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService.service';
import { TokenStorage } from '../services/TokenStorage.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Image: string;
  signupForm!: FormGroup;


  constructor(private toast: ToastrService, private router: Router, private authentication: AuthenticationService, private tokenStorage: TokenStorage) {
    this.Image = 'assets/images/regimg.jpg';

  }
  private initializeForm() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.pattern("^[A-Za-z]*$")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit() {
    this.initializeForm();
  }

  onSignUp() {
    console.log(this.signupForm);
    this.authentication.onSignUpService(this.signupForm).subscribe(data => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);
      this.router.navigate(["/home"]);
      this.toast.success("Successfully registered");
    },
      err => {
        console.log(err)
        this.toast.error("Login credentials invalid please try again")
      });
  }
}
