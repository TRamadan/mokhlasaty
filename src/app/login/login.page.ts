import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  loginform: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginform = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  gotoregister() {
    this.router.navigateByUrl("/register");
  }

  gotoforgotpass() {
    this.router.navigateByUrl("forgotpassword");
  }

  OnLogin() {
    const body = {
      email: this.loginform.controls.email.value,
      password: this.loginform.controls.password.value,
    };
    console.log(this.loginform.controls.value);
    console.log(body);
    this.router.navigateByUrl("/home");
  }
}
