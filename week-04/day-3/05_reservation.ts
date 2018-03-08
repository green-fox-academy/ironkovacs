'use strict';
interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;

}
class Reservations implements Reservationy {
  getDowBooking(): string {
    let weekdays: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    let i: number = Math.floor(Math.random() * 7);
    return weekdays[i];
  }
  getCodeBooking(): string {
    let char: string = '0123456789ABCDEFGHIJKLMOPQRSTUVWXYZ';
    let bookingCode: string[] = [];
    for (let i = 0; i < 7; i++) {
      bookingCode.push(char[Math.floor(Math.random() * char.length)])
    }
    return bookingCode.join('');
  }
  getBooking(): string {
    return `Booking #${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
  booking: string = this.getBooking()
}

function myReservations() {
  let reservations: string[] = [];
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);
  reservations.push(new Reservations().booking);

  return reservations
}

console.log(myReservations())


