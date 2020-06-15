import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any [] = [];

  loader: boolean;

  constructor(private activatedRouter: ActivatedRoute, private spotify: SpotifyService) { 
    this.loader = true;

    this.activatedRouter.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string){
    this.loader = true;
    
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;

      this.loader = false;
    });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

  ngOnInit(): void {
  }

}
