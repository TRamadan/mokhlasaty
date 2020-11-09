import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  gotoregister() {
    this.router.navigateByUrl("/register");
  }

  gotoforgotpass() {
    this.router.navigateByUrl("forgotpassword");
  }

  gotohome() {
    this.router.navigateByUrl("/home");
  }
}
