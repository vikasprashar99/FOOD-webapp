import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnterpriseModel } from "../app/model";
import { messageModel } from "./message";
import { NotificationModel } from "./notification-model";

@Injectable({
  providedIn: "root"
})
export class EnterpriseService {
  eid: any;

  //Enterprise API
  messagesAPIURL =
    "https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/dev/getMessage";
  postmessageAPIURL =
    "https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/dev/create_message";

  private baseurlprod: string =
    "https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/prod/";

  private baseurl: string =
    "https://x0nn0tpbnh.execute-api.ap-south-1.amazonaws.com/dev/";
  private apiUrl = this.baseurl + "getEnterprise";
  private apiUrlprod = this.baseurlprod + "getEnterprise";
  private sendnotificationAPI = this.baseurl + "sendMessage";
  private sendnotificationtopicAPI = this.baseurl + "sendMessagetopic";
  private DeleteEnterPrise = this.baseurl + "delete_enterprise";
  private UpdateEnterPrise = this.baseurl + "update_enterprise";
  private CreateEnterPrise = this.baseurl + "create_enterprise";
  private findEnterpriseId = this.baseurl + "checkEnterpriseID";
  private getAllUserAPI = this.baseurl + "getAllUser";
  private getAllUserAPIprod = this.baseurlprod + "getmyMessage";
  private deleteanImage = "this.baseurl" + "delete";
  private usersUnderEnterpriseID = this.baseurl + "usersUnderEnterpriseID";
  private getEnterpriseIDS = this.baseurl + "getEnterpriseIDS";
  private update_user_wfk = this.baseurl + "update_user_wfk";
  private checkEnterpriseID = this.baseurl + "checkEnterPriseId/?E_id=";
  // Users API
  private createAdminUser = this.baseurl + "createAdminUser";
  private deleteAdminUser = this.baseurl + "deleteAdminUser";
  private deleteUserId = this.baseurl + "delete_user";
  private update_user = this.baseurl + "update_user";
  constructor(private http: HttpClient) {}

  sendNotificationAPICall(
    databody: NotificationModel
  ): Observable<NotificationModel> {
    return this.http.post<NotificationModel>(
      this.sendnotificationAPI,
      databody
    );
  }

  sendNotificationAPICalltopic(
    databody: NotificationModel
  ): Observable<NotificationModel> {
    return this.http.post<NotificationModel>(
      this.sendnotificationtopicAPI,
      databody
    );
  }
  postMessageAPICall(dataBody: messageModel): Observable<messageModel> {
    return this.http.post<messageModel>(this.postmessageAPIURL, dataBody);
  }

  getMessageAPICall(): Observable<any> {
    return this.http.get<any>(this.messagesAPIURL);
  }
  getEnterpriseAPICall(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getEnterpriseAPICallprod(ss): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: ss
      })
    };
    return this.http.get<any>(this.apiUrlprod, httpOptions);
  }
  deleteEnterpriseAPICall(dataBody): Observable<any> {
    return this.http.post<any>(this.DeleteEnterPrise, dataBody);
  }
  updateEnterpriseAPICall(dataBody): Observable<any> {
    console.log(dataBody);
    return this.http.post<any>(this.UpdateEnterPrise, dataBody);
  }
  createEnterpriseAPICall(dataBody): Observable<any> {
    console.log(dataBody);
    return this.http.post<any>(this.CreateEnterPrise, dataBody);
  }
  findEnterpriseIDAPICall(dataBody): Observable<any> {
    console.log(dataBody);
    return this.http.post<any>(this.findEnterpriseId, dataBody);
  }
  getAllUserAPICall(): Observable<any> {
    return this.http.get<any>(this.getAllUserAPI);
  }
  getusersUnderEnterpriseIDAPICall(dataBody): Observable<any> {
    return this.http.post<any>(this.usersUnderEnterpriseID, dataBody);
  }
  deleteUserIdIDAPICall(dataBody): Observable<any> {
    return this.http.post<any>(this.deleteUserId, dataBody);
  }

  getEnterpriseIDSAPICall(): Observable<any> {
    return this.http.get<any>(this.getEnterpriseIDS);
  }

  updateUpdate_userIDAPICall(dataBody): Observable<any> {
    return this.http.post<any>(this.update_user, dataBody);
  }
  //update user without foreign key
  updateUpdate_userIDwfkAPICall(dataBody): Observable<any> {
    return this.http.post<any>(this.update_user_wfk, dataBody);
  }

  getAllUserAPICall1(abc): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: abc
      })
    };
    return this.http.get<any>(this.getAllUserAPI, httpOptions);
  }

  deleteAnImage(dataBody): Observable<any> {
    return this.http.post<any>(this.deleteanImage, dataBody);
  }
  //check EnterPrise ID
  checkEnterPriseIDM(id: string): Observable<any> {
    return this.http.get<any>(this.checkEnterpriseID + id);
  }

  createAdminUserM(dataBody): Observable<any> {
    console.log("Coming to this oint");
    return this.http.post<any>(this.createAdminUser, dataBody);
  }
  deleteAdminUserM(dataBody): Observable<any> {
    console.log("Coming to this oint");
    return this.http.post<any>(this.deleteAdminUser, dataBody);
  }
}
