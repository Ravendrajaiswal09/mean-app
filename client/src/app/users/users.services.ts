import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersServices{
    _url = 'http://localhost:3000/get_task'
    //_url = 'https://jsonplaceholder.typicode.com/users'

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<any>{
        return this._http.get(this._url)
        .map(res => res)
    }

    addUsers(user): Observable<any>{
        var headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        return this._http.post(this._url, user, {headers : headers})
        .map(res => res)
    }

    editUsers(id): Observable<any>{
        return this._http.get(this.getUserUrl(id))
        .map(res => res)
    }

    updateUser(user): Observable<any>{
        return this._http.put(this.getUserUrl(user._id), this.removeId(user))
        .map(res => res)
    }

    deleteUser(userId){
		return this._http.delete(this.getUserUrl(userId))
			.map(res => res);
	}

    private getUserUrl(userId){
        console.log(userId)
		return this._url + "/" + userId;
	}
    private removeId(user){
        delete user._id
		return user
	}
}