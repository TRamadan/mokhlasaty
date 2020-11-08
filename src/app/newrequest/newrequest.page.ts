import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-newrequest",
  templateUrl: "./newrequest.page.html",
  styleUrls: ["./newrequest.page.scss"],
})
export class NewrequestPage implements OnInit {
  requests = [];

  service_name: any;

  constructor(private router: Router) {
    this.requests = [
      {
        id: 1,
        img: "../../assets/icon/favicon.png",
        title: "الخدمات الجامعية",
      },

      {
        id: 2,
        img: "../../assets/icon/favicon.png",
        title: "النوادي",
      },

      {
        id: 3,
        img: "../../assets/icon/favicon.png",
        title: "الشهادات العليا",
      },

      {
        id: 4,
        img: "../../assets/icon/favicon.png",
        title: "النقابة",
      },

      {
        id: 5,
        img: "../../assets/icon/favicon.png",
        title: "فواتير المرافق العامة",
      },

      {
        id: 6,
        img: "../../assets/icon/favicon.png",
        title: "الأحوال المدنية",
      },

      {
        id: 7,
        img: "../../assets/icon/favicon.png",
        title: "خدمات اخري",
      },
    ];
  }

  ngOnInit() {}

  gotorequestdetails(r) {
    console.log(r);
    this.service_name = r.title;
    console.log(this.service_name);
    this.setservicename(r);
    this.router.navigateByUrl("/requestdetails");
  }

  //here is the function needed to set the name of the choosed service
  setservicename(x: any) {
    this.service_name = x.service_name;
  }

  gotoshehadat() {
    this.router.navigateByUrl("/shehadat");
  }

  gotoclubs() {
    this.router.navigateByUrl("/clubs");
  }

  gotohigehrcert() {
    this.router.navigateByUrl("/highercert");
  }

  gotoneqabat() {
    this.router.navigateByUrl("/neqabat");
  }

  gotofwateer() {
    this.router.navigateByUrl("/fwateer");
  }

  gotoahwal() {
    this.router.navigateByUrl("/ahwal");
  }

  gotoothers() {
    this.router.navigateByUrl("/others");
  }
}
