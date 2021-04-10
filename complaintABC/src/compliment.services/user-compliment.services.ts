import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ComplaimentViewModel } from "src/app/models/complaiment";

@Injectable()

export class UserComplimentSevice{
    constructor(private httpClient: HttpClient){}


    public createCompliment(body:ComplaimentViewModel)
    {
        return this.httpClient.post<ComplaimentViewModel>("http://localhost:3000/Complaimnt", body)

    }

    public getAllCompliment():Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.get<Array<ComplaimentViewModel>>("http://localhost:3000/Complaimnt",{ headers: httpHeaders });

    }
    

    public updateCompliment(id:number,body:ComplaimentViewModel):Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.put<ComplaimentViewModel>("http://localhost:3000/Complaimnt/"+id,body,{ headers: httpHeaders });

    }

    public getComplimentsByUserId(userID: number):Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.get<Array<ComplaimentViewModel>>("http://localhost:3000/Complaimnt?userID="+userID,{ headers: httpHeaders });

    }
}