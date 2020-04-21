import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import { OrdersComponent } from "./orders/orders.component";
import {VeiwComponent} from "./veiw/veiw.component";

const routes: Routes = [
 {path: "login", component: LoginComponent},
 {path: "dashboard/:username", component: DashboardComponent},
 {path: "veiw/:productId/:username", component: VeiwComponent},
 {path: "orders/:username", component: OrdersComponent},
 {path: "**", component: LoginComponent},
 {path: "", redirectTo: "login", pathMatch: "full"},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
