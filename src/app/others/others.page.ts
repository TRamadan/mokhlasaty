import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, AlertController } from "@ionic/angular";

import {
  FormBuilder,
  FormGroup,
  FormGroupName,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-others",
  templateUrl: "./others.page.html",
  styleUrls: ["./others.page.scss"],
})
export class OthersPage implements OnInit {
  servicenmame: any;
  service_details: any;
  ways: any;
  country: any;

  checked: any;

  othersForm: FormGroup;

  ShowAddress: boolean = false;

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private alertCtrl: AlertController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.othersForm = this.fb.group({
      servicenmame: ["", Validators.required],
      service_details: ["", Validators.required],
      ways: ["", Validators.required],
    });
  }

  async SendRequest() {
    console.log("this function is fired");
    console.log("loading function is fired");
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

  showaddress(ev) {
    console.log(ev);
    if (ev.detail.checked == true) {
      this.ShowAddress = true;
    } else {
      this.ShowAddress = false;
    }
  }
}
