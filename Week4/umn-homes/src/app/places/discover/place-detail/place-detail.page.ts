import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Route, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCrtl.pop();
  }

}
