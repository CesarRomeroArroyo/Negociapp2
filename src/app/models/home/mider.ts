export type Mider = Readonly<{
    status: boolean;
    categories: [];
    typesService: [];
    cities: [];
    rut: path;
}>

export interface path {
    name: string;
    path: string;
    url: string;
};

export const initialMider = {
    status: false,
    categories: [],
    typesService: [],
    cities: [],
    rut: {
        name: '',
        path: '',
        url: ''
    }
}