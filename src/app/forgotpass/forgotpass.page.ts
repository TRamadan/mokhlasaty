import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "app-forgotpass",
  templateUrl: "./forgotpass.page.html",
  styleUrls: ["./forgotpass.page.scss"],
})
export class ForgotpassPage implements OnInit {
  constructor(private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router) { }

  ngOnInit() { }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      message: "برجاء النتظار ... ",
      duration: 2000,
    });
    await loader.present();
    this.router.navigateByUrl("/");
    this.presentAlert();
    await loader.dismiss();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      message: "تم تغير كلمة المرور بنجاح برجاء تسجيل الدخول.",
      buttons: ["تم"],
    });
    await alert.present();
  }
}
