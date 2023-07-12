import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  /**
   * Property 1
   */
  public prop1: boolean = false;

  /**
   * Property 2
   */
  public prop2?: string = '';

  constructor() { }

  /**
   * Load app settings from storage
   */
  async initialize() {
    const { value } = await Preferences.get({ key: 'settings' });
    if (value) {
      try {
        const storedValues = JSON.parse(value);
        Object.getOwnPropertyNames(this).forEach(pn => {
          if (storedValues.hasOwnProperty(pn)) {
            (<any>this)[pn] = storedValues[pn];
          }
        });
      }
      catch (error) { }
    }

  }

  /**
   * Save app settings to storage
   */
  async save() {
    return Preferences.set({ key: 'settings', value: JSON.stringify(this) });
  }

}
