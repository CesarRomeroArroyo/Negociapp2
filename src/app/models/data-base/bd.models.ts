export interface Configurations {
  apiId_oneSingal: string;
  api_onseSignal: string;
  authorization_onseSignal: string;
  key_oneSignal: string;
  sms: string;
}

export interface ConfigurationsOnseSignal {
  apiId_oneSingal: string;
  api_onseSignal: string;
  authorization_onseSignal: string;
  key_oneSignal: string;
}

export const COLLECTIONS_BD = {
  USUARIO_APP: 'usuario-app',
  SPECIALTIES: 'specialties',
  SERVICES_TYPES: 'services-types',
  INDENTIFICATION_TYPES: 'identification-types',
  CONFIGURATIONS: 'configurations',
  CITIES: 'cities',
  CATEGORIES_SEVICES: 'categories-services',
  CATEGORIES_RENT: 'categories-rent',
  CATEGORIES_SHOP: 'categories-shop',
  REQUEST_SERVICES: 'request-services',
  SERVICES_ENDED: 'services_ended',
  REQUEST_RENTS: 'request-rents',
  RENTS_ENDED: 'rents-ended',
  REQUEST_PRODUCTS: 'request-products',
  PRODUCTS_ENDED: 'products-ended',
}