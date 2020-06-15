import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevosLanzamientos: any [] = [];

  loader: boolean;

  error: boolean;

  mensajeError: string;

  constructor(private spotify: SpotifyService) { 
   this.loader = true;
   this.error = false;
   
    this.spotify.getNewReleases().subscribe((data: any) => {
     console.log(data);
     this.nuevosLanzamientos = data;
     this.loader = false;
   },(errorSpotify) => {
     this.loader = false;
     this.error = true;
     this.mensajeError = errorSpotify.error.error.message;
     
   });
  }

  ngOnInit(): void {
  }

}
