import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RequestsService {
  title: any;
  constructor() {}

  setservicename(x: any) {
    this.title = x.service_name;
  }
}
