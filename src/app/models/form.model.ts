import { User } from './global/user.model';

export const CollectionsBd = {
  Service: 'request-services',
  Rent: 'request-rents',
  Shop: 'request-products',
  ServiceFinalizate: 'services-ended',
  RentFinalizate: 'rents-ended',
  ShopFinalizate: 'products-ended',
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
  DefaultDetailGreen: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2Fgreen.jpg?alt=media&token=3ca26816-7cbf-45ea-940a-f33437049bec',
  Deal: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2FOferta_img.svg?alt=media&token=a28b9504-3bd9-4a7c-a886-6d2f918477aa',
  iconDeal: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2FOferta.svg?alt=media&token=e094139c-3881-422f-8702-e67da52f5256',
  userIcon: 'https://firebasestorage.googleapis.com/v0/b/negociapp-1b2d8.appspot.com/o/default%2Fuser_icon.svg?alt=media&token=49fb2f2f-c6ba-4eee-a194-34f284b3f30f',
}
export const nameCard = {
  IsList: 'isList',
  IsMyOffers: 'isMyOffers',
  IsOffers: 'isOffers',
  IsMyHistorial: 'isMyHistorial',
  IsMyHistorialOffers: 'isMyHistorialOffers',
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
  closeDate?: string;
  lat?: number;
  lng?: number;
  oneSignalRequest?: string;
  rate: RateItem;
  cities: string[];
}

export interface RateItem {
  rateUser: number;
  recommend?: boolean;
  satisfied?: boolean;
  comment: string;
  uniqueidItem?: string;
}
export interface OfferUser {
  user?: User;
  value?: number;
  valueMask?: number;
  days?: number;
  conditions?: string;
}

export interface Photo {
  filepath: string;
  dataUrl: string;
}