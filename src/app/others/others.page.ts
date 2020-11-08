import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-others",
  templateUrl: "./others.page.html",
  styleUrls: ["./others.page.scss"],
})
export class OthersPage implements OnInit {
  constructor(
    private loadingController: LoadingController,
    private router: Router,
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
