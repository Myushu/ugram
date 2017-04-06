import {Injectable, Injector}                                     from "@angular/core";
import {RequestMethod, Http}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {ConfigService}                                  from "app/shared/config";

// input
interface IQueryInput {
  page?: number;
  perPage?: number;
}

interface IQueryLogin {
  EMAIL: string;
  PASSWORD_HASH: string;
}

interface IQueryLoginFB {
  TOKEN: string;
}

export interface IQueryCreateUser {
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
export interface IUserShort {
  ID_USER: number;
  FIRSTNAME: string;
  LASTNAME: string;
  PSEUDO: string;
  PICTURE_PATH?: string;
  SEXE: string;
  IS_CONNECTED?: number;
}

export interface IUser extends IUserShort {
  EMAIL: string;
  COUNTRY_PHONE_CODE?: string;
  PHONE_NUMBER?: string;
  DATE_BIRTHDAY?: any;
}

export interface IUserMini {
  ID_USER: number;
  FIRSTNAME: string;
  LASTNAME: string;
  PSEUDO: string;
  PICTURE_PATH?: string;
}

export interface IUserResponse {
  count: number;
  rows: IUserShort[];
}

@Injectable()
@ResourceParams({
  url: "/users",
  withCredentials: true,
})
export class UsersService extends RestClient {
  public configService: ConfigService;

  constructor(
    http: Http,
    injector: Injector,
  ) {
    super(http, injector);
    this.configService = new ConfigService();
  }

  @ResourceAction({
    path: "/"
  })
  getUsers: ResourceMethod<IQueryInput, IUserResponse>;

  @ResourceAction({
    path: "/{!id}"
  })
  getUser: ResourceMethod<{id: number}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/signup"
  })
  createUser: ResourceMethod<IQueryCreateUser, any>;

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

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/login/facebook"
  })
  FBLoginUser: ResourceMethod<IQueryLoginFB, string>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/logout"
  })
  logoutUser: ResourceMethod<any, any>;

  formatPicturePath(user) {
    console.log('formatPic');
    if (!user.length) {
      console.log('User lenght 0');
      if (!(user.PICTURE_PATH.startsWith('https://') || user.PICTURE_PATH.startsWith('http://'))) {
        console.log('is not url');
        user.PICTURE_PATH = this.configService.baseUrl + "/picture?filename=" + user.PICTURE_PATH;
      }
      return user;
    }
    else {
      for (let i = 0; i < user.length; i++)
        user[i] = this.formatPicturePath(user[i]);
    }
  }
}
