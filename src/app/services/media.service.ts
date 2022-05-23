import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";
import { MediaListResponse } from "@app-models/media.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MediaService {
  constructor(private http: HttpClient) {}

  public getMovieList(query: string): Observable<MediaListResponse> {
    const url = `${environment.URL}/?s=${query}&apikey=${environment.OMDB_APIKEY}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        console.log('response', response);
        response.Response = response.Response === "True";
        response['error'] = !response['Response']
        response['data'] = {
          results: response.Search,
          totalResults: parseInt(response.totalResults),
        }
        delete response['Search'];
        delete response['totalResults'];

        response.data.results?.map((element: any) => {
          element['poster'] = element['Poster'];
          element['title'] = element['Title'];
          element['type'] = element['Type'];
          element['year'] = element['Year'];
          element['id'] = element['imdbID'];
          delete element['Poster'];
          delete element['Title'];
          delete element['Type'];
          delete element['Year'];
          delete element['imdbID'];
          return Object.assign(element, { selected: false });
        });
        return response;
      })
    );
  }
}
