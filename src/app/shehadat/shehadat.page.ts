import { async } from "@angular/core/testing";
import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-shehadat",
  templateUrl: "./shehadat.page.html",
  styleUrls: ["./shehadat.page.scss"],
})
export class ShehadatPage implements OnInit {
  status: any;
  status2: any;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private formbuilder: FormBuilder
  ) {
    this.status = "brown1";
    this.status2 = "brown";
  }

  ngOnInit() { }

  async SendRequest() {
    const loader = await this.loadingController.create({
      message: "برجاء النتظار ... ",
      duration: 2000,
    });
    await loader.present();
    this.router.navigateByUrl("/home");
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

  uploadimg() { }
}
