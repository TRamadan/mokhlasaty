import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserservicesService {
  constructor(private http: HttpClient) {}

  //here is the login function for the user already has an account
  Login(user_data: any): Observable<any> {
    return;
  }

  //here is the regiser function for the user that will create a new account
  Register(user_data: any): Observable<any> {
    return;
  }

  //here is the forgotpassword function that the user will send an email
  ForgotPassword(email: any): Observable<any> {
    return;
  }

  //here is the function needed to send the rest of data required to get the new password
  SendPasswordData(): Observable<any> {
    return;
  }
}
