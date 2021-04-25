import { Profile } from './profile.entity';
import { User } from './user.entity';

export class Account {
    public id: string;
    public password: string;
    public email: string;
    public user: User;
    public profile: Profile;
}
