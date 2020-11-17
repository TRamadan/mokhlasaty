import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahwal',
  templateUrl: './ahwal.page.html',
  styleUrls: ['./ahwal.page.scss'],
})
export class AhwalPage implements OnInit {

  ahwalform: FormGroup;
  status: string;

  constructor(private formbuilder: FormBuilder, private loadingController: LoadingController,
    private alertCtrl: AlertController, private router: Router) {
    this.status = "";
  }

  ngOnInit() {
    this.ahwalform = this.formbuilder.group({

    })
  }

  async senddata() {
    console.log("this function is fired");
    console.log("loading function is fired");
    const loader = await this.loadingController.create({
      message: "برجاء النتظار ... ",
      duration: 2000,
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

}
