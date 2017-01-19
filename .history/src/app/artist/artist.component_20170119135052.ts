import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Artist} from '../model/Artist';
import { Album} from '../model/Album';
import { SpotifyService} from '../services/spotify.component'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
