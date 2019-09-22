import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { GlobalcolorService } from '../globalcolor.service';
 import { EnterpriseService } from '../enterprise.service';
import {FormControl,FormGroup,  FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {Auth} from 'aws-amplify';
import { EglobalService } from '../services/eglobal.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    newPasswordField = false;
    User;
    signedIn: boolean;
    user: any;
    greeting: string;
    value = 70;
    pbshowandhide = false;
    kk={'background-color':'#F9D71C','color':'white'};

    signindetails  = this.fb.group({
      E_email:  ['',Validators.required],
      E_password: ['',Validators.required],
      newPassword: ['', Validators.required]
     })
    constructor(private eglobal: EglobalService, private fb: FormBuilder, private amplifyService: AmplifyService,private router:Router,private gservice:GlobalcolorService,private enterprise: EnterpriseService ) {
      this.gservice.setTheValue(4); 
      this.amplifyService.authStateChange$
            .subscribe(authState => {
                this.signedIn = authState.state === 'signedIn';
             // var ss1 = authState.user.signInUserSession.idToken.payload['email'];
               // console.log(ss1);

                if (!authState.user) {
                    this.user = null;
                } else {
                  var ss = authState.user.signInUserSession.idToken.payload['cognito:groups'];
                   console.log(ss);
                  if(ss[0]==='admin'){
                    this.router.navigate(['/dashboard/table']);
                    this.gservice.setTheAdmin(true);

                  }else if(ss[0]==='enterprise'){
                    this.eglobal.emailid = authState.user.signInUserSession.idToken.payload['email'];
                    this.router.navigate(['/EnterpriseDashboard/usertable']);
                    //this.gservice.setTheAdmin(false);


                  }else{
                    alert("Not Authorished to access")
                  }
                  

                }
        });


     }
     login(){
       this.pbshowandhide = true;
       console.log(this.signindetails.controls['E_email'].value);
       console.log(this.signindetails);
     var password = this.signindetails.controls['E_password'].value ;

    var email = this.signindetails.controls['E_email'].value;
    this.eglobal.emailid = email;
          var newStr = email.replace(/@/g, '');
          var username = newStr.split(".").join("");

      Auth.signIn({
        username ,  
        password, // Optional, the password
     }).then(user => {
       this.pbshowandhide = false;
       console.log("Reaching this point");
       console.log(user.challengeName);

        if(user.challengeName === "NEW_PASSWORD_REQUIRED"){
          this.newPasswordField = true;
          this.User = user;

        }else{
          //console.log(user);
          if(user.signInUserSession.idToken.payload['cognito:groups'].includes('enterprise')){
            this.router.navigate(['/EnterpriseDashboard']);
          } else if (user.signInUserSession.idToken.payload['cognito:groups'].includes('admin'))  {
            this.router.navigate(['/dashboard/table']);
          }
          //this.router.navigate(['/dashboard/table']);

        }

    })
    .catch(err => {
      this.pbshowandhide = false;

      if(err.code ==="UserNotFoundException"){
        alert(err.message);
      }else if (err.code ==="NotAuthorizedException"){
        alert(err.message);

      }else if (err){
        alert("Please provide username and password");
      }
    
    
    });    
   }
  ngOnInit() {
  }

  forgot(){
    this.router.navigate(['/forgot']);
  }

  changePasswordMethod(){
    Auth.completeNewPassword(
      this.User,               // the Cognito User Object
      this.signindetails.controls['newPassword'].value,       // the new password
      // OPTIONAL, the required attributes
      {}
  ).then(user => {
      // at this time the user is logged in if no MFA required
      console.log(user);
      this.newPasswordField = false;
  }).catch(e => {
    console.log(e);
  });
  }

}

 