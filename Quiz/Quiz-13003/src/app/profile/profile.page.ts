import { UkmlistService } from './../ukmlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private ukmService: UkmlistService) { }

  myUkms = [];

  ngOnInit() {
    this.myUkms = this.ukmService.getMyUkm();
  }

  ionViewWillEnter() {
    this.myUkms = this.ukmService.getMyUkm();
  }

  onCancelMyUkm(id: string) {
    this.ukmService.removeFromMyUkm(id);
    this.myUkms = this.ukmService.getMyUkm();
  }

}
