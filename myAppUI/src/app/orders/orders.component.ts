import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OrdersService } from "../orders.service";

@Component({
  selector: "app-orders",
  styleUrls: ["./orders.component.css"],
  templateUrl: "./orders.component.html",
})
export class OrdersComponent implements OnInit {
  public username: any;
  public orders: any;
  constructor(private actroute: ActivatedRoute, private router: Router, private dash: OrdersService) { }
  // connection to order service
  public ngOnInit() {
    this.username = this.actroute.snapshot.paramMap.get("username");
    this.dash.getOrders(this.username).subscribe(
      (success: any) => {
        if (success) {
          this.orders = success.orders;
        }

      },
    );
  }
  // to go back to dashboard
  public goBack() {
    this.router.navigate(["/dashboard/" + this.username]);
  }
  // navigating to view componet
public viewProd(productId) {
  this.router.navigate(["/veiw/" + productId + "/" + this.username]);
}
}
