import { Component, OnInit } from '@angular/core';
import { UkmlistService } from '../ukmlist.service';
import { Ukm } from '../ukm.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ukm-detail',
  templateUrl: './ukm-detail.page.html',
  styleUrls: ['./ukm-detail.page.scss'],
})
export class UkmDetailPage implements OnInit {

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
