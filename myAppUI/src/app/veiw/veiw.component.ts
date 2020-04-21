import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: "app-veiw",
  styleUrls: ["./veiw.component.css"],
  templateUrl: "./veiw.component.html",

})
export class VeiwComponent implements OnInit {
  public productLoaded: boolean;
  public productId: any;
  public prodData: any;
  public username: any;
  public actualPrice: any;
  public discountPrice: any;
  public notifyPid: any;
  public orderedPid: any;
 public successmgs: any;
  constructor(private actRoute: ActivatedRoute, private prodServ: ProductService, private router: Router) { }
// getting details of user
  public ngOnInit() {
    this.productLoaded = false;
    this.productId = this.actRoute.snapshot.paramMap.get("productId");
    this.username = this.actRoute.snapshot.paramMap.get("username");
    this.prodServ.getOneProduct(this.productId).subscribe(
      (data) => {
        this.prodData = data;
        this.productLoaded = true;
        this.actualPrice = this.prodData.price;
        this.discountPrice = this.actualPrice - (this.actualPrice * this.prodData.pSeller.pDiscount);
      },
    );

  }
// for buying product and getting data from server
  public buyProd(prod) {
    this.notifyPid = "";
    this.orderedPid = prod._id;
    this.prodServ.addOrders(prod, this.username).subscribe(
      (success) => {this.successmgs = success; },
    );
  }
// for notification
  public notify(prod) {
    this.notifyPid = prod._id;
    this.orderedPid = null;
  }
// to go back to the dashboard
  public goBack() {
    this.router.navigate(["/dashboard/" + this.username]);
  }

}
