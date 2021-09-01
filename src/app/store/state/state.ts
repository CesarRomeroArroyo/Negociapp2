import { User } from '../../models/global/user.model';

export type State = Readonly<{
    auth: User,
}>;