import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from '@ionic/angular';

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
  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router) { }

  ngOnInit() { }

  async onRegister() {
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
      message: "تم التسجيل بنجاح .",
      buttons: ["تم"],
    });

    await alert.present();
  }

  gotologin() {
    this.router.navigateByUrl("/login");
  }
}
