import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { SocketIoService }    from "app/shared/SocketIoService";
import {UsersService, IUserResponse, IUserShort} from "../../services/users/users.service";
import {ChatService, IChatResponse} from "app/services/chat/chat.service";
import {CookieService}    from "angular2-cookie/core";
import {FormBuilder, Validators, FormControl}    from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {TitleService} from "../../shared/title.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [TitleService]
})
export class ChatComponent implements OnInit {
  private message: string = "";
  private socket;
  private chat = [];
  public users: IUserShort[] = [<IUserShort>{}];
  public user: IUserShort = <IUserShort>{};

  public display: boolean = false;
  public display_body: boolean = false;

  public chatForm = this.fb.group({
    message: [""]
  });

  public globalNewMessage: number = 0;

  constructor(
    private userService: UsersService,
    private chatService: ChatService,
    private _cookieService: CookieService,
    private elRef: ElementRef,
    private fb: FormBuilder,
    private titleService: TitleService,
  ) {
  }

  ngOnInit() {
    this.userService.getUsers().$observable.subscribe(
      (res: IUserResponse) => {
        this.users = res.rows;
        this.users = this.users.filter(x => x.ID_USER != <number><any>this._cookieService.get('user_id'));
        for (let i = 0; i < this.users.length; i++)
          this.users[i]['newMessage'] = 0;
        console.log('users', this.users);
      }
    );

    SocketIoService.getInstance().getStatus().subscribe(
      res => {
        if (this.users.length > 0 && res['ID_USER'] != this._cookieService.get('user_id')) {
          if (res['STATUS'] == 'connected') {
            this.users.filter(x => x.ID_USER === res['ID_USER'])[0].IS_CONNECTED = 1;
            console.log('user connected', this.users);
          }
          else {
            this.users.filter(x => x.ID_USER === res['ID_USER'])[0].IS_CONNECTED = 0;
            console.log('user deconnected', this.users);
          }
        }
      }
    );

    SocketIoService.getInstance().getMessage().subscribe(message => {
      console.log('message', message);
      if (this.user == null || this.user.ID_USER != message['ID_SENDER']) {
        console.log('u', this.users.filter(x => x.ID_USER === message['ID_SENDER']));
        this.users.filter(x => x.ID_USER === message['ID_SENDER'])[0]['newMessage'] += 1;
        this.titleService.setTitleNotif(1);
        this.globalNewMessage += 1;
      }
      else if (this.users && this.user.ID_USER == message['ID_SENDER'])
        this.chat.push({user: message['PSEUDO'], mess: message['MESSAGE'], div: 'msg_a'});
    });

    SocketIoService.getInstance().updateUser().subscribe(
      data => {
        this.userService.getUsers().$observable.subscribe(
          (res: IUserResponse) => {
            this.users = res.rows;
            this.users = this.users.filter(x => x.ID_USER != <number><any>this._cookieService.get('user_id'));
            for (let i = 0; i < this.users.length; i++)
              this.users[i]['newMessage'] = 0;
            console.log('users', this.users);
          }
        );
      }
    );
  }

  sendMessage() {
    SocketIoService.getInstance().sendMessage({MESSAGE: this.chatForm.value.message, USER_ID: this.user.ID_USER});
    this.chat.push({user: 'me', mess: this.chatForm.value.message, div: 'msg_b'});
    this.chatForm.reset();
  }

  messageBox(user) {
    this.chat = [];
    user['newMessage'] = 0;
    this.titleService.deleteTitleNotif();
    this.globalNewMessage = 0;
    this.chatService.getChat({ID_USER: user.ID_USER}).$observable.subscribe(
      (res: IChatResponse) => {
        for (let i = res.rows.length - 1; i >= 0; i--) {
          if (res.rows[i].ID_SENDER == <number><any>this._cookieService.get('user_id')) {
            this.chat.push({user: 'me', mess: res.rows[i].MESSAGE, div: 'msg_b'});
          }
          else
            this.chat.push({user: user.PSEUDO, mess: res.rows[i].MESSAGE, div: 'msg_a'});
        }
      }
    );
    this.user = user;
    this.display = true;
  }

  closeChatBox() {
    this.display = false;
    this.user = null;
  }

  collapseBox() {
    this.display_body = !this.display_body;
  }
}
