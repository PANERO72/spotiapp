import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  loader: boolean;
  
  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    console.log(termino);
    
    this.loader = true;
    
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loader = false;
    });
  }

}
