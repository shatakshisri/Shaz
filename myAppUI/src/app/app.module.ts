import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import { MatSidenavModule, MatTabsModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgMatSearchBarModule } from "ng-mat-search-bar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {DashboardService} from "./dashboard.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {LoginService} from "./login.service";
import { LoginComponent } from "./login/login.component";
import { OrdersComponent } from "./orders/orders.component";
import {ProductService} from "./product.service";
import { VeiwComponent } from "./veiw/veiw.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VeiwComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatSidenavModule,
    NgMatSearchBarModule,

  ],
  providers: [LoginService, ProductService, DashboardService],

})
export class AppModule { }
