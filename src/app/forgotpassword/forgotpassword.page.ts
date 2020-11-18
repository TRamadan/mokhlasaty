import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  constructor(private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() { }

  Send() {
    this.router.navigateByUrl("/forgotpass");
    this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      message: "تم ارسال الكود بنجاح.",
      buttons: ["تم"],
    });

    await alert.present();
  }
}
