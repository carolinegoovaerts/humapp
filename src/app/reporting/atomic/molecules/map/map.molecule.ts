import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.molecule.html',
  styleUrls: ['./map.molecule.css']
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });

  ngOnInit(): void {
    this.map = L.map('map').setView([52.1, 5.1], 7);
    this.baseLayer.addTo(this.map);
  }
}
