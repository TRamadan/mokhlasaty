import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.isRTL;
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  foo() {
    console.log("function is worked !! ");
  }

  newrequest() {
    this.router.navigateByUrl("/newrequest");
  }

  myrequests() {
    this.router.navigateByUrl("/myrequests");
  }

  notifications() {
    this.router.navigateByUrl("/notifications");
  }

  chat() {
    this.router.navigateByUrl("/chat");
  }

  logout() {
    this.router.navigateByUrl("/login");
  }

  vision() {
    this.router.navigateByUrl("/companyvision");
  }

  gotocontactus()
  {
    this.router.navigateByUrl("/contactus");
  }
}
