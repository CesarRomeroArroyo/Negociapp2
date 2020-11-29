import { User } from './user.model'

export const CollectionsBd = {
  Service: 'request-services',
  Rent: 'request-rents',
  Shop: 'request-products'
}
export const MessageTabOne = {
  Service: 'Solicitar Servicio',
  Rent: 'Solicitar Alquiler',
  Shop: 'Solicitar Producto',
}
export const MessageTabTwo = {
  Service: 'Mis Servicios',
  Rent: 'Mis Alquileres',
  Shop: 'Mis Productos',
}
export interface DataForm {
  name?: string;
  type?: string;
  quantity?: number;
  time?: string;
  timeFor?: string;
  state?: string;
  categories?: string[];
  photos?: any[];
  description?: string;
  value?: number;
  valueMask?: string;
  id?: string;
  uniqueid?: string;
  offerit?: OfferUser[];
  userRequest?: string;
  userOffers?: string[],
  close?: boolean;
  lat?: string;
  lng?: string;
  oneSignalRequest?: string;
}
export interface OfferUser {
  user?: User;
  value?: number;
  days?: number;
  conditions?: string;
}

export interface Photo {
  filepath: string;
  dataUrl: string;
}