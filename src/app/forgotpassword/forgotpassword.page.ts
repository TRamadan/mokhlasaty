import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  Send() {
    this.router.navigateByUrl("/forgotpass");
  }
}
