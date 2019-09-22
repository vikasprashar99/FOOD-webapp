import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EglobalService {
  public enterpriseID;
  public emailid;
public eh;
public eu;
public en;
public em;
public el;
public adminDash:boolean;

  constructor() { }

  setTheAdmin(kk:boolean){
    this.adminDash = kk;
  }
  setTheValue(pp){
    if(pp===0){
      this.eh={'color':'blue'};
      // this.eu={'color':'grey'};
      this.en={'color':'gray'};
      this.em={'color':'grey'};
      this.el={'color':'grey'};

     
     }else if(pp===1){
      this.eh={'color':'grey'};
      // this.eu={'color':'grey'};
      this.en={'color':'gray'};
      this.em={'color':'blue'};
      this.el={'color':'grey'};

     
     }else if(pp===2){
      this.eh={'color':'grey'};
      // this.eu={'color':'grey'};
      this.en={'color':'blue'};
      this.em={'color':'grey'};
      this.el={'color':'grey'};
      }else if(pp===3){
      this.eh={'color':'grey'};
      // this.eu={'color':'grey'};
      this.en={'color':'grey'};
      this.em={'color':'grey'};
      this.el={'color':'blue'};
              }
}

}
