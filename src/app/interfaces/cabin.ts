export interface Cabin {
  id?: string;
  name: string;
  maxCount: number;
  rentPerNight: number;
  image: { url: string; } [];
  currentBookings: { startDate: Date; endDate: Date; } [];
  cabinType: string;
  cabinDescription: string;
  timestamp: Date;
}
