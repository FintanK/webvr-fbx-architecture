import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable( {
  providedIn: 'root'
} )
export class PostsService {

  private environment: any;

  constructor(private http: HttpClient, @Inject( 'env' ) environment) {
    this.environment = environment;
  }

  getAllPosts(): Observable<any> {
    return this.http.get( this.environment.endpoints.restAPIService + 'posts' );
  }

  getPostById(id: number): Observable<any> {
    return this.http.get( this.environment.endpoints.restAPIService + 'posts/' + id );
  }

  createPost(createPostRequest: any): Observable<any> {
    return this.http.post( this.environment.endpoints.restAPIService + 'posts', createPostRequest );
  }

  updatePost(id: number, updatePostRequest: any): Observable<any> {
    return this.http.patch( this.environment.endpoints.restAPIService + 'posts/' + id, updatePostRequest );
  }

  deletePostById(id: number): Observable<any> {
    return this.http.delete( this.environment.endpoints.restAPIService + 'posts/' + id );
  }


}
