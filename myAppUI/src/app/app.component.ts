import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public title = "ShopUI";

  constructor(private router: Router) { }

  public click() {
    this.router.navigate(["/login"]);
  }
}
