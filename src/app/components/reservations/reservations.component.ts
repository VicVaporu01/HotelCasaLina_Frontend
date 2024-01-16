import {Component, inject} from '@angular/core';
import {CabinService} from "../../services/cabin.service";
import {Cabin} from "../../interfaces/cabin";
import {catchError, of} from "rxjs";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {
  _cabinService: CabinService = inject(CabinService);
  arrCabins: Cabin[] = [
    // {
    //   name: 'Cabaña Acogedora',
    //   maxCount: 4,
    //   rentPerNight: 150,
    //   image: [
    //     {url: 'https://ejemplo.com/cabana1.jpg'},
    //     {url: 'https://ejemplo.com/cabana2.jpg'}
    //   ],
    //   currentBookings: [
    //     {startDate: new Date('2023-01-15'), endDate: new Date('2023-01-20')},
    //     {startDate: new Date('2023-02-01'), endDate: new Date('2023-02-10')}
    //   ],
    //   cabinType: 'Bosque',
    //   cabinDescription: 'Una cabaña acogedora en medio del bosque.',
    //   timestamp: new Date()
    // },
    // {
    //   name: 'Cabaña de Montaña',
    //   maxCount: 6,
    //   rentPerNight: 180,
    //   image: [
    //     {url: 'https://ejemplo.com/montana1.jpg'},
    //     {url: 'https://ejemplo.com/montana2.jpg'},
    //     {url: 'https://ejemplo.com/montana3.jpg'}
    //   ],
    //   currentBookings: [
    //     {startDate: new Date('2023-03-05'), endDate: new Date('2023-03-12')},
    //     {startDate: new Date('2023-04-01'), endDate: new Date('2023-04-15')}
    //   ],
    //   cabinType: 'Montaña',
    //   cabinDescription: 'Una cabaña con vistas panorámicas a las montañas.',
    //   timestamp: new Date()
    // }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.getListCabins();
  }

  getListCabins() {
    this._cabinService.getListCabins()
      .subscribe({
        next: (cabinsList: { cabins: Cabin[] }) => {
          this.arrCabins = cabinsList.cabins;
        },
        error: (error) => {
          console.error('Error fetching cabins:', error);
        },
        complete: () => {
          console.log("Completed");
        }
      });
  }

}
