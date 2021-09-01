import { User } from '../../models/user.model';

export type State = Readonly<{
    auth: User,
}>;