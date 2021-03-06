import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUser}                                          from "app/services/users/users.service"
import {IPictureShort}                                  from "../pictures/pictures.service";
import {IHashtagResponse} from "../hashtags/hashtags.service";

// output
export interface ISearchPictures {
  count: number;
  rows: IPictureShort[];
}

export interface ISearchUsers {
  count: number;
  rows: IUser[];
}

@Injectable()
@ResourceParams({
  url: "/search",
  withCredentials: true,
})
export class SearchService extends RestClient {

  @ResourceAction({
    method: RequestMethod.Get,
    path: "/users?input={!INPUT}"
  })
  searchUsers: ResourceMethod<{INPUT: string}, ISearchUsers>;

  @ResourceAction({
    method: RequestMethod.Get,
    path: "/description?input={!INPUT}"
  })
  searchDescription: ResourceMethod<{INPUT: string}, ISearchPictures>;

  @ResourceAction({
    method: RequestMethod.Get,
    path: "/hashtag?input={!INPUT}&absolute={!absolute}"
  })
  searchHashtag: ResourceMethod<{INPUT: string, absolute?: boolean}, ISearchPictures>;

  @ResourceAction({
    method: RequestMethod.Get,
    path: "/autocomplete/hashtag?input={!INPUT}&absolute={!absolute}"
  })
  searchAutocompleteHashtag: ResourceMethod<{INPUT: string, absolute?: boolean}, IHashtagResponse>;

}
