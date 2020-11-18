import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-clubs",
  templateUrl: "./clubs.page.html",
  styleUrls: ["./clubs.page.scss"],
})
export class ClubsPage implements OnInit {
  status: any;
  status2: any;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.status = "blonde1";
    this.status2 = "brown2";
  }

  ngOnInit() {}

  async senddata() {
    const loader = await this.loadingController.create({
      message: "برجاء النتظار ... ",
      duration: 2000,
    });
    await loader.present();
    this.router.navigateByUrl("/home");
    this.presentAlert();
    await loader.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      message: "تم ارسال البيانات بنجاح.",
      buttons: ["تم"],
    });

    await alert.present();
  }

  uploadimg() {}
}
