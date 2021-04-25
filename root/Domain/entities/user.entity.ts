import { Account } from './account.entity';
import { Profile } from './profile.entity';

export class User {
    public id: string;    
    public name: string;  
    public surname: string;
    public account: Account;
}