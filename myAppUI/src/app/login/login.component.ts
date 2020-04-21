import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Credentials} from "../login";
import {LoginService} from "../login.service";
@Component({
  selector: "app-login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html",
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
public loginData: Credentials[];
public sendData: any = false;
public errorMessage: any;
public user: any;

constructor(private fb: FormBuilder, private loginserv: LoginService, private router: Router) { }
// creating validations for username and password
  public ngOnInit() {
    this.loginForm = this.fb.group({
      pwd: ["", [Validators.required]],
      uName: ["", [Validators.required, ValidateUser]],
    });
  }
public dataToDash() {
  this.sendData = true;
  this.user = this.loginForm.value.uName;
}
// login function to validate it
public login() {
if (this.loginForm.valid) {
  this.loginserv.getData().subscribe(
    (success) => {
      if (success[0].username === this.loginForm.value.uName && success[0].password === this.loginForm.value.pwd) {
        this.sendData = true;
        this.router.navigate(["/dashboard/" + this.loginForm.value.uName]);
        this.user = this.loginForm.value.uName;
      } else {
        this.errorMessage = "You have entered incorrect Password!";
      }

    },
  );

   }
  }

}
// custom validator
const ValidateUser = (input: FormControl) => {
  const inputVal = input.value;
  return inputVal.match(/Shaz97$/) ? null : {
    emailIdError: {message: "Enter a valid username"},
  };

  };
