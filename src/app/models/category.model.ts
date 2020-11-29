export const CategoryURL = {
    Service: 'service',
    Rent: 'rent',
    Shop: 'shop',
}
export const CategoryPath = {
    Service: 'Servicios',
    Rent: 'Alquiler',
    Shop: 'Tienda Digital',
}
export const dataTemplate = [
    {
        title: 'Alquiler',
        icono: '/assets/icon/btn_inicio_alquiler.svg',
        type: 'rent',
        item1: 'BUSCAR UN PRODUCTO',
        item2: 'OFERTAR PRODUCTOS',
        item3: 'MIS NEGOCIOS',
    },
    {
        title: 'Servicios',
        icono: '/assets/menu_services.svg',
        type: 'service',
        item1: 'SOLICITAR SERVICIOS',
        item2: 'OFERTAR SERVICIOS',
        item3: 'MIS NEGOCIOS',
    },
    {
        title: 'Tienda Digital',
        icono: '/assets/menu_products.svg',
        type: 'shop',
        item1: 'SOLICITAR PRODUCTOS',
        item2: 'OFERTAR PRODUCTOS',
        item3: 'MIS NEGOCIOS',
    }
];

export interface Template {
    title: string;
    icono: string;
    type: string;
    item1: string;
    item2: string;
    item3: string;
}