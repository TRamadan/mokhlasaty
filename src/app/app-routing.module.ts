import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "notifictions",
    loadChildren: () =>
      import("./notifictions/notifictions.module").then(
        (m) => m.NotifictionsPageModule
      ),
  },
  {
    path: "chat",
    loadChildren: () =>
      import("./chat/chat.module").then((m) => m.ChatPageModule),
  },
  {
    path: "companyvision",
    loadChildren: () =>
      import("./companyvision/companyvision.module").then(
        (m) => m.CompanyvisionPageModule
      ),
  },
  {
    path: "myrequests",
    loadChildren: () =>
      import("./myrequests/myrequests.module").then(
        (m) => m.MyrequestsPageModule
      ),
  },
  {
    path: "notifications",
    loadChildren: () =>
      import("./notifications/notifications.module").then(
        (m) => m.NotificationsPageModule
      ),
  },
  {
    path: "newrequest",
    loadChildren: () =>
      import("./newrequest/newrequest.module").then(
        (m) => m.NewrequestPageModule
      ),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "requestdetails",
    loadChildren: () =>
      import("./requestdetails/requestdetails.module").then(
        (m) => m.RequestdetailsPageModule
      ),
  },
  {
    path: "clubs",
    loadChildren: () =>
      import("./clubs/clubs.module").then((m) => m.ClubsPageModule),
  },
  {
    path: "shehadat",
    loadChildren: () =>
      import("./shehadat/shehadat.module").then((m) => m.ShehadatPageModule),
  },
  {
    path: "neqabat",
    loadChildren: () =>
      import("./neqabat/neqabat.module").then((m) => m.NeqabatPageModule),
  },
  {
    path: "fwateer",
    loadChildren: () =>
      import("./fwateer/fwateer.module").then((m) => m.FwateerPageModule),
  },
  {
    path: "ahwal",
    loadChildren: () =>
      import("./ahwal/ahwal.module").then((m) => m.AhwalPageModule),
  },
  {
    path: "highercert",
    loadChildren: () =>
      import("./highercert/highercert.module").then(
        (m) => m.HighercertPageModule
      ),
  },
  {
    path: "others",
    loadChildren: () =>
      import("./others/others.module").then((m) => m.OthersPageModule),
  },
  {
    path: "forgotpass",
    loadChildren: () =>
      import("./forgotpass/forgotpass.module").then(
        (m) => m.ForgotpassPageModule
      ),
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
