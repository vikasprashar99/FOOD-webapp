import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  showPasswordField = false;
  showCodeField = false;
  pbshowandhide = false;
  value = 70;

  resetPassword = new FormGroup({
    username: new FormControl(
      '', [Validators.required]
    ),
    newPassword: new FormControl(
      '', [Validators.required]
    ),
    codeField: new FormControl(
      '', [Validators.required]
    )
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getUsername(){
    this.pbshowandhide = true;

    var email = this.resetPassword.controls['username'].value;
    var newStr = email.replace(/@/g, '');
    var username = newStr.split(".").join("");
    Auth.forgotPassword(username)
    .then(data => {
      //console.log(data)
      this.pbshowandhide = false;

      this.showPasswordField = true;
      this.showCodeField = true;
    })
    .catch(err => {
      this.pbshowandhide = false;

      if(err.code==="InvalidParameterException"){
      alert("Password must have length greater than or equal to 8, one capital,one small and a special character");
    }else if(err.code==="CodeMismatchException"){
      alert(err.message);
    }else if(err.code==="UserNotFoundException"){
      alert(err.message);
    }});
  }

  resetPasswordMethod(){
    this.pbshowandhide = true;

    var email = this.resetPassword.controls['username'].value;
    var newStr = email.replace(/@/g, '');
    var username = newStr.split(".").join("");
    // console.log(typeof this.resetPassword.controls['codeField'].value);
    // Collect confirmation code and new password, then
Auth.forgotPasswordSubmit(
  username, 
  this.resetPassword.controls['codeField'].value.toString(), 
  this.resetPassword.controls['newPassword'].value, )
.then(data => {
  this.pbshowandhide = false;

  this.router.navigate(['/signin']);
})
.catch(err =>{ 
  this.pbshowandhide = false;

  if(err.code==="InvalidParameterException"){
    alert("Password must have length greater than or equal to 8, one capital,one small and a special character");
  }else if(err.code==="CodeMismatchException"){
    alert(err.message);
  }else if(err.code==="UserNotFoundException"){
    alert(err.message);
  }

});
  }

 






}
