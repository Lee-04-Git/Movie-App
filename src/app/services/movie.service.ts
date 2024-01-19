import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>
    (`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}
    `);
  }

  getMovieDetails(id: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(
    `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}`
    )
  }
}
