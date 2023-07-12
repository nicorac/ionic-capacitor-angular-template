import { Component, OnInit } from '@angular/core';
import version from '../../version';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  version = version;

  constructor() { }

  ngOnInit() {
  }

}
