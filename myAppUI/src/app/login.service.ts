import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {Credentials } from "./login";

@Injectable({
  providedIn: "root",
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Credentials[]> {
    return this.http.get<Credentials[]>("http://localhost:2222/getAllUsers");
    // .map((res:Response)=>res.json());
  }

}
