import { Component, OnInit, ViewChild } from '@angular/core';
import { EventTodayService } from 'src/app/service/event-today.service';
import { ResponseData } from 'src/app/model/response';
import { SubSink } from 'subsink';
import { EventData } from 'src/app/model/event';
import { MatPaginator } from '@angular/material/paginator';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator
  private subscriptions = new SubSink
  responseData!: ResponseData | undefined
  events!: Observable<any>
  dataSource!: MatTableDataSource<EventData> | undefined

  constructor(private eventService: EventTodayService) { }



  ngOnInit(): void {
    this.getAllEvent()
  }

  private getAllEvent() {
    this.subscriptions.add(
      this.eventService.getAllEvent().subscribe(
        result => {
          this.responseData = result
          this.dataSource = new MatTableDataSource(result.data.Events)
          this.dataSource.paginator = this.paginator
          this.events = this.dataSource.connect()
          console.log(this.responseData)
          console.log(this.events)
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
