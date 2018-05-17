import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'track-data',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  @Input() trackData:any[];
  @Output() trackSend=new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {

  }

  sendingTrack(){
    this.trackSend.emit(this.trackData);
  }
  

}
