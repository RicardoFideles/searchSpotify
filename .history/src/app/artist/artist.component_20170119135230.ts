import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Artist} from '../model/Artist';
import { Album} from '../model/Album';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id:string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotifyService:SpotifyService, 
              private _route:ActivatedRoute) {

  }

  ngOnInit() {
  }

}
