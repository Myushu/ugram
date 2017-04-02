import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";

@Injectable()
@ResourceParams({
  url: "/users"
})
export class FollowService extends RestClient {

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/{!ID_USER}/follow/"
  })
  createReaction: ResourceMethod<{ID_USER: number}, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!ID_USER}/follow/"
  })
  deleteReaction: ResourceMethod<{ID_USER: number}, any>;
}

