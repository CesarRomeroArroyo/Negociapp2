import { SelectType } from '../home/select-type';

export type Categories = Readonly<{
    categoriesServices: SelectType[];
    categoriesRent: SelectType[];
    categoriesShop: SelectType[];
}>