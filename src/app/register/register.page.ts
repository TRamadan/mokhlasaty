import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  firstName;
  email;
  password;
  passwordConfirm;
  phone;
  constructor(private router: Router) {}

  ngOnInit() {}

  onRegister() {}

  gotologin() {
    this.router.navigateByUrl("/login");
  }
}
