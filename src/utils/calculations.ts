import { destinations } from '../types';

export const calculateCost = (weight: number, destination: string): number => {
  return weight * destinations[destination as keyof typeof destinations];
};