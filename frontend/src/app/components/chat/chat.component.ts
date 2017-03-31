import { Component, OnInit } from '@angular/core';
import { SocketIoService }    from "app/shared/SocketIoService";
import {UsersService, IUserResponse, IUserShort} from "../../services/users/users.service";
import {ChatService, IChatResponse} from "app/services/chat/chat.service";
import {CookieService}    from "angular2-cookie/core";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  private message: string = "";
  private socket;
  private chat = [];
  private idUser: number = 2;
  public users: IUserShort[] = [<IUserShort>{}];
  public user: IUserShort = <IUserShort>{};

  public display: boolean = false;
  public display_body: boolean = false;

  constructor(
    private userService: UsersService,
    private chatService: ChatService,
    private _cookieService: CookieService,
  ) {}

  ngOnInit() {
    this.userService.getUsers().$observable.subscribe(
      (res: IUserResponse) => {
        this.users = res.rows;
      }
    );

    this.socket = SocketIoService.getInstance().getMessage().subscribe(message => {
      console.log('message', message);
      this.chat.push({user: message['PSEUDO'], mess: message['MESSAGE'], div: 'msg_a'});
    });
  }

  sendMessage() {
    SocketIoService.getInstance().sendMessage({MESSAGE: this.message, USER_ID: this.user.ID_USER});
    this.chat.push({user: 'me', mess: this.message, div: 'msg_b'});
    this.message = "";
  }

  messageBox(user) {
    this.chat = [];
    this.chatService.getChat({ID_USER: user.ID_USER}).$observable.subscribe(
      (res: IChatResponse) => {
        for (let i = res.rows.length - 1; i >= 0; i--) {
          console.log('hola', res.rows[i]);
          if (res.rows[i].ID_SENDER == <number><any>this._cookieService.get('user_id')) {
            console.log('bonjour');
            this.chat.push({user: 'me', mess: res.rows[i].MESSAGE, div: 'msg_b'});
          }
          else
            this.chat.push({user: user.PSEUDO, mess: res.rows[i].MESSAGE, div: 'msg_a'});
        }
        console.log('chat', this.chat);
      }
    );
    this.user = user;
    this.display = true;
  }

  closeChatBox() {
    this.display = false;
  }

  collapseBox() {
    this.display_body = !this.display_body;
  }
}
