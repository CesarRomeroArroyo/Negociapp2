import { User } from './user.model'

export const CollectionsBd = {
  Service: 'request-services',
  Rent: 'request-rents',
  Shop: 'request-products',
  UserRequest: 'userRequest'
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
export const imgStorage = {
  Default: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2Fimag_tienda_virtual.jpg?alt=media&token=a43925e2-de44-48e4-8e9c-c96271a84806'
}
export interface DataForm {
  name?: string;
  type?: string;
  quantity?: number;
  time?: string;
  timeFor?: string;
  state?: string;
  categories?: string[];
  photos?: Photo[];
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