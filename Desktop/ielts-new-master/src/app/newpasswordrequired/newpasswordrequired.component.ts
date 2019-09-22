import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpasswordrequired',
  templateUrl: './newpasswordrequired.component.html',
  styleUrls: ['./newpasswordrequired.component.css']
})
export class NewpasswordrequiredComponent implements OnInit {
  value = 70;
  pbshowandhide = false;
  changePassword = new FormGroup({
    username: new FormControl(
      '', [Validators.required]
    ),
    newPassword: new FormControl(
      '', [Validators.required]
    ),
  });

  constructor() { }

  ngOnInit() {
  }

  changePasswordMethod(){
    this.pbshowandhide = true;

    Auth.completeNewPassword(
      this.changePassword.controls['username'].value,               // the Cognito User Object
      this.changePassword.controls['newPassword'].value,       // the new password
      // OPTIONAL, the required attributes
      {}
  ).then(user => {  
    this.pbshowandhide = false;

      // at this time the user is logged in if no MFA required
      console.log(user);
  }).catch(e => {
    this.pbshowandhide = false;

    if(e.code==="InvalidParameterException"){
      alert("Password must have length greater than or equal to 8, one capital,one small and a special character");
    }else if(e.code==="CodeMismatchException"){
      alert(e.message);
    }else if(e.code==="UserNotFoundException"){
      alert(e.message);
    }
  });
  }

 



}
