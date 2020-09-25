import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluePrintAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverAdded.emit({
      serverName: 'Server Name : ' + this.newServerName,
      serverContent: 'Server Content : ' + this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.bluePrintAdded.emit({
      serverName: 'BP Server Name : ' + this.newServerName,
      serverContent: 'BP Server Content : ' + this.newServerContent,
    });
  }
}
