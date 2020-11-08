import { Component, OnInit } from "@angular/core";
import { RequestsService } from "../services/requests.service";
@Component({
  selector: "app-requestdetails",
  templateUrl: "./requestdetails.page.html",
  styleUrls: ["./requestdetails.page.scss"],
})
export class RequestdetailsPage implements OnInit {
  service_name: any;

  constructor(private request_service: RequestsService) {
    this.service_name = request_service.title;
    console.log(this.service_name);
  }

  ngOnInit() {}
}
