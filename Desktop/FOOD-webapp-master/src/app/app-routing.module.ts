import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdmincomponentComponent } from "./admincomponent/admincomponent.component";
import { RequestsComponent } from "./requests/requests.component";
import { OrderDetailscomponentComponent } from "./order-detailscomponent/order-detailscomponent.component";

const routes: Routes = [
  { path: "", redirectTo: "adminpage", pathMatch: "full" },
  { path: "adminpage", component: AdmincomponentComponent },

  {
    path: "requests",
    component: RequestsComponent
  },
  {
    path: "orderdetails",
    component: OrderDetailscomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
