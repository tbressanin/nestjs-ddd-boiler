import { UserModel } from "root/Application/models/user.model";
import { IBaseService } from "./IBase.interface";

export interface IUserService extends IBaseService<UserModel> {
    
}