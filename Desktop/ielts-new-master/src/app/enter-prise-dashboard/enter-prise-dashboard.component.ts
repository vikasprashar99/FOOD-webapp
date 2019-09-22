
 import {MatIconRegistry} from '@angular/material/icon';
 import { DomSanitizer } from '@angular/platform-browser';
  import { Router } from '@angular/router';
  import { AmplifyService } from 'aws-amplify-angular';
 import { Auth } from 'aws-amplify';  
import { LoggerService } from '../logger.service';
import { GlobalcolorService } from '../globalcolor.service';
import { Component } from '@angular/core';
import { EglobalService } from '../services/eglobal.service';
@Component({
  selector: 'app-enter-prise-dashboard',
  templateUrl: './enter-prise-dashboard.component.html',
  styleUrls: ['./enter-prise-dashboard.component.css']
})
export class EnterPriseDashboardComponent {

 title = 'app';
  eh={'color':'blue'};
  eu={'color':'grey'};
  en={'color':'gray'};
  em={'color':'grey'};
  el={'color':'grey'};
dashboard:boolean;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private logger:LoggerService,private router:Router,private egservice:EglobalService,private amplifyService: AmplifyService){
    this.egservice.setTheValue(0);
  //  this.dashboard=this.gservice.adminDash;

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
              this.router.navigate(['EnterpriseDashboard/usertable']);

            }
  select(pp){
  console.log(pp);   
this.egservice.setTheValue(pp);
this.eh=this.egservice.eh;
this.em=this.egservice.em;
this.en=this.egservice.en;
this.eu=this.egservice.eu;
this.el=this.egservice.el;

if(pp===0){
   
  this.router.navigate(['EnterpriseDashboard/usertable']);

 }else if(pp===1){
   console.log("The value of p " + pp);
  this.router.navigate(['EnterpriseDashboard/message']);

  
 }else if(pp===2){
  
  this.router.navigate(['EnterpriseDashboard/notification']);

 }else if(pp===3){
  Auth.signOut({ global: true })
  .then(data => {
    console.log(data);
    this.router.navigate(['/']);


  })
  .catch(err => console.log(err));

 }
 

   }
   ngDoCheck()
   {
     //console.log("ngDoCheck");
   }
   ngAfterViewChecked(){
    this.eh=this.egservice.eh;
    this.em=this.egservice.em;
    this.en=this.egservice.en;
    this.eu=this.egservice.eu;
    this.el=this.egservice.el;

   }
}
