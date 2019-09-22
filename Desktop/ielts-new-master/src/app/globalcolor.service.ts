import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalcolorService {
public h;
public u;
public n;
public m;
public l;
public adminDash:boolean;

  constructor() { }

  setTheAdmin(kk:boolean){
    this.adminDash = kk;
  }
  setTheValue(pp){
    if(pp===0){
      this.h={'color':'blue'};
      this.u={'color':'grey'};
      this.n={'color':'gray'};
      this.m={'color':'grey'};
      this.l={'color':'grey'};

     
     }else if(pp===1){
     
      this.h={'color':'grey'};
      this.u={'color':'blue'};
      this.n={'color':'gray'};
      this.m={'color':'grey'};
      this.l={'color':'grey'};

     }else if(pp===2){
      this.h={'color':'grey'};
      this.u={'color':'grey'};
      this.n={'color':'gray'};
      this.m={'color':'blue'};
      this.l={'color':'grey'};

     
     }else if(pp===3){
      this.h={'color':'grey'};
      this.u={'color':'grey'};
      this.n={'color':'blue'};
      this.m={'color':'grey'};
      this.l={'color':'grey'};
      }else if(pp===4){
      this.h={'color':'grey'};
      this.u={'color':'grey'};
      this.n={'color':'grey'};
      this.m={'color':'grey'};
      this.l={'color':'blue'};
              }
}

}
