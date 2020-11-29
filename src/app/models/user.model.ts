export interface User {
    active?: boolean;
    city?: string;
    contact?: string
    email?: string;
    id?: string;
    name?: string;
    nameToSearch?: string;
    num_ide?: string;
    onesignal?: string;
    prestador?: boolean;
    rent?: boolean;
    service?: boolean;
    shop?: boolean;
    tip_ide?: string;
    uniqueid?: string;
    rate?: Rate[];
    lat?: number;
    lng?: number;
    midera: Mider;
    miders: Mider;
    miderv: Mider;
}

export interface Rate {
    rate?: number;
    recommend?: number;
    commentary?: string;
}

export interface Mider {
    categorias: string[];
    estado: boolean;
    niveles: any[];
    rut: string;
}