import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { AddformComponent } from "./addform/addform.component";
import { UsersComponent } from "./users/users.component";
import { AllusersComponent } from "./allusers/allusers.component";
import { MessagemanagementComponent } from "./messagemanagement/messagemanagement.component";
import { SigninComponent } from "./signin/signin.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth.guard";
import { EnterPriseDashboardComponent } from "./enter-prise-dashboard/enter-prise-dashboard.component";
import { NewpasswordrequiredComponent } from "./newpasswordrequired/newpasswordrequired.component";
import { MainComponent } from "./main/main.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component"; 
import { UsertableComponent } from './enterprisemodule/usertable/usertable.component';
import { MessageComponent } from './enterprisemodule/message/message.component';
import { EnterprisenotificationComponent } from './enterprisemodule/enterprisenotification/enterprisenotification.component';

const routes: Routes = [
  { path: "", redirectTo: "/main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "forgot", component: ForgotPasswordComponent },
  { path: "signin", component: SigninComponent },
  {
    path: "EnterpriseDashboard",
    component: EnterPriseDashboardComponent,
    children: [
      {
        path: "usertable",
        component: UsertableComponent ,
        canActivate: [AuthGuard]
      },
      {
        path: "message",
        component: MessageComponent ,
        canActivate: [AuthGuard]
      },
      {
        path: "notification",
        component: EnterprisenotificationComponent ,
        canActivate: [AuthGuard]
      },

  ],
  canActivate: [AuthGuard]
  },
  {
    path: "dashboard",
    component: AppComponent,
    children: [
      {
        path: "table",
        component: TableComponent,
        children: [
          {
            path: "users/:id",
            component: UsersComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: "allusers",
        component: AllusersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "addform",
        component: AddformComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "messagemanagement",
        component: MessagemanagementComponent,
        canActivate: [AuthGuard]
      },
      
    ],
    canActivate: [AuthGuard]
  },
  { path: "changePassword", component: NewpasswordrequiredComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
