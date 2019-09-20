import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, IonItemSliding } from '@ionic/angular';
import { Booking } from './create-booking/booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancel(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }

}
