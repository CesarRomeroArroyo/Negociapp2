import { Categories } from '@models/data-base/categorires';
import { User } from '@models/global/user.model';

export type State = Readonly<{
    authenticationUser: User,
    categories: Categories
}>;