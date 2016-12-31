import { Injectable, EventEmitter } from '@angular/core';
import { Marker }                   from './marker.model'

let MARKERS: Marker[] = [
  {
    id: 11,
    lat: 48.9022867,
    lng: 2.3067607,
    label: 'A',
    draggable: false
  }
]

let FULL_MARKERS: Marker[] = [
  {
    id: 11,
    lat: 48.9022867,
    lng: 2.3067607,
    label: 'A',
    draggable: false
  }, {
    id: 12,
    lat: 48.9008163,
    lng: 2.2993072,
    label: 'B',
    draggable: false
  }, {
    id: 13,
    lat: 48.903045,
    lng: 2.303786,
    label: 'E',
    draggable: false
  }, {
    id: 14,
    lat: 48.903393,
    lng: 2.305892,
    label: 'C',
    draggable: false
  }, {
    id: 15,
    lat: 48.904900,
    lng: 2.308576,
    label: 'D',
    draggable: false
  }
]

let markersPromise = Promise.resolve(MARKERS);
let fullMarkersPromise = Promise.resolve(FULL_MARKERS);

@Injectable()
export class MarkerService {
  markerRequested: EventEmitter<any> = new EventEmitter();

  getMarkers(): Promise<Marker[]> {
    return markersPromise;
  }
  getMarker(id: number | string): Promise<Marker> {
    return fullMarkersPromise
      .then(markers => markers.find(marker => marker.id === +id));
  }
  loadMarker(id: number | String): void {
    console.log("id: " + id);
    this.markerRequested.emit({ "action": "4" });
  }
}
