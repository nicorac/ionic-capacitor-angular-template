import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    protected settings: SettingsService,
  ) { }

  ngOnInit() {
  }

  async ionViewWillLeave() {
    await this.settings.save();
  }

}
