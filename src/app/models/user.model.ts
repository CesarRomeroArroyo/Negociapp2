export interface User {
    active?: boolean;
    city?: string;
    tel?: string
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
    lat?: number;
    lng?: number;
    midera: Mider;
    miders: Mider;
    miderv: Mider;
    rate?: Rate[];
    photoUrl: string;
    photoRef: string;
}

export interface Rate {
    service: number;
    recommend?: boolean;
    satisfied?: boolean;
    uniqueidItem: string;
}

export interface Mider {
    rut?: Path;
    categories: string[];
    status: boolean;
    typesService: string[];
    cities: string[];
}

export interface Path {
    name: string;
    path: string;
    url: string;
}