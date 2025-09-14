import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserProfile {
  id?: number;
  name: string;
  email: string;
  phone: string;
  image?: string;
  facebook?: string;
  linkedin?: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users/1'; // Replace with your real API

    constructor(private http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.apiUrl);
  }

  updateUserProfile(profile: UserProfile): Observable<any> {
    return this.http.put(this.apiUrl, profile);
  }
}
