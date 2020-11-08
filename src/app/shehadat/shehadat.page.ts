import { async } from "@angular/core/testing";
import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-shehadat",
  templateUrl: "./shehadat.page.html",
  styleUrls: ["./shehadat.page.scss"],
})
export class ShehadatPage implements OnInit {
  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  async SendRequest() {
    console.log("this function is fired");
    console.log("loading function is fired");
    const loader = await this.loadingController.create({
      message: "برجاء النتظار ... ",
      duration: 2000,
    });
    await loader.present();
    this.router.navigateByUrl("/");
    this.presentAlert();
    await loader.dismiss();
    // this.loadingController.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      message: "تم ارسال البيانات بنجاح.",
      buttons: ["تم"],
    });

    await alert.present();
  }
}
