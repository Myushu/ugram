import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";

interface IQueryInput {
  page?: number;
  perPage?: number;
}

interface IQueryLogin {
  EMAIL: string;
  PASSWORD_HASH: string;
}

interface IQueryCreateUser {
  FIRSTNAME?: string;
  LASTNAME?: string;
  PSEUDO?: string;
  EMAIL?: string;
  PASSWORD_HASH?: string;
  SEXE?: string;
  PICTURE_PATH?: string;
  COUNTRY_PHONE_CODE?: string;
  PHONE_NUMBER?: string;
  DATE_BIRTHDAY?: any;
}

// Output
interface IUserShort {
  ID_USER: number;
  FIRSTNAME: string;
  LASTNAME: string;
  PSEUDO: string;
  PICTURE_PATH: string;
  SEXE: string;
}

export interface IUser extends IUserShort {
  EMAIL: string;
  COUNTRY_PHONE_CODE?: string;
  PHONE_NUMBER?: string;
  DATE_BIRTHDAY: any;
}

interface IUserMini {
  ID_USER: number;
  FIRSTNAME: string;
  LASTNAME: string;
  PSEUDO: string;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class UsersService extends RestClient {

  @ResourceAction({
    isArray: true,
    path: "/"
  })
  getUsers: ResourceMethod<IQueryInput, IUserShort[]>;

  @ResourceAction({
    path: "/{!id}"
  })
  getUser: ResourceMethod<{id: number}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/signup"
  })
  createUser: ResourceMethod<IQueryCreateUser, IUser>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: "/{!ID_USER}"
  })
  updateUser: ResourceMethod<IUser, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!id}"
  })
  deleteUser: ResourceMethod<{id: number}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/login"
  })
  loginUser: ResourceMethod<IQueryLogin, string>;
}
