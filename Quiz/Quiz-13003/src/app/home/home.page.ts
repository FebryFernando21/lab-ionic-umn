import { Component } from '@angular/core';
import { UkmlistService } from '../ukmlist.service';
import { Ukm } from '../ukm.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedUkm = [];
  loadedUKM: Ukm[];

  constructor(
    private appService: UkmlistService,
    private alertController: AlertController
  ){}

  ngOnInit() {
    this.loadedUKM = this.appService.ukm;
  }

  async presentAlert(ukm: Ukm) {
    const alert = await this.alertController.create({
      header: "Ente Mau Join?",
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Skuy',
          handler: () => {
           this.appService.addToMyUkm(ukm)
          }
        },
      ]
    });
    await alert.present();
  }
}
