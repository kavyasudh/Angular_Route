import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<Comments[]> {
    return this.
    httpClient.get<Comments[]>('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
