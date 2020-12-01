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
  Default: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2Fimag_tienda_virtual.jpg?alt=media&token=a43925e2-de44-48e4-8e9c-c96271a84806',
  DefaulDetail: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2Fimag_servicios.jpg?alt=media&token=d3bed94a-1c06-4ebd-b7b5-3f9995952b82',
  Deal: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2FOferta_img.svg?alt=media&token=a28b9504-3bd9-4a7c-a886-6d2f918477aa',
  iconDeal: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2FOferta.svg?alt=media&token=e094139c-3881-422f-8702-e67da52f5256'
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