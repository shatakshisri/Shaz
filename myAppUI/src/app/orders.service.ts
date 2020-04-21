import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  public getOrders(username) {
    return this.http.get("http://localhost:2222/getAllOrders/" + username);
  }
}
