import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-myrequests",
  templateUrl: "./myrequests.page.html",
  styleUrls: ["./myrequests.page.scss"],
})
export class MyrequestsPage implements OnInit {
  Requests = [];

  constructor(public navCtrl: NavController, private router: Router) {
    this.Requests = [
      {
        id: 1,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "200",
      },
      {
        id: 2,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "250",
      },
      {
        id: 3,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "250",
      },
      {
        id: 4,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "250",
      },
      {
        id: 5,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "250",
      },
      {
        id: 6,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "250",
      },
      {
        id: 7,
        title: "الشهادات الجامعية",
        type: "استخراج نسخة",
        period: "في الانتظار",
        cost: "250",
      },
    ];
  }

  ngOnInit() {}

  gotopayment() {
    // this.router.navigateByUrl("/payment");
    this.navCtrl.navigateForward("/payment");
  }
}
