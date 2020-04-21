import { getLocaleDayPeriods } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DashboardService } from "../dashboard.service";
@Component({
  selector: "app-dashboard",
  styleUrls: ["./dashboard.component.css"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

public username;
public products: any;
public name: any;
public notifyPid: any;
public orderedPid: any;
public err: any;
public successmgs: any;
  constructor(private actroute: ActivatedRoute, private dash: DashboardService,
              private router: Router, private cdr: ChangeDetectorRef) { }
// getting the username
  public ngOnInit() {
    this.username = this.actroute.snapshot.paramMap.get("username");
    this.fetchAllProd();
  }
  public ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
// getting all products
  public fetchAllProd() {
    this.dash.view().subscribe(
      (success) => {this.products = success; },
    );
  }
// navigating to view componet
public viewProd(productId) {
  this.router.navigate(["/veiw/" + productId + "/" + this.username]);
}
// function to add the product to the data base
  public buyProd(prod) {
    this.notifyPid = "";
    this.orderedPid = prod._id;
    this.dash.addOrders(prod, this.username).subscribe(
      (success) => {this.successmgs = success; },
    );
  }
// function to get notification
  public notify(prod) {
    this.notifyPid = prod._id;
    this.orderedPid = null;
  }
public getprods(value) {
this.dash.getProdCat(value).subscribe(
(data) => {this.products = data; },
(error) => {this.err = error; },
);
}
// function for search bar
public searchProd() {
  this.dash.view().subscribe(
    (data) => {
      this.products = data.filter((ele) => {
        return ele.pName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    },
  );
}
// function for logout
public logout() {
  localStorage.clear();
  this.username = "";
  this.router.navigate(["/" + this.username]);
}
// navigates to orders
public orders() {
  this.router.navigate(["/orders/" + this.username]);
}
}
