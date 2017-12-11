import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.molecule.html',
  styleUrls: ['./map.molecule.css']
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  ngOnInit(): void {
    this.map = L.map('map').setView([52.1, 5.1], 7);
    this.baseLayer.addTo(this.map);
  }
}
