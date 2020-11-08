import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
  notifications = [];
  constructor() {
    this.notifications = [
      {
        id: 1,
        img: "../../assets/icon/favicon.png",
        title: "لقد تم الموافقة علي طلبك تجديد اشتراك النادي",
      },
      {
        id: 1,
        img: "../../assets/icon/favicon.png",
        title: "لقد تم الموافقة علي طلبك تجديد اشتراك النادي",
      },
      {
        id: 1,
        img: "../../assets/icon/favicon.png",
        title: "لقد تم الموافقة علي طلبك تجديد اشتراك النادي",
      },
      {
        id: 1,
        img: "../../assets/icon/favicon.png",
        title: "لقد تم الموافقة علي طلبك تجديد اشتراك النادي",
      },
      {
        id: 1,
        img: "../../assets/icon/favicon.png",
        title: "لقد تم الموافقة علي طلبك تجديد اشتراك النادي",
      },
      {
        id: 2,
        img: "../../assets/icon/favicon.png",
        title: "تكلفة تجديد اشتراك النادي 500 جنيه",
      },
      {
        id: 3,
        img: "../../assets/icon/favicon.png",
        title: "لقد تم رفض  علي طلبك تجديد اشتراك النادي",
      },
    ];
  }

  ngOnInit() {}
}
