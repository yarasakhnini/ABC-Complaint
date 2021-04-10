import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ComplaimentViewModel } from "src/app/models/complaiment";
import { LoginViewModel } from "src/app/models/login";
import { RegesterationViewModel } from "src/app/models/Regesteration";

@Injectable()

export class UserRegeterationSevice{
    constructor(private httpClient: HttpClient){}


    public createUserAccount(body:RegesterationViewModel)
    {
        return this.httpClient.post<RegesterationViewModel>("http://localhost:3000/users", body)

    }

    
    public createAdminAccount(body:RegesterationViewModel)
    {
        return this.httpClient.post<RegesterationViewModel>("http://localhost:3000/users", body)

    }



    public getAllUsersAccounts():Observable<any> 
    {

        return this.httpClient.get<Array<RegesterationViewModel>>("http://localhost:3000/users")
    }


    public Login(body:LoginViewModel)
    {
        return this.httpClient.post<LoginViewModel>("http://localhost:3000/Complaimnt", body)

    }
}