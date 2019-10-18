import { Injectable } from '@angular/core';
import { Ukm } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmlistService {

  private _ukm: Ukm[] = [
    new Ukm(
      'u1',
      'Basket',
      'Basket adalah UKM Olahraga bermain bola yang dipantulkan ke lantai.',
      'https://www.umn.ac.id/wp-content/uploads/2016/02/basket-umn-universitas-multimedia-nusantara-universitas-terbaik-di-tangerang-indonesia.jpg'
    ),
    new Ukm(
      'u2',
      'Capoeira',
      'Capoeira adalah UKM seni bela diri yang menggunakan musik dari Brazil. Jadi brantem pake musik.',
      'https://www.umn.ac.id/wp-content/uploads/2016/02/capoera-umnuniversitas-multimedia-nusantara-universitas-terbaik-di-tangerang-indonesia.png'
    ),
    new Ukm(
      'u3',
      'Futsal',
      'Futsal adalah UKM Olahraga dimana satu bola direbut oleh banyak pemain dan digiring ke kandang lawan',
      'https://www.umn.ac.id/wp-content/uploads/2016/02/futsal-umnuniversitas-multimedia-nusantara-universitas-terbaik-di-tangerang-indonesia.png'
    ),
    new Ukm(
      'u4',
      'Taekwondo',
      'Taekwondo adalah UKM yang mengajarkan anda untuk berkelahi dan self defense. Tapi jangan ngajak ribut',
      'https://www.umn.ac.id/wp-content/uploads/2016/02/taekwondo-umn-universitas-multimedia-nusantara-universitas-terbaik-di-tangerang-indonesia.png'
    ),
    new Ukm(
      'u5',
      'Softball',
      'Softball adalah olahraga yang diadaptasi dari baseball, tetapi bolanya tidak seperti namanya',
      'https://www.umn.ac.id/wp-content/uploads/2016/02/softball-umn-universitas-multimedia-nusantara-universitas-terbaik-di-tangerang-indonesia.png'
    ),
  ];

  private myUkms: Ukm[] = [];

  get ukm() {
    return [...this._ukm];
  }

  getUkm(id: string) {
    return {...this._ukm.find(p => p.id === id)};
  }

  constructor() { }

  addToMyUkm(ukm: Ukm) {
    this.myUkms.push(ukm);
  }

  removeFromMyUkm(id: string) {
    this.myUkms = this.myUkms.filter(p => {
      return p.id !== id;
    })
  }

  getMyUkm() {
    return [...this.myUkms];
  }
}
