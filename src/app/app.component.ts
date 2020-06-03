import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-select';

  people$: Observable<Person[]>;
  selectedPersonId;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.people$ = this.dataService.getPeople();
    this.selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  }



}
