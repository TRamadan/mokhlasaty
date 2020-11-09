import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private router: Router) {}

  gotorequestdetails() {
    this.router.navigateByUrl("/newrequest");
  }

  gotoservices() {
    this.router.navigateByUrl("/");
  }

  gotonotifications() {
    this.router.navigateByUrl("notifications");
  }

  gotochats() {
    this.router.navigateByUrl("/chat");
  }
}
