import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-ahwal",
  templateUrl: "./ahwal.page.html",
  styleUrls: ["./ahwal.page.scss"],
})
export class AhwalPage implements OnInit {
  ahwalform: FormGroup;
  status: string;
  status2: string;

  constructor(
    private formbuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.status = "blonde1";
    this.status2 = "brown";
  }

  ngOnInit() {
    this.ahwalform = this.formbuilder.group({});
  }

  async senddata() {
    const loader = await this.loadingController.create({
      message: "برجاء النتظار ... ",
      duration: 1000,
    });
    await loader.present();
    this.router.navigateByUrl("/home");
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      message: "تم ارسال البيانات بنجاح.",
      buttons: ["تم"],
    });

    await alert.present();
  }

  async uploadimg() {
    const loader = await this.loadingController.create({
      message: "برجاء النتظار ... ",
      duration: 1000,
    });
    await loader.present();
    this.presentAlertforimg();
  }

  async presentAlertforimg() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      message: "تم رفع الصورة بنجاح.",
      buttons: ["تم"],
    });

    await alert.present();
  }
}
