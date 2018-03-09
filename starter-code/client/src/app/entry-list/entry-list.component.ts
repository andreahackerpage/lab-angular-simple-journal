import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  
journalList:Array<Object>
  constructor(private serviceJournal: JournalService) { }

  ngOnInit() {
    this.serviceJournal.getAllEntries()
    .subscribe(resultadoObservable=>this.journalList = resultadoObservable);
  }

}
