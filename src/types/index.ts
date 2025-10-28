export interface Box {
  id: string;
  receiverName: string;
  weight: number;
  color: string; // RGB format, e.g., "rgb(255,255,255)"
  destination: string;
  cost: number;
}

export const destinations = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};