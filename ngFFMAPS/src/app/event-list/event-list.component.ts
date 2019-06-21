import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../classfolder/event';
import { EventService } from '../event.service';
import { Location } from '../classfolder/location';
import { Contact } from '../classfolder/contact';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {
  public newEvent: Event;
  public events: Array<Event> = new Array<Event>();
  @Input() public initString : String = "";

  constructor(private eventService: EventService, ) { }

  ngOnInit() {
    this.newEvent = new Event();
    this.newEvent.location = new Location();
    this.newEvent.contact = new Contact();
    if(this.initString.indexOf("ccept") > 0 ){
      this.eventService.getEvents().subscribe(
        (events) => {
          console.log(events);
          this.events = events;
        }
      );
    }
    else if(this.initString.indexOf("ending") > 0 ){
      this.eventService.getPendingEvents().subscribe(
        (events) => {
          console.log(events);
          this.events = events;
        }
      );
    }
  }
}
