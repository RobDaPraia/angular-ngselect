import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng-select';

  people$: Observable<Person[]>;
  // selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  selectedPersonId: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.people$ = this.dataService.getPeople();

    setTimeout(() => {
      this.selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
    }, 0);
  }

  ngAfterViewInit(): void {

  }


}
