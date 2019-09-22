import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {LoggerService} from './logger.service'
import { Router } from '@angular/router';
import { GlobalcolorService } from './globalcolor.service';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  h={'color':'blue'};
  u={'color':'grey'};
  n={'color':'gray'};
  m={'color':'grey'};
  l={'color':'grey'};
dashboard:boolean;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private logger:LoggerService,private router:Router,private gservice:GlobalcolorService,private amplifyService: AmplifyService){
    this.gservice.setTheValue(0);
    this.dashboard=this.gservice.adminDash;

    iconRegistry.addSvgIcon(
      'message',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/message.svg'));
      iconRegistry.addSvgIcon(
        'home',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/home.svg'));
        iconRegistry.addSvgIcon(
          'notification',
          sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/notification.svg'));
          iconRegistry.addSvgIcon(
            'user',
            sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/user.svg'));
            iconRegistry.addSvgIcon(
              'logout',
              sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/logout.svg'));  
              //this.router.navigate(['/table']);

            }
  select(pp){
  console.log(pp);   
this.gservice.setTheValue(pp);
this.h=this.gservice.h;
this.m=this.gservice.m;
this.n=this.gservice.n;
this.u=this.gservice.u;
this.l=this.gservice.l;

if(pp===0){
   
  this.router.navigate(['dashboard/table']);

 }else if(pp===1){
  this.router.navigate(['dashboard/allusers']);

  
 }else if(pp===2){
  
  this.router.navigate(['dashboard/messagemanagement']);

 }else if(pp===3){
  
  this.router.navigate(['dashboard/addform']);

 }
 else if(pp===4){
  Auth.signOut({ global: true })
  .then(data => {
    console.log(data);
    this.router.navigate(['/']);
    this.gservice.setTheValue(4);


  })
  .catch(err => console.log(err));

 }
 

   }
   ngDoCheck()
   {
     //console.log("ngDoCheck");
   }
   ngAfterViewChecked(){
    this.h=this.gservice.h;
    this.m=this.gservice.m;
    this.n=this.gservice.n;
    this.u=this.gservice.u;
    this.l=this.gservice.l;

   }
}
