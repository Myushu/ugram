import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "../users/users.service";

interface IQueryInput {
  page?: number;
  perPage?: number;
}

interface IQueryCreateMention {
  ID_USER: number;
  ID_PICTURE: number;
}

interface IMentions {
  ID_USER: number;
  USER: IUserMini;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class MentionsService extends RestClient {

  @ResourceAction({
    method: RequestMethod.Post
  })
  createUser: ResourceMethod<IUser, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!id}"
  })
  deleteUser: ResourceMethod<{id: any}, any>;
}

