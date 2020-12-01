import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
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
  registerationform: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerationform = this.formbuilder.group({
      first_name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      ConfirmationPassword: ["", Validators.required],
      mobile_number: ["", Validators.required],
    });
  }

  async onRegister() {
    const body = {
      first_name: this.registerationform.controls.first_name.value,
      email: this.registerationform.controls.email.value,
      password: this.registerationform.controls.password.value,
      ConfirmationPassword: this.registerationform.controls.ConfirmationPassword
        .value,
      mobile_number: this.registerationform.controls.mobile_number.value,
    };
    console.log(body);
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
