import { Component } from '@angular/core';
import { WeightEntriesService } from './weight-entries-service';
import { TouchSequence } from 'selenium-webdriver';
import { IdentityService } from './identity.service';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public identitySvc: IdentityService) {}

  ngOnInit() {
  }
}
