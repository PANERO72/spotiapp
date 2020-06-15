import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){

  const url = `https://api.spotify.com/v1/${query}`;

  const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDAfjFordTEdbjCfyR3l0y8zleB9lwtvfHLZP9_GoVtyHCzaMgHGWjFeTYqR2XLy_SQ9a8G9LDFvtA_MuI'
  });

    return this.http.get(url, {headers});
  }
  

  getNewReleases(){

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5jrMMV0oZ8ZSGK6dX8LQwzO9Rlaow1YjL5Wm26i0oh_KiIRUUvk65mLkAFV3ZBWEHMAU27OA58Lw_bl0'
    });
  
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers }).pipe(map(data => {
      return data['albums'].items;
    }));*/

    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  
  }

  getArtistas(termino: string){
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5jrMMV0oZ8ZSGK6dX8LQwzO9Rlaow1YjL5Wm26i0oh_KiIRUUvk65mLkAFV3ZBWEHMAU27OA58Lw_bl0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(map(data => {
      return data['artists'].items;
    }));*/

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`); 
    //.pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}
