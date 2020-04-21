import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getOneProduct(productID) {
    return this.http.get("http://localhost:2222/getOneProductDetails/" + productID);
  }
  public addOrders(prod, username) {
    return this.http.post("http://localhost:2222/addOrders/" + username, prod);
  }
}
