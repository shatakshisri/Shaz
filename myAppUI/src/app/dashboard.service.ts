import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  public view(): Observable<any> {
    return this.http.get("http://localhost:2222/getAllProducts") as Observable<any>;
  }
public getProdCat(catName) {
  return this.http.get("http://localhost:2222/getProductByCategory/" + catName);
}
public addOrders(prod, username) {
  return this.http.post("http://localhost:2222/addOrders/" + username, prod);
}
}
